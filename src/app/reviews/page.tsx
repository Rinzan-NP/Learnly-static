"use client";

import { motion } from 'framer-motion'
import { Star, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Reviews() {
    const reviews = [
        {
            name: "Jhonny Dope",
            role: "Marketing Specialist",
            review: "The courses on Learly are incredible. I learned digital marketing from scratch and landed a job in just three months. The instructors are amazing, and the platform is so easy to use. Truly life-changing!",
            avatar: "https://framerusercontent.com/images/7xW7wI2vS2z7rI6P2P2P2P2P2P2.jpg"
        },
        {
            name: "James Patel",
            role: "Freelance UI/UX Designer",
            review: "Learly made learning easy and fun. I explored data science and UI/UX design at my own pace. The detailed courses and hands-on projects helped me build confidence and real skills. Highly recommend it!",
            avatar: "https://framerusercontent.com/images/rvUmqvCWSlGjZMuf11ul95crPU.png"
        },
        {
            name: "James Lwiz",
            role: "Researcher",
            review: "This course changed the way I approach my career! The content was thorough, engaging, and incredibly practical. I’ve already applied what I learned to real-world scenarios form them.",
            avatar: "https://framerusercontent.com/images/aCUQwg4vD3p2rcHSJkMfWYL15g.png"
        },
        {
            name: "Kane Williamson",
            role: "Developers",
            review: "I had high hopes, but this program exceeded every expectation. The instructors were knowledgeable, and the resources provided were top notch. Highly recommend course from learnly!",
            avatar: "https://framerusercontent.com/images/4wat1wJFOMZsUFXZIgWayB7eC1o.jpg"
        },
        {
            name: "Chris Morris",
            role: "Developers",
            review: "Learning with Learly was an amazing experience! The interactive courses and real-world projects made complex topics easy to grasp. I gained both confidence and practical skills. Highly recommend it!",
            avatar: "https://framerusercontent.com/images/EEFT5idD5Z7l17UKEyR1ls1NaWg.png"
        },
        {
            name: "Mike Brown",
            role: "Freelance",
            review: "Learly provided an engaging and effective learning experience. I explored programming and graphic design at my own pace. The well-structured courses helped me gain confidence. Highly recommend it!",
            avatar: "https://framerusercontent.com/images/IrKryFvOruxPxLkGeTjrbmh9k.png"
        }
    ];

    return (
        <div style={{ backgroundColor: '#F2F7FF', minHeight: '100vh' }}>
            <section className="hero">
                <div className="hero-bg-grid"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="heading-xl">Your Words, Our <span className="serif-italic">Motivation</span></h1>
                        <p className="text-secondary" style={{ marginTop: '24px', maxWidth: '600px', marginInline: 'auto' }}>
                            Hear from our students about their learning experience with Learnly. We pride ourselves on delivering high-quality education.
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
                        {reviews.map((test, i) => (
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

            <section className="container">
                <div className="cta-banner">
                    <div className="cta-banner-bg"></div>
                    <div className="cta-content">
                        <h2 className="heading-lg" style={{ marginBottom: '24px' }}>
                            Unlock Your Learning<br />
                            <span className="serif-italic">Potential Today</span>
                        </h2>
                        <p className="text-secondary" style={{ marginBottom: '40px' }}>
                            Join thousands of learners around the world who are advancing their careers with our expertly crafted courses and supportive community.
                        </p>
                        <Link href="/courses" className="btn-primary group" style={{ fontSize: '18px', padding: '16px 36px' }}>
                            Explore Courses <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
