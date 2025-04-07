import { motion } from "framer-motion";

export default function AnniversaryPage() {
  return (
    <div className="min-h-screen bg-black text-gold px-4 py-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Ashok Kumar & Seema Gupta</h1>
        <h2 className="text-2xl mb-6">25th Wedding Anniversary</h2>
        <p className="text-lg max-w-xl mx-auto">
          We cordially invite you to join us in celebrating our 25th wedding anniversary.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-10 max-w-md mx-auto"
      >
        <div className="bg-gold text-black shadow-xl rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-semibold text-center">Event Details</h3>
          <p className="text-center">Date: 23rd April 2025</p>
          <p className="text-center">Time: 7:30 PM</p>
          <p className="text-center">Location: Maya Hotel, Chandigarh, Sector 35B</p>
          <div className="w-full h-64 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1181837402743!2d76.76517901512354!3d30.7333149816448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedc7e4f740d7%3A0x1e7f74a08fef9f7e!2sMaya%20Hotel%2C%20Sector%2035B%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1683019209874!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="bg-gold text-black shadow-xl rounded-2xl p-6 space-y-4 mt-6">
          <h3 className="text-xl font-semibold text-center">Contact Us</h3>
          <p className="text-center">Ashok Kumar: 6239655408</p>
          <p className="text-center">Seema Gupta: 9815963929</p>
        </div>
      </motion.div>
    </div>
  );
}
