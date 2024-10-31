async function sendEmail(
  formData: Record<string, any>,
): Promise<{ status: string }> {
  const formEndpoint = "https://formspree.io/f/xzzbeeap";

  // Convert the object to FormData format
  const formattedData = new FormData();
  for (const key in formData) {
    formattedData.append(key, formData[key]);
  }

  // Send data to Formspree
  try {
    const response = await fetch(formEndpoint, {
      method: "POST",
      body: formattedData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      console.log("Email sent successfully!");
      return { status: "success" };
    } else {
      console.log("Failed to send email.");
      return { status: "error" };
    }
  } catch (error) {
    console.error("Error:", error);
    return { status: "error" };
  }
}

async function sendReservationEmail(
  formData: Record<string, any>,
): Promise<{ status: string }> {
  const formEndpoint = "https://formspree.io/f/xvgokkvk";

  // Convert the object to FormData format
  const formattedData = new FormData();
  for (const key in formData) {
    formattedData.append(key, formData[key]);
  }

  // Send data to Formspree
  try {
    const response = await fetch(formEndpoint, {
      method: "POST",
      body: formattedData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      console.log("Email sent successfully!");
      return { status: "success" };
    } else {
      console.log("Failed to send email.");
      return { status: "error" };
    }
  } catch (error) {
    console.error("Error:", error);
    return { status: "error" };
  }
}

export { sendEmail, sendReservationEmail };
