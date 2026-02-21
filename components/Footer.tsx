import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-surface-dark pt-16 pb-8 text-white">
            <div className="mx-auto max-w-7xl px-4 md:px-10">
                <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5">
                                <Image
                                    src="/temple-logo.png"
                                    alt="Murungai Murugan Temple Logo"
                                    fill
                                    className="object-contain p-1.5"
                                />
                            </div>
                            <h2 className="text-xl font-black leading-tight tracking-tight text-white">
                                Murungai
                                <br />
                                Murugan
                            </h2>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400">
                            A place of solace, divinity, and heritage. Connecting devotees to the divine for over
                            three centuries.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/ticket-booking" className="text-sm text-gray-400 transition-colors hover:text-primary">
                                    Book Tickets
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-primary">
                                    Upcoming Events
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-primary">
                                    Donations
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-primary">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-primary">
                                    Live Darshan
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold">Information</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-primary">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-primary">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-primary">
                                    Cancellation Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-400 transition-colors hover:text-primary">
                                    Temple Rules
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                <span>
                                    123 Temple Street, Heritage Town,
                                    <br />
                                    Puducherry, 605001, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Phone className="h-5 w-5 shrink-0 text-primary" />
                                <span>+91 413 222 1234</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Mail className="h-5 w-5 shrink-0 text-primary" />
                                <span>office@murugatemple.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-gray-500">© 2024 Murungai Murugan Temple. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link
                            href="#"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all hover:bg-primary hover:text-black"
                        >
                            <Twitter className="h-4 w-4 fill-current" />
                        </Link>
                        <Link
                            href="#"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all hover:bg-primary hover:text-black"
                        >
                            <Facebook className="h-4 w-4 fill-current" />
                        </Link>
                        <Link
                            href="#"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all hover:bg-primary hover:text-black"
                        >
                            <Instagram className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
