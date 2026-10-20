
const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);

function contactEmail({ name, email, phone, subject, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message)
    .replace(/\r\n|\r|\n/g, "<br>");

  const safePhone = phone?.trim()
    ? escapeHtml(phone.trim())
    : null;

  const safeSubject = subject?.trim()
    ? escapeHtml(subject.trim())
    : null;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, initial-scale=1">
      </head>

      <body style="
        margin:0;
        padding:32px 12px;
        background-color:#f1f5f9;
        font-family:Arial,sans-serif;
      ">

        <table role="presentation"
          width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center">

              <table role="presentation"
                width="100%" cellpadding="0" cellspacing="0"
                style="
                  max-width:600px;
                  background:#ffffff;
                  border-collapse:collapse;
                ">

                <tr>
                  <td style="
                    padding:32px;
                    background:#0c6d66;
                    color:#ffffff;
                  ">
                    <h2 style="margin:0;">
                      K&G International Exhibition Design and Construction.
                    </h2>
                    <p>New Contact Message</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:32px;">

                    <h3>New inquiry received</h3>

                    <p>
                      <strong>Name:</strong><br>
                      ${safeName}
                    </p>

                    <p>
                      <strong>Email:</strong><br>
                      ${safeEmail}
                    </p>

                    ${
                      safePhone
                        ? `
                          <p>
                            <strong>Phone Number:</strong><br>
                            ${safePhone}
                          </p>
                        `
                        : ""
                    }

                    ${
                      safeSubject
                        ? `
                          <p>
                            <strong>Subject:</strong><br>
                            ${safeSubject}
                          </p>
                        `
                        : ""
                    }

                    <p><strong>Message:</strong></p>

                    <div style="
                      padding:20px;
                      background:#f1f5f9;
                      border-radius:8px;
                      line-height:1.6;
                      overflow-wrap:break-word;
                    ">
                      ${safeMessage}
                    </div>

                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:20px;
                    text-align:center;
                    color:#64748b;
                    font-size:12px;
                  ">
                    Sent automatically from your website
                  </td>
                </tr>

              </table>

            </td>
          </tr>
        </table>

      </body>
    </html>
  `;
}

export default contactEmail;
