import React, { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire actual submit
    alert("Message sent (demo).\n" + JSON.stringify(Object.fromEntries(new FormData(e.target))));
    e.target.reset();
    setMessage("");
  }

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
                  <input name="name" required className="mt-2 w-full rounded border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Email *</label>
                  <input name="email" type="email" required className="mt-2 w-full rounded border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Phone *</label>
                  <input name="phone" required className="mt-2 w-full rounded border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Subject *</label>
                  <input name="subject" required className="mt-2 w-full rounded border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm text-gray-600">Messages *</label>
                <textarea
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="mt-2 w-full rounded border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
                />
                <div className="text-xs text-gray-400 mt-2">Word count: {message.trim() ? message.trim().split(/\s+/).length : 0}/500</div>
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
