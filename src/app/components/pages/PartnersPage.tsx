import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { TrendingUp, Award, Lightbulb } from "lucide-react";
import Header from "../cofit/Header";
import ScrollProgress from "../cofit/ScrollProgress";
import BackToTop from "../cofit/BackToTop";
import MagneticButton from "../cofit/MagneticButton";
import AnimatedCounter from "../cofit/AnimatedCounter";
import FloatingParticles from "../cofit/FloatingParticles";

export default function PartnersPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [formData, setFormData] = useState({
    partnership: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    companyName: "",
    companyWebsite: "",
    role: "",
    teamSize: "",
    budget: "",
    timeline: "",
    goals: "",
  });

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-primary)' }}>
      <ScrollProgress />
      <BackToTop />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Partnership"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-8 relative z-20">
          <motion.div
            className="max-w-3xl"
            style={{ opacity: heroOpacity }}
          >
            <motion.h1
              style={{ fontSize: '56px', fontWeight: 700, lineHeight: 1.1 }}
              className="mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Partner with Cofit
            </motion.h1>
            <motion.p
              style={{ fontSize: '20px', fontWeight: 300, lineHeight: 1.7 }}
              className="mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Reach over a million people building healthier habits across Asia and the US. From corporate wellness to creator collaborations — let's talk.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MagneticButton
                href="#contact"
                className="text-white"
                style={{ backgroundColor: '#169E6B', fontSize: '18px' }}
              >
                Start a conversation
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-white rounded-3xl p-12 max-md:p-8"
            style={{
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
              {[
                { value: 1, suffix: "M+", label: "Platform users", color: "#169E6B" },
                { value: 1.03, suffix: "M", label: "Lives impacted", color: "#004F51" },
                { value: 100, suffix: "+", label: "Countries reached", color: "#00C2E0" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="mb-1"
                    style={{ fontSize: '36px', fontWeight: 700, color: stat.color }}
                  />
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Cofit */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#169E6B', letterSpacing: '0.1em' }} className="mb-4">
              WHY COFIT
            </p>
            <h2 style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-text)' }}>
              Built for impact at scale
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 mb-24">
            {[
              {
                title: "Real Results",
                description: "12+ years and 1 million+ lives subscribers across 170+ countries and 30+ local enterprise customers.",
                Icon: TrendingUp,
                color: "#169E6B",
              },
              {
                title: "Science-Led",
                description: "Our approach is built and delivered by certified clinical nutritionists and backed by peer-reviewed research.",
                Icon: Lightbulb,
                color: "#00C2E0",
              },
              {
                title: "Trusted Brand",
                description: "A proven partner for health insurers, hospital systems, and major wellness programs with a 4.8★ rating.",
                Icon: Award,
                color: "#FFB46E",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-3xl bg-white relative overflow-hidden group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 60px rgba(0,79,81,0.15)',
                }}
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full"
                  style={{ background: `radial-gradient(circle, ${item.color}15, transparent)` }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />
                <div className="relative z-10">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden transition-colors duration-300"
                    style={{
                      backgroundColor: `${item.color}03`
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `${item.color}0D`}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = `${item.color}03`}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${item.color}20, transparent 70%)`
                      }}
                    />
                    <item.Icon
                      className="w-9 h-9 relative z-10"
                      style={{
                        color: item.color,
                        strokeWidth: 1.5
                      }}
                    />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-3">
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Success Story Image Section */}
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            style={{ height: '500px' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
              alt="Partner success"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="max-w-2xl p-16 max-md:p-8">
                <p
                  className="mb-6 text-white/90"
                  style={{
                    fontSize: '28px',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                  }}
                >
                  "Partnering with Cofit reduced our employee healthcare costs by 40% and improved engagement scores across the board."
                </p>
                <div className="text-white">
                  <p style={{ fontSize: '18px', fontWeight: 600 }}>Sarah Chen</p>
                  <p style={{ fontSize: '14px', opacity: 0.8 }}>Head of Wellness, TechCorp Taiwan</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-text)' }}
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What partners get
          </motion.h2>

          <div className="space-y-24">
            {[
              {
                title: "Full Platform Access",
                description: "Give your members access to our complete nutrition platform including meal tracking, expert consultations, and personalized plans.",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
                benefits: ["Branded experience", "Custom integrations", "White-label option"],
              },
              {
                title: "Dedicated Support Team",
                description: "Work with a dedicated partnership manager and technical support team to ensure smooth implementation and ongoing success.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
                benefits: ["24/7 tech support", "Training sessions", "Account manager"],
              },
              {
                title: "Insights & Analytics",
                description: "Track engagement, health outcomes, and ROI with comprehensive dashboards and regular reporting.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
                benefits: ["Real-time dashboards", "Custom reports", "Outcome tracking"],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-2 gap-12 items-center max-md:grid-cols-1 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <h3 style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-4">
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.8 }} className="mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-3">
                    {item.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#169E6B' }} />
                        <span style={{ fontSize: '16px', color: 'var(--color-text)' }}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  className={`relative rounded-3xl overflow-hidden group ${
                    index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''
                  }`}
                  style={{ height: '400px' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-[#169E6B] to-[#00C2E0] rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
                  />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover relative"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#004F51]/20 to-transparent" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-text)' }}
            className="mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pick what fits your business
          </motion.h2>
          <motion.p
            style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}
            className="mb-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Click one that best fit your inquiry below and let's start the inquiry form with your information. We'll respond within 48 hours.
          </motion.p>

          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
            {[
              {
                title: "Corporate Wellness",
                description: "Engage entire workforce in healthier programs.",
              },
              {
                title: "Insurance Partnership",
                description: "Reduce member health risk and prevent claims.",
              },
              {
                title: "Distribution / Reseller",
                description: "White-label solutions and tech licensing.",
              },
              {
                title: "White-Label Licensing",
                description: "Power your hospital, clinic, or app with Cofit.",
              },
              {
                title: "Provider Referral",
                description: "Doctors, gyms, and pharmacies referring clients to us.",
              },
              {
                title: "Creator Collaboration",
                description: "B2B partnerships, sponsored posts, ambassador programs.",
              },
            ].map((type, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-3xl bg-white cursor-pointer relative overflow-hidden group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 60px rgba(0,79,81,0.15)',
                }}
              >
                <motion.div
                  className="absolute bottom-0 right-0 w-24 h-24 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(22, 158, 107, 0.1), transparent)' }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />
                <div className="relative z-10">
                  <h3
                    style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-text)' }}
                    className="mb-3 transition-colors duration-300 group-hover:text-[#169E6B]"
                  >
                    {type.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    {type.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-32 px-8 bg-gradient-to-b from-white to-[#f0fffe]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-text)' }}
            className="mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tell us about your project
          </motion.h2>
          <motion.p
            style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}
            className="mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Fill out the form below and we'll get back to you within 48 hours
          </motion.p>

          <motion.form
            className="bg-white rounded-3xl p-12 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We'll be in touch soon.");
            }}
          >
            {/* Partnership Type */}
            <div className="mb-8">
              <label className="block mb-3 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>
                What brings you here? *
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors"
                value={formData.partnership}
                onChange={(e) => setFormData({ ...formData, partnership: e.target.value })}
                style={{ fontSize: '16px' }}
              >
                <option value="">Business Partnership</option>
                <option value="corporate">Corporate Wellness</option>
                <option value="insurance">Insurance Partnership</option>
                <option value="distribution">Distribution / Reseller</option>
                <option value="white-label">White-Label Licensing</option>
                <option value="provider">Provider Referral</option>
                <option value="creator">Creator Collaboration</option>
              </select>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-6 mb-8 max-md:grid-cols-1">
              <div>
                <label className="block mb-3 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  style={{ fontSize: '16px' }}
                />
              </div>
              <div>
                <label className="block mb-3 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  style={{ fontSize: '16px' }}
                />
              </div>
            </div>

            {/* Email and Country */}
            <div className="grid grid-cols-2 gap-6 mb-8 max-md:grid-cols-1">
              <div>
                <label className="block mb-3 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ fontSize: '16px' }}
                />
              </div>
              <div>
                <label className="block mb-3 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>
                  Country / Region *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  style={{ fontSize: '16px' }}
                >
                  <option value="">Select</option>
                  <option value="taiwan">Taiwan</option>
                  <option value="hong-kong">Hong Kong</option>
                  <option value="singapore">Singapore</option>
                  <option value="usa">United States</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Company Details */}
            <div className="mb-8">
              <label className="block mb-3 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>
                Company Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                style={{ fontSize: '16px' }}
              />
            </div>

            <div className="mb-8">
              <label className="block mb-3 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>
                Company Website
              </label>
              <input
                type="url"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors"
                placeholder="https://"
                value={formData.companyWebsite}
                onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                style={{ fontSize: '16px' }}
              />
            </div>

            <div className="mb-8">
              <label className="block mb-3 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>
                Role / Title
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                style={{ fontSize: '16px' }}
              />
            </div>

            <div className="mb-8">
              <label className="block mb-3 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>
                Level of Partnership
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors"
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                style={{ fontSize: '16px' }}
              />
            </div>

            {/* Budget and Timeline */}
            <div className="mb-8">
              <label className="block mb-3 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>
                Partnership Type? *
              </label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                style={{ fontSize: '16px' }}
              >
                <option value="">Select</option>
                <option value="immediate">Within 1 month</option>
                <option value="quarter">1-3 months</option>
                <option value="future">3+ months</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block mb-3 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>
                Company size
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                style={{ fontSize: '16px' }}
              >
                <option value="">Select</option>
                <option value="small">1-50 employees</option>
                <option value="medium">51-200 employees</option>
                <option value="large">201-1000 employees</option>
                <option value="enterprise">1000+ employees</option>
              </select>
            </div>

            {/* Goals */}
            <div className="mb-10">
              <label className="block mb-3 font-medium" style={{ color: 'var(--color-text)', fontSize: '14px' }}>
                Tell us about your goals
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#169E6B] outline-none transition-colors resize-none"
                placeholder="What outcome are you looking for? Any timeline, scope, or budget constraints?"
                value={formData.goals}
                onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                style={{ fontSize: '16px' }}
              />
            </div>

            <MagneticButton
              type="submit"
              className="w-full text-center text-white"
              style={{ backgroundColor: '#169E6B', fontSize: '18px' }}
            >
              Send inquiry →
            </MagneticButton>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
