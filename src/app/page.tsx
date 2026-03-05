"use client";

import Link from 'next/link'
import { ArrowUpRight, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", stiffness: 100, damping: 20, duration: 0.6
    }
  }
};

const imageVariants = {
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
      title: "Creative Writing Bootcamp",
      author: "Desmond Andrade",
      duration: "5h 30min",
      lessons: 6,
      rating: 4.9,
      level: "Beginner",
      levelClass: "beginner",
    },
    {
      title: "Product Design Bootcamp",
      author: "Dr. Michael Lee",
      duration: "25h 30min",
      lessons: 33,
      rating: 4.3,
      level: "Advanced",
      levelClass: "advanced",
    },
    {
      title: "Digital Marketing Mastery",
      author: "Alex Reveira",
      duration: "15h 35min",
      lessons: 40,
      rating: 4.4,
      level: "Beginner",
      levelClass: "beginner",
    },
    {
      title: "Video Editing Masterclass",
      author: "Desmond Andrade",
      duration: "8h 55min",
      lessons: 32,
      rating: 4.8,
      level: "Intermediate",
      levelClass: "intermediate",
    },
    {
      title: "Photo manipulation",
      author: "Alex Reveira",
      duration: "5h 30min",
      lessons: 24,
      rating: 4.7,
      level: "Beginner",
      levelClass: "beginner",
    },
    {
      title: "Data Science Essentials",
      author: "Dr. Liam Morgan",
      duration: "25h 30min",
      lessons: 12,
      rating: 4.6,
      level: "Advanced",
      levelClass: "advanced",
    }
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-bg-grid"></div>

        {/* Left Hero Image */}
        <motion.img
          src="https://framerusercontent.com/images/8136BY6iSEiQiFS0aGhF7iJslo.png"
          alt="Student holding a book"
          className="hero-img-left"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        />

        {/* Right Hero Image */}
        <motion.img
          src="https://framerusercontent.com/images/WiU5lbahsjWy5BCMq7zgElUv9aE.png"
          alt="Student with headphones"
          className="hero-img-right"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        />

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
            <Link href="/courses" className="btn-primary" style={{ fontSize: '18px', padding: '16px 36px', height: '60px' }}>
              Explore Courses <ArrowUpRight size={24} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            style={{ textAlign: 'center', marginBottom: '80px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 className="heading-lg" variants={itemVariants}>
              Our New <span className="serif-italic">Courses</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {courses.map((course, i) => (
              <motion.div key={i} className="card" variants={itemVariants}>
                <div style={{ padding: '12px 12px 0 12px' }}>
                  <div style={{
                    height: '240px',
                    backgroundImage: `url(/course.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '16px',
                    position: 'relative'
                  }}>
                    <span className={`pill ${course.levelClass}`} style={{ position: 'absolute', top: '16px', left: '16px' }}>
                      {course.level}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '24px 32px 32px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      <Star size={18} color="var(--secondary)" fill="var(--secondary)" /> {course.rating}
                    </span>
                    <span style={{ fontWeight: '700', fontSize: '20px', color: 'var(--primary)' }}>$49.99</span>
                  </div>
                  <h3 className="heading-md" style={{ marginBottom: '12px', fontSize: '22px' }}>{course.title}</h3>
                  <p className="text-secondary" style={{ marginBottom: '28px', fontSize: '15px' }}>
                    By <Link href="#" className="text-primary" style={{ fontWeight: '600' }}>{course.author}</Link>
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '24px' }}>
                    <div className="text-secondary" style={{ display: 'flex', gap: '16px', fontSize: '14px', fontWeight: '500' }}>
                      <span>{course.duration}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'currentColor' }}></span>
                        {course.lessons} Lessons
                      </span>
                    </div>
                    <Link href={`/courses/${course.title.toLowerCase().replace(/ /g, '-')}`} className="btn-secondary" style={{ padding: '10px 20px', fontSize: '14px' }}>
                      View Course
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            style={{ textAlign: 'center', marginTop: '80px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Link href="/courses" className="btn-primary" style={{ padding: '14px 32px' }}>
                All Courses <ArrowUpRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <motion.div
            style={{ textAlign: 'center', marginBottom: '80px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 className="heading-lg" variants={itemVariants}>
              Discover, Enroll & <span className="serif-italic">Learn</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {[
              { step: '1', title: 'Explore All courses', desc: 'Browse our extensive catalog to find the perfect course tailored to your goals.' },
              { step: '2', title: 'Purchase Desired Course', desc: 'Securely enroll in your chosen course to gain instant access to all learning materials.' },
              { step: '3', title: 'Start Learning Anytime', desc: 'Learn at your own pace from anywhere in the world on any device.' }
            ].map((item, i) => (
              <motion.div key={i} className="card" style={{ padding: '48px 40px', textAlign: 'center', alignItems: 'center' }} variants={itemVariants}>
                <div style={{
                  width: '72px', height: '72px',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
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
    </>
  )
}
