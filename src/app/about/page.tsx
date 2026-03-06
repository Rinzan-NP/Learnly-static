"use client";

import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, Heart, Lightbulb, Shield, Users, Target, Rocket } from 'lucide-react'
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
    return (
        <div style={{ backgroundColor: '#F2F7FF', minHeight: '100vh' }}>
            <section className="hero">
                <div className="hero-bg-grid"></div>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="rating-badge" style={{ marginInline: 'auto' }}>
                            <span>Who We Are?</span>
                        </div>
                        <h1 className="heading-xl">About <span className="serif-italic">Be Campus Academy</span></h1>
                        <p className="text-secondary" style={{ marginTop: '24px', maxWidth: '700px', marginInline: 'auto', fontSize: '18px' }}>
                            Be Campus Academy is a career-focused professional training institute recognized as one of the Best Training Institutes in Kottakkal.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <h2 className="heading-lg" style={{ marginBottom: '32px' }}>Empowering Students with <br /><span className="serif-italic">Industry-Ready Skills</span></h2>
                            <p className="text-secondary" style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '24px' }}>
                                We are committed to empowering students with industry-ready skills, practical knowledge, and professional confidence to succeed in today’s competitive job market.
                            </p>
                            <p className="text-secondary" style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '32px' }}>
                                Our academy was established with a clear mission to bridge the gap between education and employment. We follow a learn–practice–perform model to ensure every student gains practical exposure.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                                <div className="card" style={{ padding: '32px' }}>
                                    <Target className="text-primary mb-4" size={32} />
                                    <h4 className="font-bold text-xl mb-2">Our Vision</h4>
                                    <p className="text-secondary text-sm">To become the most trusted training institute in Kottakkal, producing skilled professionals ready for real-world challenges.</p>
                                </div>
                                <div className="card" style={{ padding: '32px' }}>
                                    <Rocket className="text-primary mb-4" size={32} />
                                    <h4 className="font-bold text-xl mb-2">Our Mission</h4>
                                    <p className="text-secondary text-sm">To deliver high-quality, practical-oriented education and focus on skill development rather than theory alone.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ padding: 0, overflow: 'hidden', height: '100%', minHeight: '600px' }}>
                            <img src="https://framerusercontent.com/images/rvUmqvCWSlGjZMuf11ul95crPU.png" alt="Academy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '60px' }}>What Makes Us <span className="serif-italic">Different?</span></h2>
                    <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {[
                            { title: "Practical Focus", desc: "Hands-on training with real-time projects and case studies." },
                            { title: "AI-Integrated", desc: "Modern curriculum incorporating AI tools into different workflows." },
                            { title: "Expert Mentors", desc: "Learn from trainers who have extensive industry experience." },
                            { title: "Placement Support", desc: "100% placement assistance and interview preparation." },
                            { title: "One-to-One Attention", desc: "Individual student support for better learning outcomes." },
                            { title: "Affordable Fees", desc: "Transparent and budget-friendly fee structure for everyone." }
                        ].map((item, i) => (
                            <motion.div key={i} className="card" style={{ padding: '40px' }} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                                <CheckCircle2 className="text-primary mb-4" size={28} />
                                <h3 className="font-bold text-xl mb-4">{item.title}</h3>
                                <p className="text-secondary">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <h2 className="heading-md" style={{ marginBottom: '32px' }}>Who Can Join Us?</h2>
                    <p className="text-secondary mb-12" style={{ fontSize: '18px' }}>No prior technical knowledge required. We welcome everyone passionate about learning.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                        {["Students after Plus Two/Degree", "Freshers starting careers", "Working professionals", "Entrepreneurs", "Freelancers"].map((tag, i) => (
                            <span key={i} style={{ background: '#F2F7FF', padding: '12px 24px', borderRadius: '100px', fontWeight: '600', color: 'var(--text-primary)' }}>{tag}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="cta-banner">
                    <div className="cta-banner-bg"></div>
                    <div className="cta-content">
                        <h2 className="heading-lg" style={{ marginBottom: '24px' }}>
                            Your Career Journey <br />
                            <span className="serif-italic">Starts Here</span>
                        </h2>
                        <p className="text-secondary" style={{ marginBottom: '40px' }}>
                            If you are looking for the Best Training Institute in Kottakkal to build your future with confidence, Be Campus Academy is the right choice.
                        </p>
                        <Link href="/contact" className="btn-primary group" style={{ fontSize: '18px', padding: '16px 36px' }}>
                            Contact Us Now <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
