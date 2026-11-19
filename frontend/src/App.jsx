
import { useState } from "react";
import StudentBusPassForm from "./components/StudentBusPassForm.jsx";
import { createBusPassApplication } from "./api.js";
import "./App.css";

const initialForm = {
  studentName: "",
  dob: "",
  mobile: "",
  gender: "",
  course: "",
  collegeName: "",
  address: "",
  passType: "",
};

export default function App() {
  const [form, setForm] = useState({ ...initialForm });
  const [saving, setSaving] = useState(false);
  const [apiError, setApiError] = useState("");
  const [savedApplication, setSavedApplication] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setApiError("");
    setSavedApplication(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSaving(true);
    setApiError("");
    setSavedApplication(null);

    const payload = {
      student_name: form.studentName.trim(),
      dob: form.dob,
      mobile: form.mobile,
      gender: form.gender,
      course: form.course,
      college_name: form.collegeName.trim(),
      address: form.address.trim(),
      pass_type: form.passType,
    };

    try {
      const saved = await createBusPassApplication(payload);
      setSavedApplication(saved);
    } catch (error) {
      setApiError(error.message || "Unable to submit application.");
    } finally {
      setSaving(false);
    }
  }

  function handleClear() {
    setForm({ ...initialForm });
    setApiError("");
    setSavedApplication(null);
  }

  return (
    <main className="container">
      <header className="form-header">
        <h1>APSRTC Student Bus Pass</h1>
        <p className="intro">
          Enter your details to submit your application.
        </p>
      </header>

      {apiError && (
        <div className="status-message error-message" role="alert">
          <strong>Submission failed</strong>
          <p>{apiError}</p>
        </div>
      )}

      {savedApplication && (
        <div className="status-message success-message" role="status">
          <strong>Application saved successfully!</strong>
          <p>Application ID: #{savedApplication.id}</p>
        </div>
      )}

      <StudentBusPassForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClear={handleClear}
        saving={saving}
      />

      {savedApplication && (
        <section className="result" aria-labelledby="result-heading">
          <h2 id="result-heading">Application Preview</h2>

          <dl className="result-list">
            <div>
              <dt>Student Name</dt>
              <dd>{savedApplication.student_name}</dd>
            </div>
            <div>
              <dt>Date of Birth</dt>
              <dd>{savedApplication.dob}</dd>
            </div>
            <div>
              <dt>Mobile Number</dt>
              <dd>{savedApplication.mobile}</dd>
            </div>
            <div>
              <dt>Gender</dt>
              <dd>{savedApplication.gender}</dd>
            </div>
            <div>
              <dt>Course</dt>
              <dd>{savedApplication.course}</dd>
            </div>
            <div>
              <dt>College Name</dt>
              <dd>{savedApplication.college_name}</dd>
            </div>
            <div>
              <dt>Residential Address</dt>
              <dd>{savedApplication.address}</dd>
            </div>
            <div>
              <dt>Bus Pass Type</dt>
              <dd>{savedApplication.pass_type}</dd>
            </div>
          </dl>

          <p className="demo-note">
            Demo application saved in your database.
            This is not an official APSRTC application.
          </p>
        </section>
      )}
    </main>
  );
}
