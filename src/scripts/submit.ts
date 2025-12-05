async function submitForm(e: React.FormEvent<HTMLFormElement>) {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwgaHeU56-8fammebPNm5n8QRbj8RzahTBNai9WgsiMA2P2lIhdLk1tm0JMQtg7iSxS/exec";

  const form = document.getElementById("commission-form") as HTMLFormElement;
  const resubmitBtn = document.getElementById(
    "resubmit-btn"
  ) as HTMLButtonElement;
  const statusMessage = document.getElementById("status-msg") as HTMLElement;
  e.preventDefault();

  resubmitBtn.disabled = true;
  statusMessage.textContent = "sending information...";
  statusMessage.className = "message";

  const formData = {
    name: (document.getElementById("name-input") as HTMLInputElement).value,
    email: (document.getElementById("email-input") as HTMLInputElement).value,
    purpose: (document.getElementById("purpose-input") as HTMLInputElement)
      .value,
    timeline: (document.getElementById("timeline-input") as HTMLInputElement)
      .value,
    description: (
      document.getElementById("description-input") as HTMLTextAreaElement
    ).value,
    additionalInfo: (
      document.getElementById("additional-info-input") as HTMLTextAreaElement
    ).value,
  };

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    statusMessage.textContent =
      "thank you! we will contact you with further information soon!";
    statusMessage.className = "status-msg success";
    form.reset();
  } catch (error) {
    statusMessage.textContent =
      "sorry, we are having issues at the moment, please try again!";
    statusMessage.className = "status-msg error";
  } finally {
    resubmitBtn.disabled = false;
  }
}

export { submitForm };
