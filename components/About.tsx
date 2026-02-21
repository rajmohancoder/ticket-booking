import { ArrowRight, History, Users, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAoSLLOBnw-v0de9_CpDECuh_R63Fxb1sTyM5mDXqRvQrKNHIhkp0O6qnuZiJ6khJ5QkBbBSaInt7oj8RG_zG54z8xetRW1rbWT1SDQJpjkuMphcvrdd0jj6HMKVYfyBFjvremt8osRZX1TYz4JATP7myHKr5Ctq9-d1KSziysbG9pBRXERnMjG67hxdzGZwmunj_hLVeGnM7Na5wsOshGDIHHSgVLS8hK65E5C5bi-HUje55wP_2n-5r-anijw608xevJGh45WFCU",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCkrl8cFzD_N8CM_LBlCrTwvZXcaSzHZ0WaQeTd3cOdqFx2pfjMWXa-iwpxLoVxhwG1JHU2mTYM54uQQCh45MUSkJSNeJxKS7O4cF1mzSWOBlBs5i04miycrs0amsEzAEngsiFLOrCbp2vsA9TEW3sddkkRcjsIF7CBzCpFSW5ur5xyr2VYKmAR9b7f2yUdVV5ifnZMQVeD8io1EmuTSA4qrZPm5-mHdNfTFj0ei9ebjgvZhgQBTQfzK0rGQOXXhJ4OcomBk0fNPSY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB3EZ8Dug7DRdZZH900XgAv0nLa8Kgoq6oSahbX3DU4B2lL8fkXFFWkr52ntKE0i_m82EM1mUeOQYP5DWmqp8Tp-pjIU1AifhbHD7Puc-JCqdcOPrj-J9-oo8ss8CpPGyjZD21mieGTopko1otODc29ALjFooGDhulXEN-20tmVTOZmMntE5wOqBQzwPA369gILldDkoC1u7Joh4aI3m3DUysAIrqapXyxMJ-UmbdJOQHZ5BJyfIowgBdIb3ZqcFcm1HPXrb8TdMaU",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAoSLLOBnw-v0de9_CpDECuh_R63Fxb1sTyM5mDXqRvQrKNHIhkp0O6qnuZiJ6khJ5QkBbBSaInt7oj8RG_zG54z8xetRW1rbWT1SDQJpjkuMphcvrdd0jj6HMKVYfyBFjvremt8osRZX1TYz4JATP7myHKr5Ctq9-d1KSziysbG9pBRXERnMjG67hxdzGZwmunj_hLVeGnM7Na5wsOshGDIHHSgVLS8hK65E5C5bi-HUje55wP_2n-5r-anijw608xevJGh45WFCU",
]

export function About() {
    return (
        <section
            className="border-y border-[#f5f3f0] bg-surface-light py-16 transition-colors dark:border-[#3a3022] dark:bg-surface-dark md:py-24"
            id="about"
        >
            <div className="mx-auto max-w-7xl px-4 md:px-10">
                <div className="flex flex-col items-center gap-12 lg:flex-row">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                            <span className="h-px w-8 bg-primary"></span>
                            About The Temple
                        </div>
                        <h2 className="text-3xl font-bold leading-tight text-text-main dark:text-white md:text-4xl">
                            A Sanctuary of Faith &<br /> Dravidian Architecture
                        </h2>
                        <p className="text-lg leading-relaxed text-text-muted dark:text-gray-300">
                            Murungai Murugan Temple in Puducherry stands as a testament to centuries of devotion.
                            Built in the traditional Dravidian style, the temple features a towering
                            Rajagopuram adorned with intricate sculptures depicting the legends of Skanda.
                        </p>
                        <p className="text-base leading-relaxed text-text-muted dark:text-gray-300">
                            Devotees flock here to seek the blessings of Lord Muruga, the god of war and victory,
                            for courage, wisdom, and prosperity. The sanctum sanctorum radiates a powerful divine
                            energy that calms the mind and uplifts the soul.
                        </p>
                        <Button className="mt-4 flex w-fit items-center gap-2 bg-primary font-bold text-black shadow-lg shadow-orange-500/20 hover:bg-primary-dark">
                            Read More
                            <ArrowRight className="h-4 w-4" />
                        </Button>

                        <div className="flex flex-col gap-6 pt-4">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <History className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-text-main dark:text-white">150+ Years</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-text-muted dark:text-gray-400">
                                        A rich heritage spanning over a century.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Users className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-text-main dark:text-white">
                                        500,000+ Visitors
                                    </h3>
                                    <p className="mt-1 text-sm leading-relaxed text-text-muted dark:text-gray-400">
                                        Welcoming devotees from around the world each year.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <PartyPopper className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-text-main dark:text-white">
                                        20+ Festivals
                                    </h3>
                                    <p className="mt-1 text-sm leading-relaxed text-text-muted dark:text-gray-400">
                                        Celebrating vibrant traditions and cultural events throughout the year.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex-1">
                        <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-xl">
                            <div className="animate-carousel flex h-full w-[400%]">
                                {carouselImages.map((image, index) => (
                                    <div key={index} className="relative h-full w-1/4 bg-gray-200">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{ backgroundImage: `url("${image}")` }}
                                        ></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
