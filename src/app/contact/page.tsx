"use client";

import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
    return (
        <motion.div
            className="container"
            style={{ paddingTop: '160px', paddingBottom: '80px', minHeight: '80vh' }}
            initial="hidden" animate="visible" variants={variants}
        >
            <h1 className="heading-xl">Contact <span className="serif-italic">Us</span></h1>
            <p className="text-secondary" style={{ marginTop: '24px', maxWidth: '600px', fontSize: '18px' }}>
                Have a question or need help? Please send us a message and we'll get back to you as soon as possible.
            </p>
        </motion.div>
    )
}
