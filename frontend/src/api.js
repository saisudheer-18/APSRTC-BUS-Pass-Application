
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://127.0.0.1:8000/api";

export async function createBusPassApplication(application) {
  const response = await fetch(
    `${API_BASE_URL}/bus-pass-applications/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(application),
    }
  );

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    let message = `Request failed (${response.status})`;

    if (data && typeof data === "object") {
      message = Object.entries(data)
        .map(([field, errors]) => {
          const details = Array.isArray(errors)
            ? errors.join(" ")
            : String(errors);

          return `${field}: ${details}`;
        })
        .join("\n");
    }

    throw new Error(message);
  }

  return data;
}
