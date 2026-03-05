"use client";

import Link from 'next/link'
import { ArrowUpRight, Search, Star, Clock, BookOpen } from 'lucide-react'
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
            title: "Data Science Essentials",
            author: "Dr. Liam Morgan",
            duration: "25h 30min",
            lessons: 12,
            rating: 4.6,
            level: "Advanced",
            price: "$299.99",
            image: "https://framerusercontent.com/images/4wat1wJFOMZsUFXZIgWayB7eC1o.jpg",
            category: "Data Science"
        },
        {
            title: "Digital Marketing Pro",
            author: "Alex Reveira",
            duration: "18h 45min",
            lessons: 10,
            rating: 4.5,
            level: "Intermediate",
            price: "$199.99",
            image: "https://framerusercontent.com/images/EEFT5idD5Z7l17UKEyR1ls1NaWg.png",
            category: "Marketing"
        },
        {
            title: "UI/UX Design Essentials",
            author: "Dr. Michael Lee",
            duration: "25h 30min",
            lessons: 28,
            rating: 4.7,
            level: "Beginner",
            price: "$99.99",
            image: "https://framerusercontent.com/images/IrKryFvOruxPxLkGeTjrbmh9k.png",
            category: "Design"
        },
        {
            title: "Creative Writing Bootcamp",
            author: "Desmond Andrade",
            duration: "5h 30min",
            lessons: 6,
            rating: 4.9,
            level: "Beginner",
            price: "$49.99",
            image: "https://framerusercontent.com/images/2Egur2fNYRGPeQKUmUX2PoOqxM.png",
            category: "Writing"
        },
        {
            title: "Video Editing Masterclass",
            author: "Desmond Andrade",
            duration: "8h 55min",
            lessons: 32,
            rating: 4.8,
            level: "Intermediate",
            price: "$129.99",
            image: "https://framerusercontent.com/images/JwvWXTcWORlFsJWV5F76T3P5ZE.png",
            category: "Video"
        },
        {
            title: "Photo manipulation",
            author: "Alex Reveira",
            duration: "5h 30min",
            lessons: 24,
            rating: 4.7,
            level: "Beginner",
            price: "$49.99",
            image: "https://framerusercontent.com/images/15Y78i4e2J8z9G6P2P2P2P2P2P2.jpg",
            category: "Design"
        },
        {
            title: "Product Design Bootcamp",
            author: "Dr. Michael Lee",
            duration: "25h 30min",
            lessons: 33,
            rating: 4.4,
            level: "Beginner",
            price: "$149.99",
            image: "https://framerusercontent.com/images/8136BY6iSEiQiFS0aGhF7iJslo.png",
            category: "Design"
        },
        {
            title: "Digital Marketing Mastery",
            author: "Alex Reveira",
            duration: "15h 35min",
            lessons: 40,
            rating: 4.8,
            level: "Intermediate",
            price: "$179.99",
            image: "https://framerusercontent.com/images/WiU5lbahsjWy5BCMq7zgElUv9aE.png",
            category: "Marketing"
        }
    ];

    const [filter, setFilter] = useState("All");
    const categories = ["All", "Design", "Marketing", "Data Science", "Writing", "Video"];

    const filteredCourses = filter === "All"
        ? allCourses
        : allCourses.filter(c => c.category === filter);

    return (
        <div style={{ backgroundColor: '#F2F7FF', minHeight: '100vh' }}>
            <section className="hero" style={{ paddingBottom: '60px' }}>
                <div className="hero-bg-grid"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="heading-xl">Browse All Our <span className="serif-italic">Courses</span></h1>
                        <p className="text-secondary" style={{ marginTop: '24px', maxWidth: '600px', marginInline: 'auto' }}>
                            Explore our wide range of courses and start learning today. From programming and design to marketing and data science.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '48px', justifyContent: 'center' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={{
                                    padding: '10px 24px',
                                    borderRadius: '9999px',
                                    fontSize: '15px',
                                    fontWeight: '500',
                                    transition: 'all 0.2s',
                                    backgroundColor: filter === cat ? 'var(--primary)' : 'white',
                                    color: filter === cat ? 'white' : 'var(--text-primary)',
                                    border: '1px solid ' + (filter === cat ? 'var(--primary)' : 'var(--border-color)')
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        className="grid-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        key={filter}
                    >
                        {filteredCourses.map((course, i) => (
                            <motion.div key={i} className="card" variants={itemVariants}>
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
                                        <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary)' }}>{course.price}</span>
                                    </div>
                                    <h3 className="heading-md" style={{ marginBottom: '8px' }}>{course.title}</h3>
                                    <p className="text-secondary" style={{ fontSize: '14px', marginBottom: '20px' }}>By {course.author}</p>
                                    <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', borderTop: '1px solid #f0f0f0', paddingTop: '16px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                                            <Clock size={14} /> {course.duration}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                                            <BookOpen size={14} /> {course.lessons} Lessons
                                        </div>
                                    </div>
                                    <Link href={`/courses/${course.title.toLowerCase().replace(/ /g, '-')}`} className="btn-card">
                                        View Course
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
