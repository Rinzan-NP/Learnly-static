"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (window.innerWidth <= 768) return;

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);
        document.body.style.cursor = "none";

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            document.body.style.cursor = "auto";
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block drop-shadow-md"
            animate={{
                x: mousePosition.x,
                y: mousePosition.y,
            }}
            transition={{ type: "tween", ease: "linear", duration: 0 }}
            style={{ originX: 0, originY: 0 }}
        >
            <svg width="20" height="20" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.65376 21.0069L2.83403 2.10842C2.49392 -0.169829 5.37891 -1.05602 6.75836 0.822839L22.9567 22.8803C24.1868 24.5552 23.0033 26.9658 20.9168 26.9658H13.6288L10.7483 34.6148C10.027 36.53 7.2343 36.31 6.81467 34.3015L5.65376 21.0069Z" fill="var(--primary)" />
                <path d="M5.65376 21.0069L2.83403 2.10842C2.49392 -0.169829 5.37891 -1.05602 6.75836 0.822839L22.9567 22.8803C24.1868 24.5552 23.0033 26.9658 20.9168 26.9658H13.6288L10.7483 34.6148C10.027 36.53 7.2343 36.31 6.81467 34.3015L5.65376 21.0069Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
        </motion.div>
    );
}
