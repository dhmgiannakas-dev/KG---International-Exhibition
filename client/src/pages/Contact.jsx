import { useState, useEffect } from "react";
import axios from "axios";
import "./Contact.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const contactDetails = [
  {
    icon: <LocationOnIcon />,
    label: "Our Address",
    content: "182 Souliou Street, Petroupoli, Athens, Greece",
    href: "https://www.google.com/maps/search/?api=1&query=Souliou+182+Petroupoli+Greece",
  },
  {
    icon: "☎",
    label: "Phone Number",
    content: "+30 210 5718215",
    href: "tel:+302105718215",
  },
  {
    icon: "✉",
    label: "Email Address",
    content: "info@k-g.gr",
    href: "mailto:info@k-g.gr",
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [consent, setConsent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  
// Μέσα στο Contact component:
useEffect(() => {
  console.log("Loading changed:", loading);
}, [loading]);

const handleSubmit = async (event) => {
  event.preventDefault();

  if (loading) return;

  const formElement = event.currentTarget;

  // Validate before sending
  if (!formElement.reportValidity() || !consent) {
    return;
  }

  setLoading(true);
  setStatus("");

  try {
    const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/contact`,
  form
);

    // Axios resolves successful 2xx responses
    setStatus(
      response.data.message || "Message sent successfully!"
    );

    // Reset form after success
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setConsent(false);

  } catch (error) {
    console.error("Contact form error:", error);

    setStatus(
      error.response?.data?.message ||
      "Κάτι πήγε στραβά. Δοκίμασε ξανά."
    );

  } finally {
    setLoading(false);
  }
};


  return (
    <main className="kg-contact-page">
      {/* =====================================
          HERO SECTION
      ===================================== */}
      <section className="kg-exhibitions__hero kg-contact-page__hero">
        <div className="kg-container kg-exhibitions__hero-inner">
          <p className="kg-eyebrow">KG / Let's connect</p>
          <h1>
            Make It <em>Happen.</em>
          </h1>
          <p className="kg-exhibitions__lead">
            Have a project in mind? Let's bring your vision to life and create something extraordinary together.
          </p>
          <div className="kg-exhibitions__hero-meta">
            <span>Connect</span>
            <span>Collaborate</span>
            <span>Create</span>
          </div>
        </div>
      </section>

      {/* =====================================
          CONTACT INFORMATION + FORM
      ===================================== */}
      <section className="kg-contact-page__content">
        <div className="kg-contact-page__container">
          <div className="kg-contact-page__columns">
            {/* LEFT: CONTACT DETAILS */}
            <div className="kg-contact-page__information">
              <span className="kg-contact-page__section-label">
                GET IN TOUCH
              </span>

              <h2 className="kg-contact-page__section-title">
                We'd love to <span>hear from you.</span>
              </h2>

              <p className="kg-contact-page__intro">
                Whether you're planning your next exhibition or simply
                have a question, our team is here to help.
              </p>

              <div className="kg-contact-page__details">
                {contactDetails.map((detail) => (
                  <div
                    className="kg-contact-page__detail"
                    key={detail.label}
                  >
                    <div
                      className="kg-contact-page__detail-icon"
                      aria-hidden="true"
                    >
                      {detail.icon}
                    </div>

                    <div className="kg-contact-page__detail-text">
                      <h3>{detail.label}</h3>

                      <p>{detail.content}</p>

                      <a
                        href={detail.href}
                        target={
                          detail.label === "Our Address"
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          detail.label === "Our Address"
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                      </a>
                    </div>
                  </div>
                ))}

                {/* OPENING HOURS */}
                <div className="kg-contact-page__detail">
                  <div
                    className="kg-contact-page__detail-icon"
                    aria-hidden="true"
                  >
                    ◷
                  </div>

                  <div className="kg-contact-page__detail-text">
                    <h3>Opening Hours</h3>

                    <ul className="open-hours">
                      <li><strong>Monday - Friday:</strong> 08:00 - 20:00</li>
                      <li><strong>Saturday:</strong> 08:00 - 13:30</li>
                      <li><strong>Sunday:</strong> Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: CONTACT FORM */}
            <div className="kg-contact-page__form-column">
              <span className="kg-contact-page__section-label">
                SEND A MESSAGE
              </span>

              <h2 className="kg-contact-page__section-title">
                Tell us about <span>your project.</span>
              </h2>

              <p className="kg-contact-page__form-description">
                Fill in the details below and get in touch with our team.
              </p>

              <form
                className="kg-contact-page__form"
                onSubmit={handleSubmit}
              >
                <div className="kg-contact-page__form-row">
                  <div className="kg-contact-page__field">
                    <label htmlFor="contact-name">
                      Full Name <span>*</span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      autoComplete="name"
                      value={form.name}
                      onChange={updateField}
                      required
                    />
                  </div>

                  <div className="kg-contact-page__field">
                    <label htmlFor="contact-email">
                      Email Address <span>*</span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      autoComplete="email"
                      value={form.email}
                      onChange={updateField}
                      required
                    />
                  </div>
                </div>

                <div className="kg-contact-page__form-row">
                  <div className="kg-contact-page__field">
                    <label htmlFor="contact-phone">
                      Phone Number
                    </label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={updateField}
                    />
                  </div>

                  <div className="kg-contact-page__field">
                    <label htmlFor="contact-subject">
                      Subject
                    </label>

                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help?"
                      value={form.subject}
                      onChange={updateField}
                    />
                  </div>
                </div>

                <div className="kg-contact-page__field">
                  <label htmlFor="contact-message">
                    Your Message <span>*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="6"
                    placeholder="Tell us a little about your project..."
                    value={form.message}
                    onChange={updateField}
                    required
                  />
                </div>

                <label className="kg-contact-page__consent">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(event) =>
                      setConsent(event.target.checked)
                    }
                    required
                  />

                  <span>
                    I agree to share my details with K&G
                    International for the purpose of this enquiry.
                  </span>
                </label>

                <button
                  className="kg-contact-page__submit"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Email"}
                </button>

                <p role="status" aria-live="polite">
                  {status}
                </p>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          GOOGLE MAPS
      ===================================== */}
      <section className="kg-contact-page__location">
        <div className="kg-contact-page__container">
          <div className="kg-contact-page__location-heading">
            <div>
              <span className="kg-contact-page__section-label">
                FIND US
              </span>

              <h2 className="kg-contact-page__section-title">
                Come <span>visit us.</span>
              </h2>

              <p>
                182 Souliou Street, Petroupoli, Athens, Greece
              </p>
            </div>

            <a
              className="kg-contact-page__directions"
              href="https://www.google.com/maps/search/?api=1&query=Souliou+182+Petroupoli+Greece"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions ↗
            </a>
          </div>

          <div className="kg-contact-page__map">
            <iframe
              title="K&G International - Location in Petroupoli"
              src="https://www.google.com/maps?q=Souliou%20182%2C%20Petroupoli%2C%20Greece&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
}
