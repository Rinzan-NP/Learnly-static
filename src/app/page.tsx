"use client";

import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, Star, Clock, BookOpen, MessageCircle, FileText, ChevronDown, Rocket } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  const courses = [
    {
      title: "AI Integrated Advanced Diploma in Digital Marketing",
      duration: "6 Months",
      lessons: "10+ Modules",
      rating: 4.9,
      level: "Professional",
      price: "Kottakkal",
      image: "https://framerusercontent.com/images/4wat1wJFOMZsUFXZIgWayB7eC1o.jpg",
      description: "Learn SEO, Social Media Marketing, Google Ads, AI tools, and real-time marketing strategies."
    },
    {
      title: "Advanced Diploma in Graphic Design",
      duration: "Professional",
      lessons: "Creative",
      rating: 4.8,
      level: "Industry Standard",
      price: "Kottakkal",
      image: "https://framerusercontent.com/images/IrKryFvOruxPxLkGeTjrbmh9k.png",
      description: "Master creative design using industry-standard tools and practical projects."
    },
    {
      title: "Diploma in Web Development",
      duration: "Full Stack",
      lessons: "Practical",
      rating: 4.8,
      level: "Modern Tech",
      price: "Kottakkal",
      image: "https://framerusercontent.com/images/EEFT5idD5Z7l17UKEyR1ls1NaWg.png",
      description: "Learn to design and develop professional websites with modern technologies."
    }
  ];

  const whyJoin = [
    "Industry-oriented syllabus",
    "100% practical & hands-on training",
    "Experienced and certified trainers",
    "Real-time projects & live practice",
    "Career guidance & placement assistance",
    "Affordable course fees",
    "Supportive learning environment"
  ];

  return (
    <div style={{ backgroundColor: '#F2F7FF', position: 'relative' }}>

      <section className="hero" style={{ paddingTop: '160px', paddingBottom: '120px' }}>
        <div className="hero-bg-grid"></div>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <div style={{ textAlign: 'left', zIndex: 10 }}>
              <motion.div className="rating-badge" variants={itemVariants} style={{ marginBottom: '32px', display: 'inline-flex' }}>
                <span className="stars">
                  <Star size={14} fill="#FFB800" color="#FFB800" />
                  <Star size={14} fill="#FFB800" color="#FFB800" />
                  <Star size={14} fill="#FFB800" color="#FFB800" />
                  <Star size={14} fill="#FFB800" color="#FFB800" />
                  <Star size={14} fill="#FFB800" color="#FFB800" />
                </span>
                <span>Best Training Institute in Kottakkal</span>
              </motion.div>

              <motion.h1 className="heading-xl" variants={itemVariants} style={{ fontSize: 'clamp(48px, 6vw, 72px)', lineHeight: '1.05', marginBottom: '24px' }}>
                Learn Skills.<br />
                Build <span className="serif-italic text-primary">Careers.</span> <br />
                Shape Your <span className="serif-italic text-primary">Future.</span>
              </motion.h1>

              <motion.p className="text-secondary" style={{ fontSize: '20px', lineHeight: '1.6', maxWidth: '560px', marginBottom: '40px' }} variants={itemVariants}>
                Be Campus Academy is a leading training institute in Kottakkal, offering career-focused professional courses aligned with today’s industry requirements.
              </motion.p>

              <motion.div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }} variants={itemVariants}>
                <Link href="/courses" className="btn-primary group" style={{ fontSize: '16px', padding: '16px 36px', borderRadius: '100px' }}>
                  Explore Courses <ArrowUpRight className="arrow" size={20} />
                </Link>
                <button
                  onClick={() => setShowBrochureModal(true)}
                  className="bg-white text-slate-800 border border-slate-200 hover:border-primary hover:text-white hover:bg-primary shadow-sm px-7 py-3 rounded-full flex items-center gap-2 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
                  style={{ fontSize: '15px' }}
                >
                  Download Brochure <FileText size={18} />
                </button>
              </motion.div>
            </div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ position: 'relative', width: '100%', maxWidth: '600px', marginInline: 'auto', zIndex: 10 }}
            >
              <div style={{
                position: 'absolute',
                inset: '-20px',
                background: 'linear-gradient(180deg, rgba(225, 29, 72, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
                borderRadius: '40px',
                zIndex: -1,
                transform: 'rotate(2deg)'
              }}></div>

              <img
                src="/hero.png"
                alt="Be Campus Training"
                style={{ width: '100%', borderRadius: '32px', boxShadow: '0 30px 60px rgba(0,0,0,0.12)', border: '8px solid white', objectFit: 'cover' }}
              />

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: 'absolute',
                  top: '15%',
                  left: '-10%',
                  background: 'white',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  zIndex: 20
                }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(22, 163, 74, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
                  <Star size={16} fill="currentColor" />
                </div>
                <div style={{ fontWeight: '700', fontSize: '14px', whiteSpace: 'nowrap' }}>Top Rated Academy</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{
                  position: 'absolute',
                  bottom: '15%',
                  right: '-10%',
                  background: 'white',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  zIndex: 20
                }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(225, 29, 72, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <Rocket size={16} />
                </div>
                <div style={{ fontWeight: '700', fontSize: '14px', whiteSpace: 'nowrap' }}>100% Placements</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
              <motion.h2 className="heading-lg" variants={itemVariants} style={{ marginBottom: '24px' }}>
                Why Do You Want to <span className="serif-italic">Join Us?</span>
              </motion.h2>
              <motion.p className="text-secondary" style={{ marginBottom: '40px', fontSize: '18px' }} variants={itemVariants}>
                Choosing the right training institute plays a key role in shaping your future. Here’s why students trust Be Campus Academy, Kottakkal:
              </motion.p>
              <div style={{ display: 'grid', gap: '16px' }}>
                {whyJoin.map((item, i) => (
                  <motion.div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }} variants={itemVariants}>
                    <div style={{ color: 'var(--primary)', flexShrink: 0 }}>
                      <CheckCircle2 size={24} />
                    </div>
                    <span style={{ fontSize: '18px', fontWeight: '500' }}>{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.p style={{ marginTop: '32px', fontWeight: '700', color: 'var(--primary)', fontSize: '20px' }} variants={itemVariants}>
                👉 We don’t just teach — we prepare you for real careers.
              </motion.p>
            </motion.div>
            <div className="card" style={{ padding: '0', overflow: 'hidden', height: '100%', minHeight: '500px' }}>
              <img src="https://framerusercontent.com/images/WiU5lbahsjWy5BCMq7zgElUv9aE.png" alt="Training" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '80px' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="heading-lg" variants={itemVariants}>
              Our Professional <span className="serif-italic">Courses</span>
            </motion.h2>
            <motion.p className="text-secondary" style={{ marginTop: '20px', maxWidth: '600px', marginInline: 'auto' }} variants={itemVariants}>
              We offer advanced diploma programs designed for today’s job market across Digital Marketing, Design, and Web Development.
            </motion.p>
          </motion.div>

          <div className="grid-3">
            {courses.map((course, i) => (
              <motion.div key={i} className="card" style={{ padding: 0 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
                <div className="course-card-img-wrapper">
                  <div className="course-card-img" style={{ backgroundImage: `url(${course.image})` }}>
                    <div className="course-card-pill">{course.level}</div>
                  </div>
                </div>
                <div style={{ padding: '32px' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px', lineHeight: '1.3' }}>{course.title}</h3>
                  <p className="text-secondary" style={{ marginBottom: '24px', fontSize: '15px' }}>{course.description}</p>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', borderTop: '1px solid #eee', paddingTop: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                      <Clock size={16} /> {course.duration}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                      <BookOpen size={16} /> {course.lessons}
                    </div>
                  </div>
                  <Link href="/courses" className="btn-card">
                    Course Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Institute Content Section */}
      <section className="section-padding bg-white">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '60px' }} variants={itemVariants}>
              Why We Are the <span className="serif-italic">Best Training Institute</span> in Kottakkal
            </motion.h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div className="card" style={{ padding: '32px' }}>
                <ul style={{ display: 'grid', gap: '20px' }}>
                  <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 className="text-primary" /> Updated curriculum as per industry trends</li>
                  <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 className="text-primary" /> AI-integrated learning approach</li>
                  <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 className="text-primary" /> Job-oriented training methodology</li>
                </ul>
              </div>
              <div className="card" style={{ padding: '32px' }}>
                <ul style={{ display: 'grid', gap: '20px' }}>
                  <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 className="text-primary" /> One-to-one student support</li>
                  <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 className="text-primary" /> Internship & placement assistance</li>
                  <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 className="text-primary" /> Trusted by students across Kottakkal</li>
                </ul>
              </div>
            </div>
            <motion.p style={{ textAlign: 'center', marginTop: '60px', fontSize: '24px', fontWeight: '700' }} variants={itemVariants}>
              🎓 Your success is our mission.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Career Section */}
      <section className="section-padding">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-bg"></div>
            <div className="cta-content">
              <h2 className="heading-lg" style={{ marginBottom: '24px' }}>
                Build Your Future with <br />
                <span className="serif-italic">Certification & Recognition</span>
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px', width: '100%' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
                  Industry-recognized certifications
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
                  100% Placement assistance
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
                  Internship & Live Projects
                </div>
              </div>
              <Link href="/contact" className="btn-primary" style={{ fontSize: '18px', padding: '16px 36px', borderRadius: '100px' }}>
                Start Your Career Journey <ArrowUpRight className="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          backgroundColor: '#25D366',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          zIndex: 9999,
          transition: 'transform 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>

      {/* Brochure Modal */}
      <AnimatePresence>
        {showBrochureModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10000,
              padding: '24px'
            }}
            onClick={() => setShowBrochureModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '24px',
                maxWidth: '500px',
                width: '100%',
                position: 'relative'
              }}
              onClick={e => e.stopPropagation()}
            >
              <h2 className="heading-md" style={{ marginBottom: '12px' }}>Download Our Brochure</h2>
              <p className="text-secondary" style={{ marginBottom: '24px' }}>Enter your details to receive the full course syllabus and details.</p>

              <form style={{ display: 'grid', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '14px', fontWeight: '600' }}>Full Name</label>
                  <input type="text" placeholder="Your Name" style={{ padding: '12px', borderRadius: '12px', border: '1px solid #ddd' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '14px', fontWeight: '600' }}>Phone Number</label>
                  <input type="tel" placeholder="Your WhatsApp Number" style={{ padding: '12px', borderRadius: '12px', border: '1px solid #ddd' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '14px', fontWeight: '600' }}>Interested Course</label>
                  <select style={{ padding: '12px', borderRadius: '12px', border: '1px solid #ddd' }}>
                    <option>Digital Marketing</option>
                    <option>Graphic Design</option>
                    <option>Web Development</option>
                    <option>Human Resources</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary" style={{ padding: '16px' }}>
                  Download Now
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
