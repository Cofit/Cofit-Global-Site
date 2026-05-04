import { motion } from "motion/react";
import AnimatedText from "./AnimatedText";

export default function SolutionsSection() {
  return (
    <section className="py-32 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <AnimatedText
            text="Solutions designed for everyone"
            className="mb-6"
            style={{
              fontSize: '56px',
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'var(--color-text)',
            }}
          />
          <motion.p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: '20px',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'var(--color-text-secondary)',
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From individuals to healthcare organizations, we provide comprehensive metabolic health support
          </motion.p>
        </div>

        <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
          {[
            {
              title: "For Individuals",
              description: "Personalized nutrition plans, daily tracking, and expert support to help you lose weight, manage diabetes, and improve overall health.",
              image: "https://images.unsplash.com/photo-1760888548654-b75cced14d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              bgColor: "#f0fffe",
            },
            {
              title: "For Healthcare Providers",
              description: "Digital nutrition tools integrated with your clinic workflow. Patient education, remote monitoring, and outcome tracking.",
              image: "https://images.unsplash.com/photo-1675270616422-ae71e8c99db0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              bgColor: "#fff3e8",
            },
            {
              title: "For Partners",
              description: "Scalable health programs for corporations, insurers, and wellness platforms. White-label solutions and API integration available.",
              image: "https://images.unsplash.com/photo-1758691463203-cce9d415b2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
              bgColor: "#e0fbff",
            },
          ].map((solution, index) => (
            <motion.div
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: "0 24px 48px rgba(0, 79, 81, 0.15)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${solution.bgColor}, transparent)`,
                }}
              />
              <div className="relative bg-white rounded-2xl">
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <motion.img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, ${solution.bgColor} 100%)`,
                    opacity: 0.3,
                  }}
                />
              </div>

              <div className="p-8">
                <h3
                  className="mb-4"
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    lineHeight: 1.3,
                  }}
                >
                  {solution.title}
                </h3>

                <p
                  className="mb-6"
                  style={{
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {solution.description}
                </p>

                <span
                  className="inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                  }}
                >
                  Learn more →
                </span>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
