import { motion } from "motion/react";
import AnimatedCounter from "./AnimatedCounter";
import svgPaths from "../../../imports/Vector/svg-1jhepchuk7";

export default function FootprintSection() {
  return (
    <section className="py-32 bg-white">
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
            Serving communities across Asia
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
            From Taiwan to Hong Kong, we combine digital innovation with local clinical support
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-3xl overflow-hidden mb-16"
          style={{ height: '500px' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1587996616596-b714c1c54146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="Healthy nutrition and wellness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
            <div className="p-4 sm:p-8 md:p-16 grid grid-cols-4 gap-4 sm:gap-8 md:gap-12 w-full max-md:grid-cols-2">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <AnimatedCounter
                  value={40000}
                  suffix="+"
                  className="text-3xl md:text-5xl font-bold mb-2 text-white"
                />
                <div className="text-sm md:text-base text-white/80">Clients Served</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <AnimatedCounter
                  value={93}
                  suffix="%"
                  className="text-3xl md:text-5xl font-bold mb-2 text-white"
                />
                <div className="text-sm md:text-base text-white/80">Satisfaction Rate</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className="flex items-center justify-center gap-1 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="#FFB46E"
                        viewBox="0 0 20 20"
                        initial={{ rotate: 0, scale: 0 }}
                        whileInView={{ rotate: 360, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                </motion.div>
                <div className="text-2xl md:text-3xl font-bold mb-1 text-white">4.8</div>
                <div className="text-xs md:text-sm text-white/70">App Store · 1M+ Downloads</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <AnimatedCounter
                  value={100}
                  suffix="+"
                  className="text-3xl md:text-5xl font-bold mb-2 text-white"
                />
                <div className="text-sm md:text-base text-white/80">Board-Certified Dietitians</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          {/* YouTube Channel Card */}
          <motion.div
            className="rounded-3xl p-10 shadow-lg relative overflow-hidden backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 230, 235, 0.4) 0%, rgba(255, 250, 252, 0.3) 50%, rgba(255, 240, 245, 0.5) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6), 0 20px 60px rgba(255, 200, 210, 0.1)',
            }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              y: -4,
              boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.7), 0 30px 80px rgba(255, 200, 210, 0.15)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent opacity-60" />
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(255, 220, 230, 0.4) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-15"
              style={{
                background: 'radial-gradient(circle, rgba(255, 200, 210, 0.3) 0%, transparent 70%)',
                filter: 'blur(50px)',
              }}
              animate={{
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <div className="relative z-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-600">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
            <AnimatedCounter
              value={1030000}
              suffix="+"
              className="text-4xl font-bold mb-2"
              style={{ color: '#004F51' }}
            />
            <div className="text-sm mb-4" style={{ color: '#86909c' }}>subscribers</div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#1d2129' }}>
              Taiwan's #1 nutrition channel
            </h3>
            <p className="text-base mb-6" style={{ color: '#86909c', lineHeight: 1.6 }}>
              Science-backed nutrition, hormone health, and metabolic wellness — new episodes every week, entirely free.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: '#86909c' }}>@Cofit21</span>
              <motion.a
                href="#"
                className="px-6 py-2 rounded-full text-white font-medium"
                style={{ backgroundColor: '#004F51' }}
                whileHover={{ backgroundColor: '#407B7D', scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe →
              </motion.a>
            </div>
            </div>
          </motion.div>

          {/* App Download Card */}
          <motion.div
            className="rounded-3xl p-10 shadow-lg relative overflow-hidden backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(230, 255, 252, 0.4) 0%, rgba(245, 255, 254, 0.3) 50%, rgba(240, 255, 253, 0.5) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6), 0 20px 60px rgba(0, 194, 224, 0.1)',
            }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              y: -4,
              boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.7), 0 30px 80px rgba(0, 194, 224, 0.15)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent opacity-60" />
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(200, 245, 250, 0.4) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
              animate={{
                x: [0, -30, 0],
                y: [0, 25, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-15"
              style={{
                background: 'radial-gradient(circle, rgba(180, 240, 230, 0.3) 0%, transparent 70%)',
                filter: 'blur(50px)',
              }}
              animate={{
                x: [0, 20, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <div className="relative z-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl" style={{ backgroundColor: '#004F51' }}>
                <svg className="w-7 h-7" fill="white" viewBox="0 0 65.2108 49.3285" style={{ transform: 'rotate(180deg)' }}>
                  <path d={svgPaths.p2c3ea400} />
                </svg>
              </div>
            </div>
            <AnimatedCounter
              value={1000000}
              suffix="+"
              className="text-4xl font-bold mb-2"
              style={{ color: '#004F51' }}
            />
            <div className="text-sm mb-4" style={{ color: '#86909c' }}>downloads</div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#1d2129' }}>
              Your nutritionist in your pocket
            </h3>
            <p className="text-base mb-6" style={{ color: '#86909c', lineHeight: 1.6 }}>
              Log meals, track habits, message your dietitian, and get AI-powered nudges — all in one app. 4.8★ rated.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </motion.a>
              <motion.a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                Google Play
              </motion.a>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
