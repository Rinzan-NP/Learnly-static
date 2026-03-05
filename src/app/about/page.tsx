"use client";

import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, Heart, Lightbulb, Shield, Users } from 'lucide-react'
import { motion } from 'framer-motion'

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
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export default function About() {
    const stats = [
        { label: "Learners Transformed", value: "15K+" },
        { label: "Successful Courses", value: "200+" },
        { label: "Experienced Mentors", value: "50+" },
        { label: "Satisfaction Rate", value: "99%" }
    ];

    const values = [
        {
            title: "Innovative",
            desc: "Experience hands-on learning that builds real-world skills and creativity, empowering your journey.",
            icon: <Lightbulb size={32} className="text-accent" />
        },
        {
            title: "Valuable",
            desc: "Access a curated library of courses, tools, and materials to master skills and achieve your goals.",
            icon: <Heart size={32} className="text-accent" />
        },
        {
            title: "Transparent",
            desc: "We embrace a global community of learners with openness & diversity, creating a space for growth.",
            icon: <Shield size={32} className="text-accent" />
        }
    ];

    return (
        <>
            <section className="hero">
                <div className="hero-bg-grid"></div>
                <motion.div
                    className="container"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div className="rating-badge" variants={itemVariants}>
                        <span>Our Story</span>
                    </motion.div>

                    <motion.h1 className="heading-xl" variants={itemVariants}>
                        Our Passionate Team is Here<br />
                        <span className="serif-italic">To Deliver Value to You</span>
                    </motion.h1>

                    <motion.p style={{ maxWidth: '700px', margin: '24px auto 0' }} variants={itemVariants}>
                        Discover a world of knowledge, connect with expert instructors, and achieve your goals with our live, interactive learning experiences.
                    </motion.p>
                </motion.div>
            </section>

            <section className="section-padding bg-white">
                <div className="container">
                    <div className="split-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src="https://framerusercontent.com/images/EEFT5idD5Z7l17UKEyR1ls1NaWg.png"
                                alt="Team working"
                                style={{ width: '100%', borderRadius: '32px' }}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="heading-lg" style={{ marginBottom: '24px' }}>
                                Empowering Learners for a<br />
                                <span className="serif-italic">Brighter Future</span>
                            </h2>
                            <p className="text-secondary" style={{ marginBottom: '32px' }}>
                                At Learnly, we empower individuals by unlocking their potential through quality education. We equip learners with tools, resources, and expertise to excel in their chosen fields.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                <div>
                                    <h3 className="heading-md" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                        <CheckCircle2 color="#00A36C" size={20} /> Our Mission
                                    </h3>
                                    <p className="text-secondary" style={{ fontSize: '14px' }}>
                                        To make education accessible and impactful, empowering individuals to achieve their dreams.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="heading-md" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                        <CheckCircle2 color="#00A36C" size={20} /> Our Vision
                                    </h3>
                                    <p className="text-secondary" style={{ fontSize: '14px' }}>
                                        To be a global leader in education, fostering innovation, collaboration, and excellence.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section-padding" style={{ backgroundColor: '#F9FAFB' }}>
                <div className="container">
                    <div className="grid-3" style={{ textAlign: 'center' }}>
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <h3 className="heading-xl" style={{ color: 'var(--primary)', marginBottom: '8px' }}>{stat.value}</h3>
                                <p className="text-secondary" style={{ fontWeight: '500' }}>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 className="heading-lg">
                            Learnly Core <span className="serif-italic">Values</span>
                        </h2>
                        <p className="text-secondary" style={{ marginTop: '16px' }}>
                            We are guided by a set of core principles that drive our commitment to excellence.
                        </p>
                    </div>
                    <div className="grid-3">
                        {values.map((val, i) => (
                            <motion.div
                                key={i}
                                className="card"
                                style={{ padding: '40px', textAlign: 'center', alignItems: 'center' }}
                                whileHover={{ y: -5 }}
                            >
                                <div style={{ marginBottom: '24px', padding: '16px', borderRadius: '16px', backgroundColor: '#FFF0EB' }}>
                                    {val.icon}
                                </div>
                                <h3 className="heading-md" style={{ marginBottom: '16px' }}>{val.title}</h3>
                                <p className="text-secondary">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
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
        </>
    )
}
