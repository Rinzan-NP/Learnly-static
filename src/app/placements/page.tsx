"use client";

import { motion } from 'framer-motion'
import { Briefcase, Calendar, Star, CheckCircle2, ArrowUpRight } from 'lucide-react'
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Placements() {
    return (
        <div style={{ backgroundColor: '#F2F7FF', minHeight: '100vh' }}>
            <section className="hero">
                <div className="hero-bg-grid"></div>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="rating-badge" style={{ marginInline: 'auto' }}>
                            <span>Student Success</span>
                        </div>
                        <h1 className="heading-xl">Placements & <span className="serif-italic">Events</span></h1>
                        <p className="text-secondary" style={{ marginTop: '24px', maxWidth: '700px', marginInline: 'auto', fontSize: '18px' }}>
                            Connecting students with top companies and providing hands-on experience through workshops and industry events.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                            <h2 className="heading-lg" style={{ marginBottom: '32px' }}>100% Placement <span className="serif-italic">Assistance</span></h2>
                            <p className="text-secondary" style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
                                At Be Campus Academy – Kottakkal, student success is our priority. We connect students with top companies and help them prepare for interviews through dedicated support.
                            </p>
                            <div style={{ display: 'grid', gap: '20px' }}>
                                {[
                                    "Professional Resume Building",
                                    "Soft Skills & Personality Development",
                                    "Mock Interviews & Career Coaching",
                                    "Exclusive Job Drives & Portals",
                                    "Direct Company Referrals"
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <Briefcase className="text-primary" size={24} />
                                        <span style={{ fontSize: '18px', fontWeight: '600' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <div className="card" style={{ padding: 0, overflow: 'hidden', height: '100%', minHeight: '500px' }}>
                            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200" alt="Placements" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <motion.div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 className="heading-lg">Workshops & <span className="serif-italic">Events</span></h2>
                        <p className="text-secondary" style={{ marginTop: '20px', maxWidth: '600px', marginInline: 'auto' }}>
                            Our events are designed to expose learners to real-world challenges and networking opportunities.
                        </p>
                    </motion.div>

                    <div className="grid-3">
                        {[
                            { title: "AI in Digital Marketing", type: "Workshop", date: "Coming Soon" },
                            { title: "Creative Design Seminar", type: "Seminar", date: "Monthly" },
                            { title: "Tech Career Fair", type: "Event", date: "Quarterly" }
                        ].map((event, i) => (
                            <motion.div key={i} className="card" style={{ padding: '40px' }} whileHover={{ y: -10 }}>
                                <Calendar className="text-primary mb-6" size={40} />
                                <h3 className="font-bold text-2xl mb-4">{event.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                    <span style={{ background: '#F2F7FF', padding: '6px 12px', borderRadius: '6px', fontSize: '14px', fontWeight: '700' }}>{event.type}</span>
                                    <span className="text-secondary font-bold">{event.date}</span>
                                </div>
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
                            Start Your Career <br />
                            <span className="serif-italic">Success Story</span>
                        </h2>
                        <p className="text-secondary" style={{ marginBottom: '40px' }}>
                            Our placement cell is ready to guide you from day one. Join the academy that prioritizes your career growth.
                        </p>
                        <Link href="/contact" className="btn-primary" style={{ fontSize: '18px', padding: '16px 36px' }}>
                            Inquire Now <ArrowUpRight size={24} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
