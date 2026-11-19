
import FormField from "./FormField.jsx";

export default function StudentBusPassForm({
  form,
  onChange,
  onSubmit,
  onClear,
  saving,
}) {
  return (
    <form onSubmit={onSubmit}>
      <FormField label="Student Name" htmlFor="studentName">
        <input
          id="studentName"
          name="studentName"
          type="text"
          value={form.studentName}
          onChange={onChange}
          placeholder="Enter student name"
          required
        />
      </FormField>

      <FormField label="Date of Birth" htmlFor="dob">
        <input
          id="dob"
          name="dob"
          type="date"
          value={form.dob}
          onChange={onChange}
          required
        />
      </FormField>

      <FormField label="Mobile Number" htmlFor="mobile">
        <input
          id="mobile"
          name="mobile"
          type="tel"
          inputMode="numeric"
          value={form.mobile}
          onChange={onChange}
          placeholder="10-digit mobile number"
          pattern="[0-9]{10}"
          maxLength={10}
          required
        />
      </FormField>

      <fieldset className="field gender-field">
        <legend>Gender</legend>

        <div className="radio-group">
          {["Male", "Female", "Other"].map((option) => (
            <label className="radio-label" key={option}>
              <input
                type="radio"
                name="gender"
                value={option}
                checked={form.gender === option}
                onChange={onChange}
                required
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <FormField label="Course" htmlFor="course">
        <select
          id="course"
          name="course"
          value={form.course}
          onChange={onChange}
          required
        >
          <option value="">Select course</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Diploma">Diploma</option>
          <option value="Degree">Degree</option>
          <option value="B.Tech">B.Tech</option>
          <option value="Other">Other</option>
        </select>
      </FormField>

      <FormField label="College Name" htmlFor="collegeName">
        <input
          id="collegeName"
          name="collegeName"
          type="text"
          value={form.collegeName}
          onChange={onChange}
          placeholder="Enter college name"
          required
        />
      </FormField>

      <FormField label="Residential Address" htmlFor="address">
        <textarea
          id="address"
          name="address"
          value={form.address}
          onChange={onChange}
          placeholder="Enter full address"
          rows={3}
          required
        />
      </FormField>

      <FormField label="Bus Pass Type" htmlFor="passType">
        <select
          id="passType"
          name="passType"
          value={form.passType}
          onChange={onChange}
          required
        >
          <option value="">Select pass type</option>
          <option value="Monthly">Monthly</option>
          <option value="Quarterly">Quarterly</option>
        </select>
      </FormField>

      <div className="button-row">
        <button type="submit" disabled={saving}>
          {saving ? "Submitting..." : "Submit Application"}
        </button>

        <button
          type="button"
          className="clear-button"
          onClick={onClear}
          disabled={saving}
        >
          Clear Form
        </button>
      </div>
    </form>
  );
}
