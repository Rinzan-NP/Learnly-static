"use client";

import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Terms() {
    return (
        <motion.div
            className="container"
            style={{ paddingTop: '160px', paddingBottom: '80px', minHeight: '80vh' }}
            initial="hidden" animate="visible" variants={variants}
        >
            <h1 className="heading-xl">Terms & <span className="serif-italic">Conditions</span></h1>
            <p className="text-secondary" style={{ marginTop: '24px', maxWidth: '600px', fontSize: '18px' }}>
                Read our terms and conditions.
            </p>
        </motion.div>
    )
}
