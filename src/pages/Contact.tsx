import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-hot-toast";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-zinc-800 mb-8">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-zinc-700">
              Get in Touch
            </h3>
            <p className="text-zinc-600">
              We'd love to hear from you. Please fill out the form or contact us
              using the information below.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-zinc-600">
                <FaPhone size={20} />
                <span>+91 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-600">
                <FaEnvelope size={20} />
                <span>contact@foodcourt.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-600">
                <FaMapMarkerAlt size={20} />
                <span>123 Gourmet Street, Foodie City, FC 12345</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-6 rounded-lg shadow-md"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-800"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-800"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-800"
                placeholder="Your message here..."
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-zinc-800 text-white font-semibold rounded-md hover:bg-zinc-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
