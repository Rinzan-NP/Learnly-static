"use client";

import Link from 'next/link'
import { ArrowUpRight, Star, Clock, BookOpen, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", stiffness: 100, damping: 20, duration: 0.6
    }
  }
};

const imageVariants: any = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring", stiffness: 100, damping: 20, duration: 0.8, delay: 0.4
    }
  }
};

export default function Home() {
  const courses = [
    {
      title: "Data Science Essentials",
      author: "Dr. Liam Morgan",
      duration: "25h 30min",
      lessons: 12,
      rating: 4.6,
      level: "Advanced",
      price: "$299.99",
      image: "https://framerusercontent.com/images/4wat1wJFOMZsUFXZIgWayB7eC1o.jpg"
    },
    {
      title: "Digital Marketing Pro",
      author: "Alex Reveira",
      duration: "18h 45min",
      lessons: 10,
      rating: 4.5,
      level: "Intermediate",
      price: "$199.99",
      image: "https://framerusercontent.com/images/EEFT5idD5Z7l17UKEyR1ls1NaWg.png"
    },
    {
      title: "UI/UX Design Essentials",
      author: "Dr. Michael Lee",
      duration: "25h 30min",
      lessons: 28,
      rating: 4.7,
      level: "Beginner",
      price: "$99.99",
      image: "https://framerusercontent.com/images/IrKryFvOruxPxLkGeTjrbmh9k.png"
    },
    {
      title: "Creative Writing Bootcamp",
      author: "Desmond Andrade",
      duration: "5h 30min",
      lessons: 6,
      rating: 4.9,
      level: "Beginner",
      price: "$49.99",
      image: "https://framerusercontent.com/images/2Egur2fNYRGPeQKUmUX2PoOqxM.png"
    },
    {
      title: "Video Editing Masterclass",
      author: "Desmond Andrade",
      duration: "8h 55min",
      lessons: 32,
      rating: 4.8,
      level: "Intermediate",
      price: "$129.99",
      image: "https://framerusercontent.com/images/JwvWXTcWORlFsJWV5F76T3P5ZE.png"
    },
    {
      title: "Photo manipulation",
      author: "Alex Reveira",
      duration: "5h 30min",
      lessons: 24,
      rating: 4.7,
      level: "Beginner",
      price: "$49.99",
      image: "https://framerusercontent.com/images/5cM0zunAJOzPyUrrbVXggN5sTw.png"
    }
  ];

  const partners = [
    "https://framerusercontent.com/images/PDOFpDQea3o4JKJ4otDr1C96Z8.svg",
    "https://framerusercontent.com/images/wOIolRYjDRIOIfrt93CLz0k7M0.svg",
    "https://framerusercontent.com/images/tnwsKDAD4QSNS9BHkcnbO1NrI.svg",
    "https://framerusercontent.com/images/D3HegFtTzXti9udeLR0hQLLKYSI.svg",
    "https://framerusercontent.com/images/cptg6aDzfEb35dVIpsfAnAN3bbw.svg",
    "https://framerusercontent.com/images/YmpyeFQfpanfAj6emztFErft6Y.svg"
  ];

  const testimonials = [
    { name: "James Patel", role: "Marketing Specialist", review: "The digital marketing course completely transformed my career path. The instructors were incredibly knowledgeable and the resources are top notch.", avatar: "https://framerusercontent.com/images/TytWPjLDhqtDYn7NeclLy1PWMs.jpg" },
    { name: "Sarah Jenkins", role: "Product Designer", review: "The UI/UX design essentials course is amazing. Highly recommended for anyone looking to upskill rapidly in a structured way.", avatar: "https://framerusercontent.com/images/TytWPjLDhqtDYn7NeclLy1PWMs.jpg" },
    { name: "Michael Chang", role: "Data Analyst", review: "Great depth in the data science essentials. I learned so much more than I expected and the community is super helpful.", avatar: "https://framerusercontent.com/images/TytWPjLDhqtDYn7NeclLy1PWMs.jpg" }
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-bg-grid"></div>

        {/* Left Hero Image Container */}
        <motion.div
          className="hero-img-container hero-img-left"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="hero-img-bg bg-[#FFF0E8]"></div>
          <img
            src="https://framerusercontent.com/images/4wat1wJFOMZsUFXZIgWayB7eC1o.jpg"
            alt="Students looking at laptop"
            className="hero-img-masked mask-left"
          />
        </motion.div>

        {/* Right Hero Image Container */}
        <motion.div
          className="hero-img-container hero-img-right"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="hero-img-bg bg-[#E7F0FF]"></div>
          <img
            src="https://framerusercontent.com/images/2Egur2fNYRGPeQKUmUX2PoOqxM.png"
            alt="Students collaborating"
            className="hero-img-masked mask-right"
          />
        </motion.div>

        <motion.div
          className="container hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="rating-badge" variants={itemVariants}>
            <div className="stars">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <span>4.9 (15,008)</span>
          </motion.div>

          <motion.h1 className="heading-xl" variants={itemVariants}>
            Unlock Your Potential<br />
            <span className="serif-italic">With New Skills</span>
          </motion.h1>

          <motion.p variants={itemVariants}>
            Unlock a world of opportunities and take control of your future by mastering new skills that empower you to achieve your goals.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href="/courses" className="btn-primary group" style={{ fontSize: '18px', padding: '16px 36px', height: '60px' }}>
              Explore Courses <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Partners Banner */}
      <section className="container">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}
        >
          <motion.p variants={itemVariants} style={{ textAlign: 'center', fontWeight: '600', marginBottom: '24px' }}>Our Valued Partners</motion.p>
          <div className="partners-banner-wrapper">
            <motion.div className="partners-banner" variants={itemVariants}>
              {[...partners, ...partners, ...partners].map((src, i) => (
                <img key={i} src={src} alt="partner logo" />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Learnly */}
      <section className="section-padding">
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '80px' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="heading-lg" variants={itemVariants}>
              Why Choose <span className="serif-italic">learnly</span>
            </motion.h2>
          </motion.div>

          <motion.div className="grid-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.div className="card" style={{ padding: '40px', textAlign: 'center', alignItems: 'center' }} variants={itemVariants}>
              <img src="https://framerusercontent.com/images/QGd4zkOzeFPcLhxGYrl6BQDVy0.svg" alt="icon" style={{ width: '64px', marginBottom: '24px' }} />
              <h3 className="heading-md" style={{ marginBottom: '16px' }}>4k+ hours videos</h3>
              <p className="text-secondary">Hours of meticulously designed courses to help you achieve your goals and master modern skills effectively.</p>
            </motion.div>

            <motion.div className="card" style={{ padding: '40px', textAlign: 'center', alignItems: 'center' }} variants={itemVariants}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                <img src="https://framerusercontent.com/images/TytWPjLDhqtDYn7NeclLy1PWMs.jpg" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '3px solid white', zIndex: 3 }} alt="user" />
                <img src="https://framerusercontent.com/images/TytWPjLDhqtDYn7NeclLy1PWMs.jpg" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '3px solid white', marginLeft: '-16px', zIndex: 2 }} alt="user" />
                <img src="https://framerusercontent.com/images/TytWPjLDhqtDYn7NeclLy1PWMs.jpg" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '3px solid white', marginLeft: '-16px', zIndex: 1 }} alt="user" />
              </div>
              <h3 className="heading-md" style={{ marginBottom: '16px' }}>A Great Community</h3>
              <p className="text-secondary">We value our global community's support to learn together, network, and excel in an ever growing market.</p>
            </motion.div>

            <motion.div className="card" style={{ padding: '40px', textAlign: 'center', alignItems: 'center' }} variants={itemVariants}>
              <img src="https://framerusercontent.com/images/WiU5lbahsjWy5BCMq7zgElUv9aE.png" alt="Learn by doing" style={{ width: '80px', height: '80px', objectFit: 'cover', marginBottom: '24px' }} />
              <h3 className="heading-md" style={{ marginBottom: '16px' }}>Learn-by-Doing</h3>
              <p className="text-secondary">Interactive lessons that encourage you to apply concepts immediately, reinforcing practical real-world skills.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '80px' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
            <motion.h2 className="heading-lg" variants={itemVariants}>
              Our New <span className="serif-italic">Courses</span>
            </motion.h2>
          </motion.div>

          <motion.div className="grid-3" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
            {courses.map((course, i) => (
              <motion.div key={i} className="card" variants={itemVariants} style={{ padding: 0 }}>
                <div className="course-card-img-wrapper">
                  <div
                    className="course-card-img"
                    style={{ backgroundImage: `url(${course.image})` }}
                  >
                    <div className="course-card-pill">{course.level}</div>
                  </div>
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', fontWeight: '600' }}>
                      <Star size={16} fill="#FFB800" color="#FFB800" />
                      <span>({course.rating})</span>
                    </div>
                    <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>{course.price}</span>
                  </div>
                  <h3 className="heading-md" style={{ marginBottom: '8px', fontSize: '20px' }}>{course.title}</h3>
                  <p className="text-secondary" style={{ fontSize: '14px', marginBottom: '20px' }}>By {course.author}</p>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', borderTop: '1px solid #f0f0f0', paddingTop: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                      <Clock size={14} /> {course.duration}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                      <BookOpen size={14} /> {course.lessons} Lessons
                    </div>
                  </div>
                  <div style={{ marginTop: 'auto' }}>
                    <Link href={`/courses/${course.title.toLowerCase().replace(/ /g, '-')}`} className="btn-card">
                      View Course
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div style={{ textAlign: 'center', marginTop: '80px' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <Link href="/courses" className="btn-primary group" style={{ padding: '14px 32px' }}>
                All Courses <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Discover Enroll & Learn */}
      <section className="section-padding">
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '80px' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
            <motion.h2 className="heading-lg" variants={itemVariants}>
              Discover, Enroll & <span className="serif-italic">Learn</span>
            </motion.h2>
          </motion.div>

          <motion.div className="grid-3" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
            {[
              { step: '1', title: 'Explore All courses', desc: 'Browse our extensive catalog to find the perfect course tailored to your goals.' },
              { step: '2', title: 'Purchase Desired Course', desc: 'Securely enroll in your chosen course to gain instant access to all learning materials.' },
              { step: '3', title: 'Start Learning Anytime', desc: 'Learn at your own pace from anywhere in the world on any device.' }
            ].map((item, i) => (
              <motion.div key={i} className="card" style={{ padding: '48px 40px', textAlign: 'center', alignItems: 'center' }} variants={itemVariants}>
                <div style={{
                  width: '72px', height: '72px',
                  backgroundColor: 'white',
                  color: 'var(--primary)',
                  border: '2px dashed var(--primary)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '28px', fontWeight: '700',
                  margin: '0 auto 32px'
                }}>
                  {item.step}
                </div>
                <h3 className="heading-md" style={{ marginBottom: '16px' }}>{item.title}</h3>
                <p className="text-secondary" style={{ fontSize: '15px', lineHeight: '1.7' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consistent Growth */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div className="split-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.div variants={itemVariants} style={{ position: 'relative' }}>
              <img src="https://framerusercontent.com/images/8136BY6iSEiQiFS0aGhF7iJslo.png" alt="student" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }} />
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="heading-lg" style={{ marginBottom: '32px' }}>
                Consistent Growth,<br />
                <span className="serif-italic">Endless Possibilities</span>
              </h2>
              <p className="text-secondary" style={{ marginBottom: '40px', fontSize: '18px' }}>
                Learn at your own pace from anywhere in the world on any device using our structured modules, and tap into our elite community network.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--background-main)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://framerusercontent.com/images/xt7JeydtTZtxsHSGLIkA55gbSJQ.svg" alt="icon" style={{ width: '24px' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '600' }}>Unlimited Resources</h4>
                    <p className="text-secondary" style={{ fontSize: '14px' }}>For continuous learning</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--background-main)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://framerusercontent.com/images/Hi7xgwLUVYIokxGc9UYi3dGSW0.svg" alt="icon" style={{ width: '24px' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '600' }}>50+ Instructors</h4>
                    <p className="text-secondary" style={{ fontSize: '14px' }}>Expert guided classes</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-main">
        <div className="container">
          <motion.div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.h2 className="heading-lg" variants={itemVariants}>
              What Our <span className="serif-italic">Learners</span> Say
            </motion.h2>
            <motion.div variants={itemVariants} className="nav-links">
              <Link href="/reviews" className="btn-secondary" style={{ background: 'white', border: 'none' }}>View More</Link>
            </motion.div>
          </motion.div>

          <motion.div className="grid-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            {testimonials.map((test, i) => (
              <motion.div key={i} className="card" style={{ padding: '40px' }} variants={itemVariants}>
                <div className="stars" style={{ marginBottom: '24px' }}>
                  <Star size={20} fill="#FFB800" color="#FFB800" />
                  <Star size={20} fill="#FFB800" color="#FFB800" />
                  <Star size={20} fill="#FFB800" color="#FFB800" />
                  <Star size={20} fill="#FFB800" color="#FFB800" />
                  <Star size={20} fill="#FFB800" color="#FFB800" />
                </div>
                <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px', flex: 1 }}>
                  "{test.review}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid var(--border-color)', paddingTop: '24px' }}>
                  <img src={test.avatar} alt={test.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ fontWeight: '600', fontSize: '16px' }}>{test.name}</h4>
                    <p className="text-secondary" style={{ fontSize: '14px' }}>{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="container">
        <motion.div className="cta-banner" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <div className="cta-banner-bg"></div>

          <motion.img
            src="https://framerusercontent.com/images/rvUmqvCWSlGjZMuf11ul95crPU.png"
            className="cta-img-left" alt="student"
            variants={imageVariants}
          />
          <motion.img
            src="https://framerusercontent.com/images/aCUQwg4vD3p2rcHSJkMfWYL15g.png"
            className="cta-img-right" alt="student books"
            variants={imageVariants}
          />

          <motion.div className="cta-content" variants={itemVariants}>
            <h2 className="heading-xl" style={{ marginBottom: '24px', fontSize: 'clamp(32px, 5vw, 56px)' }}>
              Unlock Your Learning <span className="serif-italic">Potential Today</span>
            </h2>
            <p className="text-secondary" style={{ marginBottom: '40px', fontSize: '18px' }}>
              Join thousands of learners worldwide entirely unlocking their potential via our curated learning pathways.
            </p>
            <Link href="/courses" className="btn-primary group" style={{ padding: '16px 32px', fontSize: '18px' }}>
              Explore Courses <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
