"use client";

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Calendar, User, Clock } from 'lucide-react'

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

export default function Blog() {
    const posts = [
        {
            title: "Why Learn Digital Marketing in 2026?",
            excerpt: "Digital Marketing is evolving rapidly with AI integration and social media expansion. Businesses are hiring professionals who can handle SEO and AI tools.",
            date: "Feb 24, 2026",
            author: "Be Campus Editor",
            category: "Digital Marketing",
            image: "https://framerusercontent.com/images/4wat1wJFOMZsUFXZIgWayB7eC1o.jpg"
        },
        {
            title: "Top Skills Graphic Designers Need Today",
            excerpt: "Modern graphic designers must master Photoshop, Illustrator, InDesign, and branding. Hands-on experience with live projects is essential.",
            date: "Feb 18, 2026",
            author: "Be Campus Editor",
            category: "Design",
            image: "https://framerusercontent.com/images/IrKryFvOruxPxLkGeTjrbmh9k.png"
        },
        {
            title: "Web Development Trends You Can’t Ignore",
            excerpt: "Full-stack development, responsive design, and AI-assisted coding tools are in demand. Companies seek performance and scalability.",
            date: "Feb 10, 2026",
            author: "Be Campus Editor",
            category: "Technology",
            image: "https://framerusercontent.com/images/EEFT5idD5Z7l17UKEyR1ls1NaWg.png"
        },
        {
            title: "How HR Professionals Shape Modern Organizations",
            excerpt: "HR professionals are crucial in recruitment, talent management, and employee engagement. Effective training helps strategic growth.",
            date: "Feb 05, 2026",
            author: "Be Campus Editor",
            category: "Human Resources",
            image: "https://framerusercontent.com/images/rvUmqvCWSlGjZMuf11ul95crPU.png"
        }
    ];

    return (
        <div style={{ backgroundColor: '#F2F7FF', minHeight: '100vh' }}>
            <section className="hero">
                <div className="hero-bg-grid"></div>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="rating-badge" style={{ marginInline: 'auto' }}>
                            <span>Academy Blog</span>
                        </div>
                        <h1 className="heading-xl">Insights & <span className="serif-italic">Updates</span></h1>
                        <p className="text-secondary" style={{ marginTop: '24px', maxWidth: '600px', marginInline: 'auto', fontSize: '18px' }}>
                            Stay updated with the latest trends in the industry and tips from our expert trainers at Be Campus Academy.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <motion.div
                        className="grid-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {posts.map((post, i) => (
                            <motion.div key={i} className="card" variants={itemVariants} style={{ padding: 0 }}>
                                <div style={{ height: '240px', background: `url(${post.image}) center/cover` }}></div>
                                <div style={{ padding: '32px' }}>
                                    <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} /> {post.date}</span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} /> 5 min read</span>
                                    </div>
                                    <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px', lineHeight: '1.3' }}>{post.title}</h3>
                                    <p className="text-secondary" style={{ fontSize: '16px', marginBottom: '24px', lineHeight: '1.6' }}>
                                        {post.excerpt}
                                    </p>
                                    <Link href="#" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: '700', color: 'var(--primary)' }}>
                                        Read Full Article <ArrowUpRight size={18} />
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
