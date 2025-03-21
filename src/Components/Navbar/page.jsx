"use client";
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const sideMenuRef = useRef(null);
    const { data: session, status } = useSession();
    const pathname = usePathname();

    // Handle click outside to close menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sideMenuRef.current && !sideMenuRef.current.contains(event.target) && menuOpen) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    // Prevent body scrolling when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    // Now check the route after all hooks have been called
    if (pathname.startsWith('/admin')) {
        return null; // Don't render the Navbar on admin routes
    }

    const links = [
        { href: "/", name: "Home" },
        { href: "/services", name: "Services" },
        { href: "/Contact", name: "Contact" },
        { href: "/admin", name: "Admin" },
        ...(status === 'authenticated' ? [{ href: "/my-bookings", name: "My Bookings" }] : []),
    ];

    return (
        <>
            <nav className="sticky top-0 rounded-4xl bg-white shadow-sm z-40">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <Image src="/assets/images/logo.png" alt="Logo" width={480} height={480} className="h-25 w-auto" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
                        {links.map(link => (
                            <Link 
                                key={link.href} 
                                href={link.href} 
                                className="relative text-gray-700 font-medium transition-all duration-300 after:block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-red-500 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {status === 'authenticated' ? (
                            <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar h-[60px] w-[60px]">
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <Image
                                                alt="Profile"
                                                src={session?.user?.image || "https://lh3.googleusercontent.com/a/ACg8ocIP4ZCciXvkeKEdo8NqGQHSIUGx5lKM2UFWJFhMJNfhjfj2W_Rd=s96-c"}
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-white rounded-box w-52 flex flex-col space-y-2 z-[1] border border-gray-200">
                                        <li>
                                            <Link href="/my-bookings" className="px-5 py-3 bg-gradient-to-r rounded-full from-gray-100 to-gray-200 text-gray-800 font-semibold shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white transform transition-all duration-300 hover:scale-105">
                                                My Bookings
                                            </Link>
                                        </li>
                                        <li>
                                            <a className="px-5 py-3 bg-gradient-to-r rounded-full from-gray-100 to-gray-200 text-gray-800 font-semibold shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white transform transition-all duration-300 hover:scale-105" onClick={() => signOut()}>
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="px-5 py-3 bg-gradient-to-r rounded-full from-gray-100 to-gray-200 text-gray-800 font-semibold shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white transform transition-all duration-300 hover:scale-105"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-4 py-3 bg-gradient-to-r rounded-full from-gray-100 to-gray-200 text-gray-800 font-semibold shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white transform transition-all duration-300 hover:scale-105"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 overflow-hidden group"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div className="relative w-5 flex flex-col items-center justify-center gap-1.5">
                            <span className={`block h-0.5 w-5 bg-gray-800 rounded-full transform transition-all duration-300 ease-out ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block h-0.5 w-3.5 ml-auto bg-red-500 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 translate-x-3' : ''}`}></span>
                            <span className={`block h-0.5 w-5 bg-gray-800 rounded-full transform transition-all duration-300 ease-out ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </div>
                        <div className={`absolute inset-0 bg-red-50 scale-0 rounded-full transition-all duration-300 ${menuOpen ? 'scale-100' : ''}`}></div>
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
            ></div>

            {/* Side Menu Panel */}
            <div
                ref={sideMenuRef}
                className={`fixed top-0 right-0 w-full max-w-xs h-full bg-white z-50 lg:hidden transform transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                tabIndex={menuOpen ? 0 : -1}
                role="dialog"
                aria-modal="true"
            >
                <div className="flex h-full flex-col overflow-y-auto shadow-xl">
                    <div className="px-4 py-6 border-b border-gray-200">
                        {/* Profile Section for Authenticated Users */}
                        {status === 'authenticated' ? (
                            <div className="flex items-center space-x-3">
                                <div className="btn btn-ghost btn-circle avatar h-[60px] w-[60px]">
                                    <div className="w-full h-full rounded-full overflow-hidden shadow-md">
                                        <Image
                                            alt="Profile"
                                            src={session?.user?.image || "https://lh3.googleusercontent.com/a/ACg8ocIP4ZCciXvkeKEdo8NqGQHSIUGx5lKM2UFWJFhMJNfhjfj2W_Rd=s96-c"}
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-semibold text-gray-900">{session?.user?.name || "User"}</span>
                                    <span className="text-sm text-gray-500">{session?.user?.email}</span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                                <button
                                    type="button"
                                    className="rounded-md p-2 text-gray-400 hover:bg-gray-100"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <span className="sr-only">Close panel</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                    
                    <nav className="flex-1 px-4 py-6 space-y-1">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Add Profile Link for Authenticated Users */}
                        {status === 'authenticated' && (
                            <Link
                                href="/profile"
                                className="block px-3 py-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                onClick={() => setMenuOpen(false)}
                            >
                                Profile
                            </Link>
                        )}
                    </nav>
                    
                    <div className="border-t border-gray-200 px-4 py-6 space-y-3">
                        {status === 'authenticated' ? (
                            <button 
                                onClick={() => signOut()} 
                                className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-semibold px-5 py-3 shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white transform transition-all duration-300 hover:scale-105"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="flex w-full items-center justify-center rounded-md bg-red-500 px-3 py-3 text-base font-medium text-white shadow-sm hover:bg-red-600 transition-colors"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="flex w-full items-center justify-center rounded-md bg-gray-800 px-3 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 transition-colors"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}