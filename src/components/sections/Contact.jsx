import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        console.log(result.text);
        alert("Message Sent!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => alert("Something went wrong, please try again!"));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center  py-20">
      <RevealOnScroll>
        <div className="px-4 py-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>
          <p className="text-center mb-8">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
            <div className="relative">
              <label htmlFor="name" className="block text-gray-300 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="placeholder:opacity-45 bg-white/2 border border-white/20 rounded w-full py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="placeholder:opacity-45 bg-white/2 border border-white/20 rounded w-full py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10  "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="placeholder:opacity-45 bg-white/2 border border-white/20 rounded w-full py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
              ></textarea>
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-blue-500/80 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(59,130,246,0.5)] focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
