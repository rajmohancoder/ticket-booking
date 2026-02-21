"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Calendar as ShadcnCalendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { ChevronRight, Calendar, Star, Clock, Plus, Minus, Info, Phone, MapPin, Mail, CheckCircle, AlertCircle, RefreshCcw } from "lucide-react"

export default function TicketBookingPage() {
    const [date, setDate] = useState<Date>()
    const [adultCount, setAdultCount] = useState(1)
    const [childCount, setChildCount] = useState(0)
    const [seniorCount, setSeniorCount] = useState(0)
    const [darshanPrice, setDarshanPrice] = useState(150)
    const [timeSlot, setTimeSlot] = useState("08:00 AM - 10:00 AM")
    const [isModalOpen, setIsModalOpen] = useState(false)

    const totalTickets = adultCount + childCount + seniorCount
    const totalAmount = totalTickets * darshanPrice

    const darshanTypeLabel = darshanPrice === 50 ? "Standard" : darshanPrice === 150 ? "Special Darshan" : "VIP Darshan"

    return (
        <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100 font-sans transition-colors duration-200 relative">
            <Header />

            <main className="flex-grow max-w-7xl mx-auto px-4 md:px-10 py-8 w-full space-y-12">
                {/* Breadcrumbs */}
                <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
                        <span className="opacity-60">Home</span>
                        <ChevronRight className="size-3" />
                        <span className="text-primary">Book Tickets</span>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl group">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0w94-dy5G4Xp1u36ndP55I-IYuUpZShxaDb-33s_nsxydcjqZymO7sNdVD1Bl68lWjyNt0YuonoVWFlsVJppbCWE-8cuVomddj7sI0MUw9qf9_IeeW4irTjXdyCMCBTfWaIb_E6nDSwIGgQp0GHcz8VCGlw2lOo0O77riXQ67MjKq8ANCwyKeeD79A6OF9mma7Xe4fNJaQ1nJkq50KsEp9gFtd6aEGgaE5fQo8zo4Z-AZZGc295rJ3CPsOEX833ymkni87TJgl04')" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    <div className="relative z-10 p-8 md:p-16 flex flex-col items-center justify-center text-center min-h-[400px]">
                        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight drop-shadow-md">
                            Book Your Tickets to the<br />Hindu Temple of God Muruga
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed drop-shadow-sm font-medium">
                            Skip the queues and secure your divine darshan. Select your preferred date, add devotee details, and receive your e-ticket instantly on your device.
                        </p>
                        <a href="#ticket-form" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-primary/30">
                            <span>Proceed to Book</span>
                            <span className="material-symbols-outlined">arrow_downward</span>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 scroll-mt-24" id="ticket-form">
                    {/* Main Form Area */}
                    <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
                            <span className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">confirmation_number</span>
                            </span>
                            <h2 className="text-2xl font-bold text-text-main dark:text-white">Ticket Booking Form</h2>
                        </div>

                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Date Selection */}
                                <div>
                                    <label className="block text-sm font-bold text-text-muted mb-2 uppercase tracking-wide">Select Date</label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full justify-between text-left font-normal py-6 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/20 text-text-main dark:text-white transition-shadow hover:bg-gray-100 dark:hover:bg-black/30 cursor-pointer",
                                                    !date && "text-muted-foreground"
                                                )}
                                            >
                                                {date ? format(date, "PPP") : <span className="text-gray-400">Select Date</span>}
                                                <Calendar className="size-5 text-gray-400" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <ShadcnCalendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                {/* Darshan Type */}
                                <div>
                                    <label className="block text-sm font-bold text-text-muted mb-2 uppercase tracking-wide">Darshan Type</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                            <Star className="size-5" />
                                        </span>
                                        <select
                                            defaultValue="150"
                                            onChange={(e) => setDarshanPrice(Number(e.target.value))}
                                            className="w-full pl-10 pr-10 py-3 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/20 focus:border-primary focus:ring-primary text-text-main dark:text-white transition-shadow appearance-none cursor-pointer"
                                        >
                                            <option value="50">Standard (₹50)</option>
                                            <option value="150">Special Darshan (₹150)</option>
                                            <option value="500">VIP Darshan (₹500)</option>
                                        </select>
                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                            <span className="material-symbols-outlined">expand_more</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Time Slot */}
                            <div className="bg-gray-50 dark:bg-gray-800/30 p-5 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                                <label className="block text-sm font-bold text-text-muted mb-3 uppercase tracking-wide flex items-center gap-2">
                                    Select Time Slot
                                </label>
                                <div className="relative">
                                    <select
                                        defaultValue="08:00 AM - 10:00 AM"
                                        onChange={(e) => setTimeSlot(e.target.value)}
                                        className="w-full pl-4 pr-10 py-4 rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-black/40 focus:border-primary focus:ring-primary text-text-main dark:text-white transition-shadow appearance-none cursor-pointer text-base md:text-lg font-medium shadow-sm"
                                    >
                                        <option value="">Select a time slot</option>
                                        <option value="06:00 AM - 08:00 AM">06:00 AM - 08:00 AM</option>
                                        <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM</option>
                                        <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                                        <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                                        <option value="06:00 PM - 09:00 PM">06:00 PM - 09:00 PM</option>
                                    </select>
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </span>
                                </div>
                                <p className="text-xs text-primary mt-2 font-medium flex items-center gap-1">
                                    <Info className="size-3" />
                                    Available slots update based on selected date and darshan type
                                </p>
                            </div>

                            {/* Ticket Counters */}
                            <div>
                                <label className="block text-sm font-bold text-text-muted mb-4 uppercase tracking-wide">Number of Tickets</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {/* Adult */}
                                    <div className="bg-gray-50 dark:bg-gray-800/40 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-bold text-text-main dark:text-white">Adult</span>
                                            <span className="text-xs font-semibold text-text-muted">12+ yrs</span>
                                        </div>
                                        <div className="flex items-center justify-between bg-white dark:bg-black/20 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                                            <button
                                                type="button"
                                                onClick={() => setAdultCount(Math.max(1, adultCount - 1))}
                                                className="size-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-primary"
                                            >
                                                <Minus className="size-4" />
                                            </button>
                                            <span className="w-8 text-center bg-transparent border-none p-0 text-text-main dark:text-white font-bold">{adultCount}</span>
                                            <button
                                                type="button"
                                                onClick={() => setAdultCount(Math.min(5, adultCount + 1))}
                                                disabled={adultCount >= 5}
                                                className="size-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-primary disabled:opacity-30 disabled:cursor-not-allowed"
                                            >
                                                <Plus className="size-4" />
                                            </button>
                                        </div>
                                        {adultCount >= 5 && <p className="text-[10px] text-red-500 mt-1 font-medium">Max 5 tickets</p>}
                                    </div>
                                    {/* Child */}
                                    <div className="bg-gray-50 dark:bg-gray-800/40 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-bold text-text-main dark:text-white">Child</span>
                                            <span className="text-xs font-semibold text-text-muted">5-11 yrs</span>
                                        </div>
                                        <div className="flex items-center justify-between bg-white dark:bg-black/20 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                                            <button
                                                type="button"
                                                onClick={() => setChildCount(Math.max(0, childCount - 1))}
                                                className="size-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-primary"
                                            >
                                                <Minus className="size-4" />
                                            </button>
                                            <span className="w-8 text-center bg-transparent border-none p-0 text-text-main dark:text-white font-bold">{childCount}</span>
                                            <button
                                                type="button"
                                                onClick={() => setChildCount(Math.min(5, childCount + 1))}
                                                disabled={childCount >= 5}
                                                className="size-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-primary disabled:opacity-30 disabled:cursor-not-allowed"
                                            >
                                                <Plus className="size-4" />
                                            </button>
                                        </div>
                                        {childCount >= 5 && <p className="text-[10px] text-red-500 mt-1 font-medium">Max 5 tickets</p>}
                                    </div>
                                    {/* Senior */}
                                    <div className="bg-gray-50 dark:bg-gray-800/40 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-bold text-text-main dark:text-white">Senior</span>
                                            <span className="text-xs font-semibold text-text-muted">60+ yrs</span>
                                        </div>
                                        <div className="flex items-center justify-between bg-white dark:bg-black/20 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                                            <button
                                                type="button"
                                                onClick={() => setSeniorCount(Math.max(0, seniorCount - 1))}
                                                className="size-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-primary"
                                            >
                                                <Minus className="size-4" />
                                            </button>
                                            <span className="w-8 text-center bg-transparent border-none p-0 text-text-main dark:text-white font-bold">{seniorCount}</span>
                                            <button
                                                type="button"
                                                onClick={() => setSeniorCount(Math.min(5, seniorCount + 1))}
                                                disabled={seniorCount >= 5}
                                                className="size-8 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-primary disabled:opacity-30 disabled:cursor-not-allowed"
                                            >
                                                <Plus className="size-4" />
                                            </button>
                                        </div>
                                        {seniorCount >= 5 && <p className="text-[10px] text-red-500 mt-1 font-medium">Max 5 tickets</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Special Requirements */}
                            <div>
                                <label className="block text-sm font-bold text-text-muted mb-2 uppercase tracking-wide">Special Requirements</label>
                                <textarea
                                    className="w-full p-4 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/20 focus:border-primary focus:ring-primary text-text-main dark:text-white transition-shadow"
                                    placeholder="E.g., Wheelchair assistance needed, Senior citizen support..."
                                    rows={3}
                                ></textarea>
                            </div>

                            {/* Payment Section */}
                            <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-indigo-50/50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800/50 gap-4 shadow-inner">
                                <div className="text-center sm:text-left">
                                    <h3 className="text-sm font-bold text-indigo-900/60 dark:text-indigo-300/60 uppercase tracking-widest mb-1">Amount to be Paid</h3>
                                    <p className="text-xs text-text-muted font-medium">Total for {totalTickets} devotee{totalTickets > 1 ? 's' : ''}</p>
                                </div>
                                <div className="flex items-start gap-1">
                                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mt-1">₹</span>
                                    <span className="text-5xl font-black text-indigo-600 dark:text-indigo-400 tabular-nums">{totalAmount}</span>
                                </div>
                            </div>

                            <div className="flex justify-center md:justify-start">
                                <Button
                                    type="button"
                                    onClick={() => {
                                        if (!date) {
                                            alert("Please select a date first.")
                                            return
                                        }
                                        setIsModalOpen(true)
                                    }}
                                    className="w-full md:w-fit py-4 px-8 bg-primary hover:bg-primary-dark text-black font-bold rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                >
                                    Book Now
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/30">
                            <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-4 flex items-center gap-3">
                                <Image
                                    src="/booking-guidelines.png"
                                    alt="Guidelines"
                                    width={32}
                                    height={32}
                                    className="dark:brightness-110"
                                />
                                Booking Guidelines
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-sm text-blue-900 dark:text-blue-200">
                                    <CheckCircle className="size-5 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
                                    <span>Please carry a valid government-issued ID proof during your visit.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-blue-900 dark:text-blue-200">
                                    <CheckCircle className="size-5 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
                                    <span>Dress code is strictly traditional. Shorts and sleeveless attire are not permitted.</span>
                                </li>
                                <li className="flex gap-3 text-sm text-blue-900 dark:text-blue-200">
                                    <CheckCircle className="size-5 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
                                    <span>Electronic gadgets like mobile phones and cameras are prohibited inside the sanctum.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <h3 className="font-bold text-text-main dark:text-white mb-2">Need Help?</h3>
                            <p className="text-sm text-text-muted mb-4">Contact our temple office for assistance with booking.</p>
                            <a href="tel:+919842158964" className="flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                                <Phone className="size-4" />
                                +91 98421 58964
                            </a>
                        </div>
                    </div>
                </div>

                {/* Policies & FAQ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Booking Policies */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-text-main dark:text-white flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                            Booking Policies
                        </h2>
                        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="size-10 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-500 shrink-0">
                                        <AlertCircle className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-text-main dark:text-white mb-1">Cancellation Policy</h3>
                                        <p className="text-sm text-text-muted leading-relaxed">
                                            Tickets can be cancelled up to 24 hours prior to the booked slot. A cancellation fee of ₹50 per ticket applies. No cancellations allowed on the day of visit.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>
                                <div className="flex gap-4">
                                    <div className="size-10 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 shrink-0">
                                        <RefreshCcw className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-text-main dark:text-white mb-1">Refund Process</h3>
                                        <p className="text-sm text-text-muted leading-relaxed">
                                            Approved refunds will be credited back to the original payment source within 5-7 working days.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-text-main dark:text-white flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                            Frequently Asked Questions
                        </h2>
                        <Accordion type="single" collapsible className="space-y-3">
                            <AccordionItem value="item-1" className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm px-5 transition-colors overflow-hidden">
                                <AccordionTrigger className="font-bold text-text-main dark:text-white hover:no-underline py-5">
                                    Is there an entry fee for general darshan?
                                </AccordionTrigger>
                                <AccordionContent className="text-text-muted text-sm leading-relaxed pb-5 border-t border-gray-50 dark:border-gray-800 pt-3">
                                    General Dharma Darshan is free for all devotees. This booking page is for special darshan queues which allow for a quicker entry.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm px-5 transition-colors overflow-hidden">
                                <AccordionTrigger className="font-bold text-text-main dark:text-white hover:no-underline py-5">
                                    Can I reschedule my booking?
                                </AccordionTrigger>
                                <AccordionContent className="text-text-muted text-sm leading-relaxed pb-5 border-t border-gray-50 dark:border-gray-800 pt-3">
                                    Rescheduling is permitted once per booking, subject to availability, at least 48 hours before the scheduled time.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm px-5 transition-colors overflow-hidden">
                                <AccordionTrigger className="font-bold text-text-main dark:text-white hover:no-underline py-5">
                                    Is parking facility available?
                                </AccordionTrigger>
                                <AccordionContent className="text-text-muted text-sm leading-relaxed pb-5 border-t border-gray-50 dark:border-gray-800 pt-3">
                                    Yes, there is a designated parking area near the North Tower entrance. Parking fees apply.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </main>

            <Footer />

            {/* Confirmation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
                    <div className="relative bg-white dark:bg-gray-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                        <div className="bg-primary p-6 text-black flex justify-between items-center">
                            <h2 className="text-xl font-bold uppercase tracking-tight">Confirm Your Booking</h2>
                            <button onClick={() => setIsModalOpen(false)} className="hover:bg-black/10 rounded-full p-1 transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <div className="p-8 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 text-sm">
                                <div className="text-text-muted font-medium uppercase tracking-wider text-[10px]">Date of Visit</div>
                                <div className="text-text-main dark:text-white font-bold text-right">{date ? format(date, "PPP") : "-"}</div>

                                <div className="text-text-muted font-medium uppercase tracking-wider text-[10px]">Darshan Type</div>
                                <div className="text-text-main dark:text-white font-bold text-right">{darshanTypeLabel}</div>

                                <div className="text-text-muted font-medium uppercase tracking-wider text-[10px]">Time Slot</div>
                                <div className="text-text-main dark:text-white font-bold text-right">{timeSlot}</div>

                                <div className="col-span-2 h-px bg-gray-100 dark:bg-gray-800 my-2"></div>

                                <div className="text-text-muted font-medium uppercase tracking-wider text-[10px]">Ticket Details</div>
                                <div className="text-text-main dark:text-white font-bold text-right">
                                    <div className="flex flex-col items-end gap-1">
                                        {adultCount > 0 && <span>{adultCount} Adult{adultCount > 1 ? 's' : ''}</span>}
                                        {childCount > 0 && <span>{childCount} Child{childCount > 1 ? 'ren' : ''}</span>}
                                        {seniorCount > 0 && <span>{seniorCount} Senior{seniorCount > 1 ? 's' : ''}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/50 flex justify-between items-center">
                                <span className="text-sm font-bold text-indigo-900 dark:text-indigo-300">Total Amount</span>
                                <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">₹{totalAmount}</span>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button
                                    variant="outline"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 py-4 px-8 border-gray-200 dark:border-gray-700 text-text-main dark:text-white font-bold rounded-full transition-all"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onClick={() => {
                                        alert("Booking confirmed successfully!")
                                        setIsModalOpen(false)
                                    }}
                                    className="flex-1 py-4 px-8 bg-primary hover:bg-primary-dark text-black font-bold rounded-full transition-all shadow-lg shadow-primary/20"
                                >
                                    Confirm Booking
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
