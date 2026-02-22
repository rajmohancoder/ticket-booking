import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden">
            <div className="absolute inset-0 z-10 bg-black/40"></div>
            <div
                className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: 'url("/murugan_temple_hero.png")',
                }}
            >
                <div className="container relative z-20 mx-auto max-w-4xl px-4 text-center md:px-10">
                    <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/20 px-3 py-1 font-bold text-xs uppercase tracking-wider text-primary shadow-lg backdrop-blur-sm dark:text-primary">
                        Om Saravanabhava
                    </span>
                    <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white drop-shadow-lg md:text-6xl">
                        Welcome to the Divine Abode of Murungai Murugan
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg font-medium text-gray-100 drop-shadow-md md:text-xl">
                        Experience spiritual bliss at Puducherry's historic sanctuary. Discover serenity,
                        architectural marvels, and divine grace.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link href="/ticket-booking">
                            <Button className="h-12 w-full bg-primary px-8 text-base font-bold text-black shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark sm:w-auto">
                                {process.env.NEXT_PUBLIC_BOOK_DARSHAN_TEXT}
                            </Button>
                        </Link>
                        <Link href="/ritual-timings">
                            <Button
                                variant="outline"
                                className="h-12 w-full border-white/30 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto"
                            >
                                {process.env.NEXT_PUBLIC_VIEW_RITUAL_TEXT}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
