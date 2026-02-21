import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
    {
        name: "Lakshmi N.",
        location: "Chennai, India",
        title: "A Miraculous Healing",
        story:
            '"For years I suffered from chronic pain with little hope. Standing before Lord Muruga during the Abhishekam, I felt a warmth spread through me. It was a moment of pure grace that changed my life forever."',
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAP7CuoCAMwnR4Nkip2WNJvgOV_Hf353YhDD14DVWU727Ut8oxmp_jPs8OXTTW1-63SmvBThd8MO-je3F1jvkEdTO2PoDudoWg7Nm01Cb92acL6j8gYB5PE1EaI-tTEO7uPGet29eyuyetlxJ_MtNePyuE3cbc6qlhA2QGHJIbUMC8Axn9ZR-Umyg1Mk9QStfUkMiRvAlh5bcTkfhtN3ge12HNxXCQEEiCnDevv4pTMnuNRC2vM_CFxup-XwVhDrVUVdOIYRlSt1Cg",
    },
    {
        name: "Ramesh K.",
        location: "Bangalore, India",
        title: "Finding My Path",
        story:
            '"I was at a crossroads in my career, confused and anxious. Sitting in the quiet praharam, clarity came to me not as a thought, but as a deep inner feeling. Lord Muruga has guided every step since."',
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBWO1ebLwo83VEqmFXGsiSfLLqTUu98ZL_USTFiGB_gg_7cLunISn8D7ftR_mH07w8sOZZCO76dKK8HLqd8I60cUdEm_Wp0Xyf0pmzRkPdrm-pJ1WAXUzIcsRnyd3_kKzR2uPkVGGlAMKgsvyEDO6RraFkZWk_N6oq3ID-X4iTz32BGdixKy9cvWj7Jx-KXKsQcNqD3EWLZ9hF6nhyGbtyrGfxZaKgkMvapEf7H47IHqiPvyTqVJuA9SZd0Pb1ACZSxzAzvDiNKqz4",
    },
    {
        name: "Priya S.",
        location: "Puducherry, India",
        title: "Family Reunited",
        story:
            '"Our family had been estranged for a decade. I vowed to perform the Kavadi attam if we were reunited. Miraculously, on the day of Thai Poosam, my brother called. This temple is truly a place of miracles."',
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB8wEiMO-IMPDfHw-0VtqNjlOjbEyVZPl-kaMrrv6E-hUi_pm_KUQY69kW3iJTetoF1lZORKU3icHQH1cbAP0kT9HwywJxW-2XPOVpvcC-fAaA2zbONKtM_8AcA2UoJYEdVWWBBqhYQ7VWUKb8QCEWt-u1LuhDCKGMEoUolM9FTOXGyRdKum68b9XxKlkLinbBbGvilsp4MQBl-Xvy2sf6qd3JgOZgfdDBFztpYst8EFNYF_mRvXStkv_uxi5X7TTfuEgZOh_g06SM",
    },
    {
        name: "Suresh M.",
        location: "Salem, India",
        title: "Peace and Solace",
        story:
            '"In the midst of life\'s chaos, this temple has been my anchor. The vibrations during the evening Aarti are divine. I highly recommend visiting for anyone seeking inner peace."',
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCbo3lRFlD4FnHY9-qGckF3w9-QR0xdxohRl-0wgvBpjoyti4p5XpGEJtiGyNfnU4BybMFwDufk7ZJ2QaI5msZ4l5Nx_rH-_3pTXyH4hT4ff9hJkgvH6hKcyxd6MJ9LWrpbgM2SGMggRrq2zptRDKT_Xm5I9n089M7ci5Tb9VscjjCdoZaRDBIUWxFe4TlRin-HnluOQtU5xVFyc2NVeZHDuZZ92E0Yrg8cu2Dy5Ytf7ZslUu6gMV--kCtDlksC_keoE1NvXNbLm7k",
    },
    {
        name: "Anjali R.",
        location: "Coimbatore, India",
        title: "Academic Success",
        story:
            '"I prayed for my daughter\'s exams. With Lord Muruga\'s blessings, she not only excelled but also found her passion. We visit every year to offer our gratitude."',
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAoSLLOBnw-v0de9_CpDECuh_R63Fxb1sTyM5mDXqRvQrKNHIhkp0O6qnuZiJ6khJ5QkBbBSaInt7oj8RG_zG54z8xetRW1rbWT1SDQJpjkuMphcvrdd0jj6HMKVYfyBFjvremt8osRZX1TYz4JATP7myHKr5Ctq9-d1KSziysbG9pBRXERnMjG67hxdzGZwmunj_hLVeGnM7Na5wsOshGDIHHSgVLS8hK65E5C5bi-HUje55wP_2n-5r-anijw608xevJGh45WFCU",
    },
]

export function Testimonials() {
    return (
        <section className="bg-background-light py-16 transition-colors dark:bg-background-dark md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-10">
                <div className="mb-10 flex flex-col items-end justify-between gap-4 md:flex-row">
                    <div>
                        <h2 className="text-3xl font-bold text-text-main dark:text-white">Devotee Stories</h2>
                        <p className="text-text-muted dark:text-gray-400">
                            Inspiring experiences of faith, grace, and divine intervention.
                        </p>
                    </div>
                </div>

                <div className="relative px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {testimonials.map((t, i) => (
                                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="h-full py-4">
                                        <Card className="group flex h-full flex-col border-gray-100 bg-surface-light p-6 transition-all hover:shadow-md dark:border-gray-800 dark:bg-surface-dark">
                                            <div className="mb-5 flex items-center gap-4">
                                                <Avatar className="h-12 w-12 border border-primary/30">
                                                    <AvatarImage src={t.image} alt={t.name} className="object-cover" />
                                                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h4 className="text-sm font-bold text-text-main dark:text-white">{t.name}</h4>
                                                    <span className="text-xs text-text-muted">{t.location}</span>
                                                </div>
                                            </div>
                                            <h3 className="mb-3 text-lg font-bold text-text-main transition-colors group-hover:text-primary dark:text-white">
                                                {t.title}
                                            </h3>
                                            <p className="mb-6 flex-1 text-sm leading-relaxed text-text-muted dark:text-gray-300">
                                                {t.story}
                                            </p>
                                            <Link
                                                href="#"
                                                className="mt-auto text-sm font-bold text-primary transition-colors hover:text-primary-dark"
                                            >
                                                Read Full Story
                                            </Link>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
                        <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
                    </Carousel>
                </div>

                <div className="mt-10 flex justify-center">
                    <Link
                        href="#"
                        className="flex items-center gap-1 font-bold text-primary transition-all hover:gap-2"
                    >
                        Read All Stories <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
