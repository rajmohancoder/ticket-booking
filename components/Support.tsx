import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, HeartHandshake, ArrowRight } from "lucide-react"

export function Support() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-10 md:py-24" id="contact">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                <div>
                    <h2 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem
                            value="item-1"
                            className="rounded-lg border border-gray-200 bg-surface-light px-5 dark:border-gray-800 dark:bg-surface-dark"
                        >
                            <AccordionTrigger className="font-bold text-text-main hover:no-underline dark:text-white">
                                What are the Darshan timings?
                            </AccordionTrigger>
                            <AccordionContent className="leading-relaxed text-text-muted dark:text-gray-400">
                                The temple is open daily from 5:30 AM to 12:30 PM and 4:00 PM to 9:00 PM. Special
                                Darshan timings may vary during festival days.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value="item-2"
                            className="rounded-lg border border-gray-200 bg-surface-light px-5 dark:border-gray-800 dark:bg-surface-dark"
                        >
                            <AccordionTrigger className="font-bold text-text-main hover:no-underline dark:text-white">
                                Is there a dress code for entry?
                            </AccordionTrigger>
                            <AccordionContent className="leading-relaxed text-text-muted dark:text-gray-400">
                                Yes, traditional attire is requested. Men are encouraged to wear dhotis or trousers,
                                and women to wear sarees or churidars. Shorts and sleeveless tops are not permitted.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value="item-3"
                            className="rounded-lg border border-gray-200 bg-surface-light px-5 dark:border-gray-800 dark:bg-surface-dark"
                        >
                            <AccordionTrigger className="font-bold text-text-main hover:no-underline dark:text-white">
                                How do I receive my booked tickets?
                            </AccordionTrigger>
                            <AccordionContent className="leading-relaxed text-text-muted dark:text-gray-400">
                                Once your payment is confirmed, e-tickets will be sent to your registered email
                                address and mobile number via SMS. You can also view them in the &apos;My
                                Bookings&apos; section.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value="item-4"
                            className="rounded-lg border border-gray-200 bg-surface-light px-5 dark:border-gray-800 dark:bg-surface-dark"
                        >
                            <AccordionTrigger className="font-bold text-text-main hover:no-underline dark:text-white">
                                Are cameras allowed inside?
                            </AccordionTrigger>
                            <AccordionContent className="leading-relaxed text-text-muted dark:text-gray-400">
                                Photography is permitted in the outer praharams (corridors). However, photography is
                                strictly prohibited inside the main sanctum sanctorum.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value="item-5"
                            className="rounded-lg border border-gray-200 bg-surface-light px-5 dark:border-gray-800 dark:bg-surface-dark"
                        >
                            <AccordionTrigger className="font-bold text-text-main hover:no-underline dark:text-white">
                                Can I cancel or reschedule my booked tickets?
                            </AccordionTrigger>
                            <AccordionContent className="leading-relaxed text-text-muted dark:text-gray-400">
                                Tickets can be cancelled up to 24 hours before the scheduled time for a 75% refund.
                                Rescheduling is permitted once, subject to availability, at least 12 hours in advance.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value="item-6"
                            className="rounded-lg border border-gray-200 bg-surface-light px-5 dark:border-gray-800 dark:bg-surface-dark"
                        >
                            <AccordionTrigger className="font-bold text-text-main hover:no-underline dark:text-white">
                                Are there any specific guidelines for performing special Archanas?
                            </AccordionTrigger>
                            <AccordionContent className="leading-relaxed text-text-muted dark:text-gray-400">
                                For special Archanas and Poojas, devotees are requested to bring their own prasadam
                                materials or purchase them from the temple counter. Detailed guidelines for each
                                ritual are available at the information desk.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value="item-7"
                            className="rounded-lg border border-gray-200 bg-surface-light px-5 dark:border-gray-800 dark:bg-surface-dark"
                        >
                            <AccordionTrigger className="font-bold text-text-main hover:no-underline dark:text-white">
                                Are donations tax-exempt and how can I contribute?
                            </AccordionTrigger>
                            <AccordionContent className="leading-relaxed text-text-muted dark:text-gray-400">
                                Yes, all donations to the temple are exempt from tax under Section 80G. You can
                                contribute online via our secure portal or at the temple office. Specific
                                contributions for Annadhanam or festivals are also welcomed.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value="item-8"
                            className="rounded-lg border border-gray-200 bg-surface-light px-5 dark:border-gray-800 dark:bg-surface-dark"
                        >
                            <AccordionTrigger className="font-bold text-text-main hover:no-underline dark:text-white">
                                What are the facilities for parking, accommodation, and food near the temple?
                            </AccordionTrigger>
                            <AccordionContent className="leading-relaxed text-text-muted dark:text-gray-400">
                                Dedicated free parking is available for devotees. For accommodation, we offer
                                basic cottages (booking required in advance) and there are several hotels within
                                walking distance. The temple Annadhanam hall provides meals daily between 12:00 PM
                                and 2:00 PM, and many vegetarian restaurants are located nearby.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value="item-9"
                            className="rounded-lg border border-gray-200 bg-surface-light px-5 dark:border-gray-800 dark:bg-surface-dark"
                        >
                            <AccordionTrigger className="font-bold text-text-main hover:no-underline dark:text-white">
                                Are there any sponsorship opportunities for temple events?
                            </AccordionTrigger>
                            <AccordionContent className="leading-relaxed text-text-muted dark:text-gray-400">
                                Yes, we offer various sponsorship opportunities for festivals, Vidyarambham, and
                                special Pooja ceremonies. Sponsors can choose to support floral decorations,
                                Annadhanam, or digital broadcasting of events. Please visit the temple office or
                                contact us via email for detailed sponsorship packages.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-[#1f1a12] md:p-10">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl"></div>
                    <div className="pointer-events-none absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl"></div>
                    <div className="relative z-10 space-y-8">
                        <div>
                            <div className="mb-6 flex items-center gap-5">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <HeartHandshake className="h-10 w-10" />
                                </div>
                                <h2 className="text-3xl font-bold text-text-main dark:text-white">
                                    Volunteer with Us
                                </h2>
                            </div>
                            <p className="mb-8 text-lg leading-relaxed text-text-muted dark:text-gray-400">
                                &quot;Service to mankind is service to God.&quot; <br className="hidden md:block" />
                                Join our dedicated community of Sevadars. We invite devotees to participate in
                                temple activities and experience the joy of selfless service.
                            </p>
                            <div className="mb-8 space-y-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                                    <span className="text-sm text-text-main dark:text-gray-200 md:text-base">
                                        Assist in festival crowd management
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                                    <span className="text-sm text-text-main dark:text-gray-200 md:text-base">
                                        Support Annadhanam distribution
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                                    <span className="text-sm text-text-main dark:text-gray-200 md:text-base">
                                        Help maintain temple cleanliness & decor
                                    </span>
                                </div>
                            </div>
                            <Button className="group flex w-full items-center justify-center gap-2 bg-primary py-6 text-lg font-bold text-black shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark">
                                Join Us Today
                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </div>

                        <div className="border-t border-gray-100 pt-8 dark:border-gray-800">
                            <div className="mb-6 flex items-center gap-5">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Heart className="h-10 w-10" />
                                </div>
                                <h2 className="text-3xl font-bold text-text-main dark:text-white">
                                    Support Our Cause
                                </h2>
                            </div>
                            <p className="mb-6 text-base leading-relaxed text-text-muted dark:text-gray-400">
                                Contribute to the temple&apos;s growth and community services. Your donation helps
                                us sustain our spiritual and charitable missions.
                            </p>
                            <Button
                                variant="outline"
                                className="flex w-full items-center justify-center gap-2 border-2 border-primary bg-transparent py-6 text-lg font-bold text-primary transition-all hover:bg-primary hover:text-black"
                            >
                                Donate Now
                                <Heart className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
