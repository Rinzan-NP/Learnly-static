"use client";

import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function FAQ() {
    const faqs = [
        {
            q: "Who can join Be Campus Academy courses?",
            a: "Anyone who has completed Plus Two, Degree, or working professionals can join."
        },
        {
            q: "Do I need prior experience to join?",
            a: "No. All courses are designed for beginners as well as professionals. Our trainers guide you from the basics to advanced levels."
        },
        {
            q: "Do you provide certification?",
            a: "Yes. We provide course completion certification and approval that is recognized in the industry."
        },
        {
            q: "Is placement assistance available?",
            a: "Yes, we provide 100% placement assistance, internship opportunities, and career guidance for all our students."
        },
        {
            q: "Where is Be Campus Academy located?",
            a: "Be Campus Academy is located in Kottakkal, Malappuram."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div style={{ backgroundColor: '#F2F7FF', minHeight: '100vh' }}>
            <section className="hero">
                <div className="hero-bg-grid"></div>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="heading-xl">Frequently Asked <span className="serif-italic">Questions</span></h1>
                        <p className="text-secondary" style={{ marginTop: '24px', maxWidth: '600px', marginInline: 'auto', fontSize: '18px' }}>
                            Find answers to common questions about our platform, admissions, and career support.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <motion.div variants={containerVariants} initial="hidden" animate="visible">
                        {faqs.map((faq, i) => (
                            <motion.div key={i} className="card" style={{ marginBottom: '16px', padding: '0', overflow: 'hidden' }} variants={itemVariants}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    style={{
                                        width: '100%',
                                        padding: '32px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: 'white',
                                        fontWeight: '700',
                                        fontSize: '18px',
                                        textAlign: 'left',
                                        border: 'none',
                                        outline: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {faq.q}
                                    {openIndex === i ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-primary" />}
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <div style={{ padding: '0 32px 32px', color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '16px' }}>
                                        {faq.a}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
