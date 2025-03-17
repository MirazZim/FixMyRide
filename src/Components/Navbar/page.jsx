import Image from 'next/image'
import Link from 'next/link'


export default function Navbar() {
    const links = [
        { href: "/", name: "Home" },
        { href: "/services", name: "Services" },
        { href: "/blogs", name: "Blogs" },
        { href: "/about", name: "About" },
        { href: "/contact", name: "Contact" }
    ]
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links.map(link => <li key={link.href}><Link href={link.href}>{link.name}</Link></li>)}
                    </ul>
                </div>
                <Link href="/" className="text-xl">
                    <Image src={'/assets/logo.svg'} alt="Logo" width={107} height={87} />
                    </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links.map(link => <li key={link.href}><Link href={link.href}>{link.name}</Link></li>)}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link href="/login" className="btn btn-outline btn-l gap-2">Login</Link>
                <Link href="/register" className="btn btn-outline btn-l gap-2">Register</Link>
                <a className="btn btn-outline btn-l gap-2">Appointment</a>
            </div>
        </div>
    )
}
