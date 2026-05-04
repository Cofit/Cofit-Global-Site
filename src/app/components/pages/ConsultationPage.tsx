import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { MessageCircle, Users, Target, Heart } from "lucide-react";
import Header from "../cofit/Header";
import ScrollProgress from "../cofit/ScrollProgress";
import BackToTop from "../cofit/BackToTop";
import MagneticButton from "../cofit/MagneticButton";
import AnimatedCounter from "../cofit/AnimatedCounter";
import FloatingParticles from "../cofit/FloatingParticles";

export default function ConsultationPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const experts = [
    { name: "Emily Li, RD", specialty: "Weight Management & Diabetes", image: "/src/imports/ChatGPT_Image_Apr_24,_2026,_06_35_11_PM-1.png" },
    { name: "Marcus Chen, RD", specialty: "Sports Nutrition & Performance", image: "/src/imports/ChatGPT_Image_Apr_24,_2026,_04_07_37_PM.png" },
    { name: "Sarah Wong, RD", specialty: "Plant-Based & Heart Health", image: "/src/imports/ChatGPT_Image_Apr_24,_2026,_05_37_26_PM-1.png" },
    { name: "David Kim, RD", specialty: "Metabolic Health & PCOS", image: "/src/imports/ChatGPT_Image_Apr_24,_2026,_11_13_36_AM-1.png" },
    { name: "Jessica Park, RD", specialty: "Gut Health & IBS", image: "/src/imports/ChatGPT_Image_Apr_24,_2026,_11_08_46_AM.png" },
    { name: "Alex Tan, RD", specialty: "Eating Psychology & Habits", image: "/src/imports/ChatGPT_Image_Apr_24,_2026,_10_46_38_AM-1.png" },
  ];

  const faqs = [
    { question: "What is a virtual nutrition consultation?", answer: "A virtual nutrition consultation is a one-on-one video session with a certified nutritionist where you discuss your health goals, dietary habits, and receive personalized nutrition guidance." },
    { question: "Who are your nutritionists?", answer: "Our nutritionists are certified professionals with expertise in various specializations including weight management, diabetes, sports nutrition, and metabolic health." },
    { question: "What can I expect from a session?", answer: "During your 30-minute session, your nutritionist will review your health history, discuss your goals, and create a personalized nutrition plan tailored to your needs." },
    { question: "What do I need to prepare?", answer: "Before your session, complete the health questionnaire and prepare any questions you'd like to ask your nutritionist." },
    { question: "Do you take insurance or HSA/FSA?", answer: "We accept HSA/FSA payments. Insurance coverage varies by provider - please check with your insurance company for reimbursement options." },
  ];

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
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Consultation"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-8 relative z-20">
          <motion.div
            className="max-w-2xl"
            style={{ opacity: heroOpacity }}
          >
            <motion.h1
              style={{ fontSize: '56px', fontWeight: 700, lineHeight: 1.1 }}
              className="mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Your personal nutritionist, one session away
            </motion.h1>
            <motion.p
              style={{ fontSize: '20px', fontWeight: 300, lineHeight: 1.7 }}
              className="mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get expert nutrition guidance in a single 30-minute video session. Whether you want to lose weight, manage a health condition, or optimize your diet — our certified nutritionists are here to help.
            </motion.p>
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MagneticButton
                href="#plans"
                className="text-white"
                style={{ backgroundColor: '#169E6B', fontSize: '18px' }}
              >
                Book a session
              </MagneticButton>
              <MagneticButton
                href="#how-it-works"
                className="text-white"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', fontSize: '18px' }}
              >
                How it works
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
            <div className="grid grid-cols-4 gap-8 max-md:grid-cols-2">
              {[
                { value: 45000, suffix: "+", label: "Active members", color: "#169E6B" },
                { value: 89, suffix: "%", label: "See results in 3 months", color: "#004F51" },
                { value: 4.5, suffix: "", label: "Average rating", color: "#00C2E0" },
                { value: 150, suffix: "+", label: "Expert nutritionists", color: "#FFB46E" },
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

      {/* How It Works */}
      <section id="how-it-works" className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-text)' }}
            className="mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            From booking to results in 3 steps
          </motion.h2>
          <motion.p
            style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}
            className="mb-20 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Simple, fast, and effective. Start your journey to better health today.
          </motion.p>

          <div className="space-y-24">
            {[
              {
                step: "1",
                title: "Pick your expert & time",
                description: "Browse our certified nutritionists by specialty and availability. Book a time that works for you — same-day slots often available.",
                image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
              {
                step: "2",
                title: "30-min video call",
                description: "Meet your nutritionist via secure video. Discuss your health goals, eating habits, and any concerns. Get personalized recommendations on the spot.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
              },
              {
                step: "3",
                title: "Get your Personalized Plan",
                description: "Receive a custom nutrition plan delivered to your email within 24 hours. Includes meal ideas, macros, and actionable next steps.",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
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
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold"
                      style={{ backgroundColor: '#004F51' }}
                    >
                      {item.step}
                    </div>
                  </div>
                  <h3 style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-4">
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
                    {item.description}
                  </p>
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

      {/* Pricing Plans */}
      <section id="plans" className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-text)' }}
            className="mb-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Choose your plan
          </motion.h2>
          <motion.p
            style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}
            className="mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Flexible options for one-time sessions and packages
          </motion.p>

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {[
              {
                name: "FLEX8 SLIM PROGRAM",
                price: "$649",
                per: "",
                features: [
                  "2 × 30-min video consultations",
                  "Hormone type assessment",
                  "Customized Flexi-Carb meal plan",
                  "Daily nutritionist support (9AM–11PM TWN)",
                  "Weekend diet analysis every Monday",
                  "Online materials in English & Chinese",
                ],
                cta: "Get started",
              },
              {
                name: "FLEX8 SLIM PREMIUM",
                price: "$729",
                per: "",
                features: [
                  "3 × 30-min video consultations",
                  "Hormone type assessment",
                  "Customized Flexi-Carb meal plan",
                  "Daily nutritionist support (9AM–11PM TWN)",
                  "Weekend diet analysis every Monday",
                  "Online materials in English & Chinese",
                  "Priority scheduling",
                ],
                cta: "Get started",
                popular: true,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                className="rounded-3xl p-8 relative flex flex-col"
                style={{
                  background: plan.popular
                    ? 'linear-gradient(135deg, rgba(22, 158, 107, 0.05), rgba(255,255,255,1))'
                    : 'white',
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,79,81,0.15)' }}
              >
                {plan.popular && (
                  <div
                    className="absolute top-0 right-8 px-4 py-1 rounded-b-lg text-white text-sm font-medium"
                    style={{ backgroundColor: '#169E6B' }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  {plan.popular ? (
                    <>
                      <div>
                        <span style={{ fontSize: '48px', fontWeight: 700, color: '#004F51' }}>$729 USD</span>
                      </div>
                      <div>
                        <span style={{ fontSize: '16px', color: 'var(--color-text-secondary)', textDecoration: 'line-through' }}>Was $1,100</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <span style={{ fontSize: '48px', fontWeight: 700, color: '#004F51' }}>$649 USD</span>
                      </div>
                      <div>
                        <span style={{ fontSize: '16px', color: 'var(--color-text-secondary)', textDecoration: 'line-through' }}>Was $950</span>
                      </div>
                    </>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#169E6B' }} />
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  href="#book"
                  className={`w-full text-center ${plan.popular ? 'text-white' : 'text-[#004F51]'}`}
                  style={{
                    backgroundColor: plan.popular ? '#169E6B' : 'rgba(0,79,81,0.08)',
                  }}
                >
                  {plan.cta}
                </MagneticButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-text)' }}
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet the experts behind your plan
          </motion.h2>

          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
            {experts.map((expert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,79,81,0.15)' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 15%' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="p-6">
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-2">
                    {expert.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                    {expert.specialty}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-text)' }}
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Your 30-minute session
          </motion.h2>

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            {[
              {
                title: "Health Assessment",
                description: "Review your medical history, current diet, lifestyle, and health goals to create a complete picture.",
                Icon: Target,
                color: "#169E6B",
              },
              {
                title: "Expert Guidance",
                description: "Get evidence-based recommendations tailored to your unique needs, preferences, and health conditions.",
                Icon: Users,
                color: "#00C2E0",
              },
              {
                title: "Personalized Plan",
                description: "Receive a custom nutrition strategy with specific meal ideas, portion guidance, and supplement recommendations.",
                Icon: Heart,
                color: "#FFB46E",
              },
              {
                title: "Ongoing Support",
                description: "Follow-up via email or chat to track progress, answer questions, and adjust your plan as needed.",
                Icon: MessageCircle,
                color: "#004F51",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-3xl relative overflow-hidden group bg-white"
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
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-text)' }} className="mb-3">
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 bg-gradient-to-b from-white to-[#f0fffe]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-text)' }}
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text)' }}>
                    {faq.question}
                  </span>
                  <span style={{ fontSize: '24px', color: '#169E6B' }}>
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <motion.div
                    className="px-8 pb-6"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            style={{ fontSize: '48px', fontWeight: 700, color: 'var(--color-text)' }}
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to meet your nutritionist?
          </motion.h2>
          <motion.p
            style={{ fontSize: '20px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Book your session today and start your journey to better health
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MagneticButton
              href="#plans"
              className="text-white"
              style={{ backgroundColor: '#169E6B', fontSize: '18px' }}
            >
              Book a consultation
            </MagneticButton>
          </motion.div>
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
