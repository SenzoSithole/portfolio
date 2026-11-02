import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
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
          <form className="space-y-6" autoComplete="off">
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
                className="placeholder:opacity-45 bg-white/2 border border-white/20 rounded w-full py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
