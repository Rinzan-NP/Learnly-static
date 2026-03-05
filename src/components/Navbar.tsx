import Link from 'next/link'
import { Rocket, ChevronDown } from 'lucide-react'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-inner">
                <Link href="/" className="logo">
                    <Rocket className="logo-icon" fill="currentColor" size={28} />
                    <span>Learnly</span>
                </Link>
                <div className="nav-links">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/about" className="nav-link">About us</Link>
                    <Link href="/courses" className="nav-link">Courses</Link>
                    <Link href="/blog" className="nav-link">Blog</Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }} className="nav-link">
                        Pages <ChevronDown size={16} />
                    </div>
                </div>
                <Link href="/contact" className="btn-primary">
                    Contact Us
                </Link>
            </div>
        </nav>
    )
}
