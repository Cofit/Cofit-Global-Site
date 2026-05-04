import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";
import AnimatedText from "./AnimatedText";

export default function ClosingSection() {
  return (
    <>
      <section
        className="relative py-32 overflow-hidden"
        id="contact"
        style={{
          background: 'linear-gradient(135deg, #004F51 0%, #169E6B 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <div>
            <AnimatedText
              text="Start your journey to better health today"
              className="mb-8 text-white"
              style={{
                fontSize: '56px',
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            />

            <p
              className="mb-12 text-white/90"
              style={{
                fontSize: '24px',
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              Join thousands who have transformed their health with personalized nutrition and expert support
            </p>

            <motion.div
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <MagneticButton
                href="mailto:partnerships@cofit.me"
                className="text-[#004F51] shadow-2xl"
                style={{
                  backgroundColor: 'white',
                  fontSize: '18px',
                }}
              >
                Get Started Now
              </MagneticButton>
              <MagneticButton
                href="#"
                className="text-white backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  fontSize: '18px',
                }}
              >
                Talk to an Expert
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#00C2E0]/10 rounded-full blur-3xl"
          style={{ x: "-50%", y: "-50%" }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </section>

      <footer className="bg-gradient-to-br from-[#1a2233] to-[#004F51] text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4 gap-12 mb-12 max-md:grid-cols-1">
            <div>
              <h4 className="font-bold mb-4 text-lg">Product</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Flex8 Program</li>
                <li>1-on-1 Consultation</li>
                <li>Corporate Solutions</li>
                <li>Healthcare Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Partners</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Become a Partner</li>
                <li>Success Stories</li>
                <li>Partner Resources</li>
                <li>API Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Legal</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="opacity-50 text-sm">© 2026 Cofit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
