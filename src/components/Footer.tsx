import Link from 'next/link'
import { Hexagon, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="footer" style={{ marginTop: '80px' }}>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <Link href="/" className="logo" style={{ marginBottom: '24px' }}>
                            <Hexagon className="logo-icon" fill="currentColor" />
                            <span>Learnly</span>
                        </Link>
                        <p className="text-secondary" style={{ marginBottom: '24px', maxWidth: '300px' }}>
                            Learnly is a modern Framer template for online courses, educators, and e-learning platforms.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <a href="#" style={{ padding: '12px', borderRadius: '50%', border: '1px solid var(--border-color)' }}>
                                <Facebook size={20} />
                            </a>
                            <a href="#" style={{ padding: '12px', borderRadius: '50%', border: '1px solid var(--border-color)' }}>
                                <Twitter size={20} />
                            </a>
                            <a href="#" style={{ padding: '12px', borderRadius: '50%', border: '1px solid var(--border-color)' }}>
                                <Instagram size={20} />
                            </a>
                            <a href="#" style={{ padding: '12px', borderRadius: '50%', border: '1px solid var(--border-color)' }}>
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Navigate</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/courses">Courses</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                            <li><Link href="/faqs">FAQ</Link></li>
                            <li><Link href="/reviews">Testimonials</Link></li>
                            <li><Link href="/404">404 Page</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>hello@learnly.com</li>
                            <li>+1 (555) 000-0000</li>
                            <li>123 Learning Ave, Suite 100<br />San Francisco, CA 94107</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 Learnly. All rights reserved.</p>
                    <p>Made with ❤️ Remade in Next.js</p>
                </div>
            </div>
        </footer>
    )
}
