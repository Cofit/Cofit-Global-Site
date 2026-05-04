import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";
import img1 from "../../../imports/ChatGPT_Image_Apr_24,_2026,_05_37_26_PM.png";
import img2 from "../../../imports/ChatGPT_Image_Apr_24,_2026,_11_20_17_AM.png";
import img3 from "../../../imports/ChatGPT_Image_Apr_24,_2026,_05_28_44_PM.png";
import img4 from "../../../imports/ChatGPT_Image_Apr_24,_2026,_06_35_11_PM.png";

export default function ExpertsSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-[#f0fffe]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="mb-6"
              style={{
                fontSize: '56px',
                fontWeight: 700,
                lineHeight: 1.1,
                color: 'var(--color-text)',
              }}
            >
              Backed by expert nutritionists
            </h2>
            <p
              className="mb-8"
              style={{
                fontSize: '20px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'var(--color-text-secondary)',
              }}
            >
              Our team of certified nutritionists and dietitians bring decades of combined experience in metabolic health, diabetes management, and sustainable weight loss.
            </p>
            <p
              className="mb-12"
              style={{
                fontSize: '20px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'var(--color-text-secondary)',
              }}
            >
              Every member is licensed, continuously trained, and dedicated to helping you achieve lasting results through personalized, evidence-based care.
            </p>
            <MagneticButton
              href="#contact"
              className="text-white shadow-lg"
              style={{
                backgroundColor: '#004F51',
                fontSize: '18px',
              }}
            >
              Meet Our Team
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <motion.img
                src={img1}
                alt="Nutritionist"
                className="w-full rounded-2xl shadow-lg"
                style={{ aspectRatio: '3/4', objectFit: 'cover' }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.img
                src={img2}
                alt="Health coach"
                className="w-full rounded-2xl shadow-lg"
                style={{ aspectRatio: '3/4', objectFit: 'cover' }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <div className="space-y-4 pt-12">
              <motion.img
                src={img3}
                alt="Clinical dietitian"
                className="w-full rounded-2xl shadow-lg"
                style={{ aspectRatio: '3/4', objectFit: 'cover' }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.img
                src={img4}
                alt="Medical team"
                className="w-full rounded-2xl shadow-lg"
                style={{ aspectRatio: '3/4', objectFit: 'cover' }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
