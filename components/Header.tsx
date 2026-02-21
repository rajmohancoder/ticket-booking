"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Moon, Sun } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Header() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#f5f3f0] dark:border-[#3a3022] bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-10 max-w-7xl">
                <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-primary/20 bg-primary/5">
                        <Image
                            src="/temple-logo.png"
                            alt="Murungai Murugan Temple Logo"
                            fill
                            className="object-contain p-1"
                        />
                    </div>
                    <h2 className="text-lg font-black tracking-tight md:text-xl lg:text-2xl">
                        Murungai <span className="text-primary">Murugan</span>
                    </h2>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                        Home
                    </Link>
                    <Link href="/#events" className="text-sm font-medium transition-colors hover:text-primary">
                        Events
                    </Link>
                    <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
                        About
                    </Link>
                    <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
                        Contact Us
                    </Link>
                    <div className="ml-4 flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            {mounted && (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                        <Link href="/ticket-booking">
                            <Button className="bg-primary px-4 font-bold text-black hover:bg-primary-dark">
                                Book Tickets
                            </Button>
                        </Link>
                    </div>
                </nav>

                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Menu</span>
                </Button>
            </div>
        </header>
    )
}
