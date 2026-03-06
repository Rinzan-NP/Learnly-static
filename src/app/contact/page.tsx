"use client";

import { motion } from 'framer-motion'
import { Phone, Mail, Send, ArrowUpRight, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
    return (
        <div style={{ backgroundColor: '#F2F7FF', minHeight: '100vh' }}>
            <section className="hero" style={{ paddingTop: '160px', paddingBottom: '100px', textAlign: 'center' }}>
                <div className="hero-bg-grid"></div>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="rating-badge" style={{ marginInline: 'auto' }}>
                            <span>Contact Us</span>
                        </div>
                        <h1 className="heading-xl">Get in Touch with <br /><span className="serif-italic">Be Campus Academy</span></h1>
                        <p className="text-secondary" style={{ marginTop: '32px', maxWidth: '700px', marginInline: 'auto', fontSize: '20px' }}>
                            At Be Campus Academy, we are always here to help you with course details, admissions, and career guidance. We are recognized as the Best Training Institute in Kottakkal.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding" style={{ paddingTop: '50px' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                        >
                            <div className="card" style={{ padding: '32px' }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#FFF0EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-secondary" style={{ fontSize: '14px', fontWeight: '500' }}>Our Address</p>
                                        <p style={{ fontSize: '16px', fontWeight: '700' }}>Be Campus Academy, Kottakkal, Malappuram, Kerala, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card" style={{ padding: '32px' }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#E7F0FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b6bfb', flexShrink: 0 }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-secondary" style={{ fontSize: '14px', fontWeight: '500' }}>Phone / WhatsApp</p>
                                        <p style={{ fontSize: '18px', fontWeight: '700' }}>+91 XXXXX XXXXX</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card" style={{ padding: '32px' }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', flexShrink: 0 }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-secondary" style={{ fontSize: '14px', fontWeight: '500' }}>Email Address</p>
                                        <p style={{ fontSize: '18px', fontWeight: '700' }}>info@becampusacademy.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card" style={{ padding: '32px' }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#FAF5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9333ea', flexShrink: 0 }}>
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="text-secondary" style={{ fontSize: '14px', fontWeight: '500' }}>Working Hours</p>
                                        <p style={{ fontSize: '16px', fontWeight: '700' }}>Mon – Sat: 9:00 AM – 5:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="card"
                            style={{ padding: '40px' }}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="heading-md" style={{ marginBottom: '32px' }}>Send Us a Message</h3>
                            <form style={{ display: 'grid', gap: '24px' }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '14px', fontWeight: '600' }}>First Name</label>
                                        <input type="text" placeholder="John" style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', width: '100%' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <label style={{ fontSize: '14px', fontWeight: '600' }}>Last Name</label>
                                        <input type="text" placeholder="Doe" style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', width: '100%' }} />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '14px', fontWeight: '600' }}>Interested Course</label>
                                    <select style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', width: '100%' }}>
                                        <option>Digital Marketing</option>
                                        <option>Graphic Design</option>
                                        <option>Web Development</option>
                                        <option>HR & Talent Management</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '14px', fontWeight: '600' }}>Message</label>
                                    <textarea placeholder="Write your message..." rows={5} style={{ padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', resize: 'none', width: '100%' }}></textarea>
                                </div>
                                <button className="btn-primary" style={{ padding: '16px', borderRadius: '12px' }}>
                                    Send Message <Send className="arrow" size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
