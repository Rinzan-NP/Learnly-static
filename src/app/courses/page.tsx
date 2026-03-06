"use client";

import Link from 'next/link'
import { ArrowUpRight, Search, Star, Clock, BookOpen, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Courses() {
    const allCourses = [
        {
            title: "6-Month AI Integrated Advanced Diploma in Digital Marketing",
            category: "Digital Marketing",
            duration: "6 Months",
            lessons: "10+ Modules",
            rating: 4.9,
            image: "https://framerusercontent.com/images/4wat1wJFOMZsUFXZIgWayB7eC1o.jpg",
            description: "Learn SEO, SMM, Google Ads, AI tools, and real-time marketing strategies. 100% practical offline training in Kottakkal.",
            modules: ["SEO (On-Page, Off-Page, Technical)", "Search Engine Marketing (Google Ads)", "Social Media Marketing (FB, IG, LinkedIn)", "Content Marketing & AI Tools", "Web Analytics & Email Marketing"]
        },
        {
            title: "Advanced Diploma in Graphic Design",
            category: "Graphic Design",
            duration: "Professional",
            lessons: "Creative Art",
            rating: 4.8,
            image: "https://framerusercontent.com/images/IrKryFvOruxPxLkGeTjrbmh9k.png",
            description: "Master Adobe Photoshop, Illustrator, and InDesign to create professional-quality designs for both digital and print media.",
            modules: ["Adobe Photoshop (Image Masking)", "Adobe Illustrator (Vector Art)", "Adobe InDesign (Layout Design)", "Branding & Logo Design", "Live Project Training"]
        },
        {
            title: "Diploma in Web Development",
            category: "Web Development",
            duration: "Industry Ready",
            lessons: "Full Stack",
            rating: 4.8,
            image: "https://framerusercontent.com/images/EEFT5idD5Z7l17UKEyR1ls1NaWg.png",
            description: "Build career-ready skills in web technologies. Covers HTML, CSS, JavaScript, PHP, and modern frameworks like React.js.",
            modules: ["Frontend (HTML5, CSS3, JS)", "React.js Framework", "Backend with PHP/Node.js", "Database Management", "Responsive Web Design"]
        },
        {
            title: "Advanced Diploma in HR & Talent Management",
            category: "Human Resources",
            duration: "Corporate Focused",
            lessons: "HR Skillset",
            rating: 4.9,
            image: "https://framerusercontent.com/images/rvUmqvCWSlGjZMuf11ul95crPU.png",
            description: "Designed for graduates and professionals to build a strong career in HR. Focuses on recruitment, payroll, and corporate management.",
            modules: ["Recruitment & Selection", "Talent Management", "Employee Engagement", "Payroll & Compensation", "Labor Laws & Communication"]
        }
    ];

    const [filter, setFilter] = useState('All');
    const filteredCourses = filter === 'All' ? allCourses : allCourses.filter(c => c.category === filter);
    const categories = ['All', 'Digital Marketing', 'Graphic Design', 'Web Development', 'Human Resources'];

    return (
        <div style={{ backgroundColor: '#F2F7FF', minHeight: '100vh' }}>
            <section className="hero" style={{ paddingTop: '160px', paddingBottom: '100px', textAlign: 'center' }}>
                <div className="hero-bg-grid"></div>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="heading-xl">Build Your Future with <br /><span className="serif-italic">Expert Training</span></h1>
                        <p className="text-secondary" style={{ marginTop: '32px', maxWidth: '650px', marginInline: 'auto', fontSize: '20px' }}>
                            Choose from our high-demand professional courses at Be Campus Academy, Kottakkal. Practical learning with placement support.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div style={{ marginBottom: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                            {categories.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => setFilter(cat)}
                                    style={{
                                        padding: '12px 24px',
                                        borderRadius: '100px',
                                        fontWeight: '600',
                                        transition: 'all 0.3s',
                                        backgroundColor: filter === cat ? 'var(--primary)' : 'white',
                                        color: filter === cat ? 'white' : 'var(--text-primary)',
                                        border: filter === cat ? 'none' : '1px solid var(--border-color)',
                                        boxShadow: filter === cat ? '0 10px 20px rgba(242, 93, 29, 0.2)' : 'none'
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        className="grid-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={filter}
                    >
                        {filteredCourses.map((course, i) => (
                            <motion.div key={i} className="card" variants={itemVariants} style={{ padding: 0 }}>
                                <div className="course-card-img-wrapper" style={{ height: '240px' }}>
                                    <div className="course-card-img" style={{ backgroundImage: `url(${course.image})` }}>
                                        <div className="course-card-pill">{course.category}</div>
                                    </div>
                                </div>
                                <div style={{ padding: '32px' }}>
                                    <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px', lineHeight: '1.3' }}>{course.title}</h3>
                                    <p className="text-secondary" style={{ marginBottom: '24px', fontSize: '15px' }}>{course.description}</p>

                                    <div style={{ marginBottom: '24px' }}>
                                        <p style={{ fontWeight: '700', fontSize: '14px', marginBottom: '12px' }}>Key Modules:</p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                            {course.modules.slice(0, 3).map((m, idx) => (
                                                <span key={idx} style={{ fontSize: '12px', background: '#f0f4ff', padding: '4px 10px', borderRadius: '4px', fontWeight: '500' }}>{m}</span>
                                            ))}
                                            {course.modules.length > 3 && <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: '600' }}>+{course.modules.length - 3} More</span>}
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', borderTop: '1px solid #eee', paddingTop: '24px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                                            <Clock size={16} /> {course.duration}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                                            <BookOpen size={16} /> {course.lessons}
                                        </div>
                                    </div>
                                    <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                        Enroll Now <ChevronRight size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
