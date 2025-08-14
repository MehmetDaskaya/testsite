"use client";

import { useState } from "react";

export default function TestContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch("/api/contact-resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Request failed");
      setStatus({ state: "success", message: "Message sent successfully." });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        state: "error",
        message: err.message || "Failed to send message.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#1a2e1a] mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2d4d44]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1a2e1a] mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2d4d44]"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1a2e1a] mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2d4d44]"
            placeholder="Write your message..."
          />
        </div>
        <button
          type="submit"
          disabled={status.state === "loading"}
          className="inline-flex items-center justify-center bg-[#2d4d44] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#243f38] transition-all disabled:opacity-70"
        >
          {status.state === "loading" ? "Sending..." : "Send Test Message"}
        </button>
        {status.state === "success" && (
          <p className="text-green-700">{status.message}</p>
        )}
        {status.state === "error" && (
          <p className="text-red-600">{status.message}</p>
        )}
      </div>
    </form>
  );
}
