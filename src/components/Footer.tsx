import Link from 'next/link'
import { Rocket, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <Link href="/" className="logo mb-4 relative w-[220px] h-[50px] block" style={{ display: 'block' }}>
                            <img src="/logo.png" alt="Be Campus Academy" className="absolute h-[110px] w-auto max-w-none mix-blend-multiply object-contain -left-6 top-1/2 -translate-y-1/2" />
                        </Link>
                        <p className="text-secondary mb-8 max-w-sm" style={{ marginTop: '10px' }}>
                            Be Campus Academy is a leading training institute in Kottakkal, offering career-focused professional courses aligned with today’s industry requirements.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="social-icon">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="social-icon">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="social-icon">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Our Courses</h4>
                        <ul className="space-y-4 text-secondary">
                            <li><Link href="/courses">Digital Marketing</Link></li>
                            <li><Link href="/courses">Graphic Designing</Link></li>
                            <li><Link href="/courses">Web Development</Link></li>
                            <li><Link href="/courses">HR & Talent Management</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-secondary">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/placements">Placements / Events</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/faqs">FAQs</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
                        <ul className="space-y-4 text-secondary">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-primary shrink-0" />
                                <span>Be Campus Academy, Kottakkal, Malappuram, Kerala</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span>+91 XXXXX XXXXX</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span>info@becampusacademy.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary">
                    <p>© 2026 Be Campus Academy. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-and-conditions">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
