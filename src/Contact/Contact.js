import React, { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};

    // Name validation
    if (!formData.name || formData.name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^[0-9\s()+-]{10,}$/;
    if (!formData.phone || formData.phone.trim() === "") {
      newErrors.phone = "Phone is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits)";
    }

    // Subject validation
    if (!formData.subject || formData.subject.trim() === "") {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    // Message validation
    if (!formData.message || formData.message.trim() === "") {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().split(/\s+/).length > 500) {
      newErrors.message = "Message cannot exceed 500 words";
    }

    return newErrors;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    // TODO: wire actual submit
    alert("Message sent successfully!\n" + JSON.stringify(formData));
    e.target.reset();
    setMessage("");
    setTouched({});
  }

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  return (
    <main className="min-h-screen contact_bg flex items-center justify-center px-4 py-16 bg-gray-50">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <section className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl text-green-600 md:text-6xl font-bold leading-tight">Let’s get in touch</h1>

            <div className="mt-6 text-gray-700 max-w-md">
              <p className="mb-4 text-lg font-semibold">From questions to solutions!<br />let’s begin</p>

              <p className="mb-2"><strong>Phone:</strong> <a href="tel:+918744090761" className="text-green-600">+91 99998 04777</a></p>

              <p className="mb-2">For information, contact <a href="mailto:info@syndratech.com" className="text-green-600">info@idvlhallmarking.com</a></p>
              <p className="mb-2"><strong>Business Hours </strong>
              </p>
              <p className="mb-2"> <a href="tel:+918744090761" className="text-green-600">Monday - Saturday: 10:00 AM - 6:00 PM
              </a></p>
              <p className="mb-2"> <a href="tel:+918744090761" className="text-green-600">Sunday: Closed
              </a></p>

              <p className="mb-2">1164/2, IV Floor, Kucha Mahajani, Chandni Chowk, Central Delhi, Delhi, India - 110006</p>
            </div>
          </section>

          <section className="md:col-span-2 flex justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-3xl rounded shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Name *</label>
                  <input
                    name="name"
                    required
                    onBlur={() => handleBlur("name")}
                    className={`mt-2 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 ${errors.name && touched.name
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:ring-green-200"
                      }`}
                  />
                  {errors.name && touched.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-600">Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    onBlur={() => handleBlur("email")}
                    className={`mt-2 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 ${errors.email && touched.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:ring-green-200"
                      }`}
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-600">Phone *</label>
                  <input
                    name="phone"
                    required
                    onBlur={() => handleBlur("phone")}
                    className={`mt-2 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 ${errors.phone && touched.phone
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:ring-green-200"
                      }`}
                  />
                  {errors.phone && touched.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-600">Subject *</label>
                  <input
                    name="subject"
                    required
                    onBlur={() => handleBlur("subject")}
                    className={`mt-2 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 ${errors.subject && touched.subject
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-200 focus:ring-green-200"
                      }`}
                  />
                  {errors.subject && touched.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm text-gray-600">Messages *</label>
                <textarea
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => handleBlur("message")}
                  rows={6}
                  className={`mt-2 w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 ${errors.message && touched.message
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-200 focus:ring-green-200"
                    }`}
                />
                <div className={`text-xs mt-2 ${message.trim().split(/\s+/).length > 500 ? "text-red-500" : "text-gray-400"
                  }`}>
                  Word count: {message.trim() ? message.trim().split(/\s+/).length : 0}/500
                </div>
                {errors.message && touched.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <div className="mt-6 flex justify-center md:justify-end">
                <button type="submit" className="px-6 py-2 rounded border border-green-500 text-green-600 hover:bg-green-50">Send Message</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
