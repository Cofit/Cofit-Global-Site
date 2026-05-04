import { motion } from "motion/react";

export default function HowItWorksSection() {
  return (
    <section className="py-32 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="mb-6"
            style={{
              fontSize: '56px',
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'var(--color-text)',
            }}
          >
            Change behavior, live better.
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: '20px',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
            }}
          >
            A science-backed approach combining human expertise with intelligent technology
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-16 items-center mb-32 max-md:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-[#169E6B] to-[#00C2E0] rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
            />
            <motion.img
              src="https://images.unsplash.com/photo-1675270690434-aa99f4871e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Nutritionist consultation"
              className="w-full rounded-2xl shadow-2xl relative"
              style={{ aspectRatio: '4/5', objectFit: 'cover' }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                className="mb-4 inline-block px-4 py-2 rounded-full"
                style={{
                  backgroundColor: '#f0fffe',
                  color: 'var(--color-primary)',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              >
                Step 1
              </motion.div>
              <h3
                className="mb-4"
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                }}
              >
                Meet your expert nutritionist
              </h3>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: 'var(--color-text-secondary)',
                }}
              >
                Start with a comprehensive health assessment. Our certified nutritionists create a personalized plan based on your metabolic health, lifestyle, and goals.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-16 items-center mb-32 max-md:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-md:order-2"
          >
            <div>
              <motion.div
                className="mb-4 inline-block px-4 py-2 rounded-full"
                style={{
                  backgroundColor: '#f0fffe',
                  color: 'var(--color-primary)',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              >
                Step 2
              </motion.div>
              <h3
                className="mb-4"
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                }}
              >
                Track your progress daily
              </h3>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: 'var(--color-text-secondary)',
                }}
              >
                Log your meals, monitor blood sugar, and track weight changes through our easy-to-use app. Get real-time feedback and AI-powered insights.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-md:order-1 relative group"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-[#004F51] to-[#169E6B] rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
            />
            <motion.img
              src="https://images.unsplash.com/photo-1588177806780-51d021f6b2d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Health tracking app"
              className="w-full rounded-2xl shadow-2xl relative"
              style={{ aspectRatio: '4/5', objectFit: 'cover' }}
              whileHover={{ scale: 1.02, rotateY: -2 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-16 items-center max-md:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-[#FFB46E] to-[#169E6B] rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
            />
            <motion.img
              src="https://images.unsplash.com/photo-1660777748008-68d206e4a632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Healthy meals"
              className="w-full rounded-2xl shadow-2xl relative"
              style={{ aspectRatio: '4/5', objectFit: 'cover' }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                className="mb-4 inline-block px-4 py-2 rounded-full"
                style={{
                  backgroundColor: '#f0fffe',
                  color: 'var(--color-primary)',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              >
                Step 3
              </motion.div>
              <h3
                className="mb-4"
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                }}
              >
                Build sustainable habits
              </h3>
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: 'var(--color-text-secondary)',
                }}
              >
                Weekly check-ins with your nutritionist, behavioral coaching, and clinic support ensure you stay on track and achieve lasting results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
