"use client"

import * as React from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const EVENTS = [
    {
        date: "Jan 25",
        title: "Thai Poosam",
        description: "Grand Chariot Procession",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0w94-dy5G4Xp1u36ndP55I-IYuUpZShxaDb-33s_nsxydcjqZymO7sNdVD1Bl68lWjyNt0YuonoVWFlsVJppbCWE-8cuVomddj7sI0MUw9qf9_IeeW4irTjXdyCMCBTfWaIb_E6nDSwIGgQp0GHcz8VCGlw2lOo0O77riXQ67MjKq8ANCwyKeeD79A6OF9mma7Xe4fNJaQ1nJkq50KsEp9gFtd6aEGgaE5fQo8zo4Z-AZZGc295rJ3CPsOEX833ymkni87TJgl04"
    },
    {
        date: "Every Friday",
        title: "Weekly Abhishekam",
        description: "Special Milk Offering",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOM6q6aB7iuREOVUOlqR0J6TtE8sM0uj7RMWL4AKKht360vn1ijk_ZStFqh1IPbn6Am8bLlaNv3LDYLIIGb9xTRXqU794McVa3Zv5nQ_CW1wcfip0lj1-k9TS2CfsRSblhFnwmOUUedv8HzD5anJCVivlyNVtiDmN8uj1ca5rrrBxdRhexSgWMtwlAe_gsnlJU7Z_W1nYpDICywHr8WwfalL9XSpHekWSnB7SL6X6I1I-UXNy_IBuyzz0bfQld2srB31hydgHxu7w"
    },
    {
        date: "Mar 24",
        title: "Panguni Uthiram",
        description: "Divine Marriage Ceremony",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv-k3dWANnMQ_L-wpX3xRen1BI2GVPSOkjyKSP1xLFQ1WfPcmwZyAmL2Co4P3Kwu37vqKpl6NfkHmiFoZAJDBIh6tG-3Po6xUDigwE9PG2cd_reHsui7zsXKvrtIo0acOHYDyUvbojGqXnNlQNVW6RB0YFoxHzvFvMtgu7xCfLHR8RCMq0_hqn0nE1PprWfWybzEQIjrWr-sYP0pvWt9oBFQhjjiO4Rzdqd9qIGiAZmT14o9yKzWhFkYmMR2V8GBvp1tfnM9uXyco"
    },
    {
        date: "Apr 14",
        title: "Tamil New Year",
        description: "Special Pooja & Feast",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkrl8cFzD_N8CM_LBlCrTwvZXcaSzHZ0WaQeTd3cOdqFx2pfjMWXa-iwpxLoVxhwG1JHU2mTYM54uQQCh45MUSkJSNeJxKS7O4cF1mzSWOBlBs5i04miycrs0amsEzAEngsiFLOrCbp2vsA9TEW3sddkkRcjsIF7CBzCpFSW5ur5xyr2VYKmAR9b7f2yUdVV5ifnZMQVeD8io1EmuTSA4qrZPm5-mHdNfTFj0ei9ebjgvZhgQBTQfzK0rGQOXXhJ4OcomBk0fNPSY"
    },
    {
        date: "May 22",
        title: "Vaikasi Visakam",
        description: "Lord Muruga's Birthday",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        date: "Jun 15",
        title: "Aani Thirumanjanam",
        description: "Celestial Bathing Ritual",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        date: "Jul 21",
        title: "Adi Krithigai",
        description: "Flower Palanquin Festival",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        date: "Nov 07",
        title: "Skanda Sashti",
        description: "Soorasamharam Celebration",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=300&h=300"
    }
]

const RITUALS = [
    { time: "05:30 AM", name: "Suprabhatam", sub: "Waking the Deity" },
    { time: "08:00 AM", name: "Kaala Santhi", sub: "Morning Pooja" },
    { time: "12:00 PM", name: "Uchikalam", sub: "Noon Pooja" },
    { time: "05:30 PM", name: "Sayarakshai", sub: "Evening Pooja" },
    { time: "09:00 PM", name: "Ardha Jamam", sub: "Night Pooja" },
];

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();
const formatDateShort = (date: Date) => date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const formatMonthYear = (date: Date) => date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

const isRitualActive = (ritualTime: string, selectedDate: Date, currentTime: Date) => {
    if (selectedDate.toDateString() !== currentTime.toDateString()) return false;

    const [time, modifier] = ritualTime.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (modifier === 'PM' && hours < 12) hours += 12;
    if (modifier === 'AM' && hours === 12) hours = 0;

    const ritualStart = new Date(currentTime);
    ritualStart.setHours(hours, minutes, 0, 0);

    const ritualEnd = new Date(ritualStart);
    ritualEnd.setHours(ritualStart.getHours() + 1);

    return currentTime >= ritualStart && currentTime < ritualEnd;
};

export default function RitualTimings() {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [viewMode, setViewMode] = React.useState<'daily' | 'monthly'>('daily')
    const [selectedDate, setSelectedDate] = React.useState<Date>(new Date())
    const [displayedMonth, setDisplayedMonth] = React.useState<Date>(new Date())
    const [isLoading, setIsLoading] = React.useState(false)
    const [currentTime, setCurrentTime] = React.useState(new Date())

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % EVENTS.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + EVENTS.length) % EVENTS.length)
    }

    const handleDateClick = (date: Date) => {
        setSelectedDate(date)
        setViewMode('daily')
    }

    const handlePrevMonth = () => {
        setDisplayedMonth(new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() - 1, 1))
    }

    const handleNextMonth = () => {
        setDisplayedMonth(new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() + 1, 1))
    }

    const handleViewDailyToday = () => {
        setIsLoading(true)
        setSelectedDate(new Date())
        setDisplayedMonth(new Date())
        setViewMode('daily')
        setTimeout(() => setIsLoading(false), 800)
    }

    const handleDatePickerSelect = (date: Date | undefined) => {
        if (date) {
            setIsLoading(true)
            setSelectedDate(date)
            setDisplayedMonth(date)
            setTimeout(() => setIsLoading(false), 1000)
        }
    }

    return (
        <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark">
            <Header />
            <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-8 space-y-8 md:px-10">
                {/* Breadcrumb and Title */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-muted">
                            <Link href="/" className="opacity-60 hover:text-primary transition-colors">Home</Link>
                            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                            <span className="text-primary">Ritual Timings</span>
                        </div>
                        <h1 className="text-3xl font-black tracking-tight text-text-main dark:text-white md:text-4xl">
                            Ritual Schedule
                        </h1>
                        <p className="mt-2 max-w-2xl text-text-muted dark:text-gray-400">
                            Daily pooja timings and upcoming auspicious events for the current month.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Popover>
                            <div className="group relative">
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            "flex items-center gap-2 border-gray-200 bg-surface-light font-semibold hover:bg-gray-50 dark:border-gray-700 dark:bg-surface-dark dark:hover:bg-gray-800",
                                            !selectedDate && "text-muted-foreground"
                                        )}
                                    >
                                        <span className="material-symbols-outlined text-lg">calendar_month</span>
                                        {selectedDate ? format(selectedDate, "PPP") : <span>Select Date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <div className="absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 scale-95 rounded-lg bg-gray-900 px-3 py-2 text-center text-[10px] font-bold text-white opacity-0 shadow-xl transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-800 pointer-events-none z-50">
                                    Select a date to view ritual timings
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-gray-900 dark:border-t-gray-800"></div>
                                </div>
                            </div>
                            <PopoverContent className="w-auto p-0" align="end">
                                <Calendar
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={handleDatePickerSelect}
                                    fromDate={new Date()}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <div className="group relative">
                            <Button className="flex items-center gap-2 bg-primary/10 font-bold text-primary-dark hover:bg-primary/20 dark:text-primary">
                                <span className="material-symbols-outlined text-lg">download</span>
                                Download PDF
                            </Button>
                            <div className="absolute bottom-full left-1/2 mb-2 w-48 -translate-x-1/2 scale-95 rounded-lg bg-gray-900 px-3 py-2 text-center text-[10px] font-bold text-white opacity-0 shadow-xl transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 dark:bg-gray-800">
                                Download the ritual timings as a PDF document
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-gray-900 dark:border-t-gray-800"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Status Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-surface-light p-5 shadow-sm dark:border-gray-800 dark:bg-surface-dark">
                        {(() => {
                            const hours = currentTime.getHours();
                            const mins = currentTime.getMinutes();
                            const timeVal = hours * 60 + mins;
                            const isOpen = (timeVal >= 300 && timeVal <= 750) || (timeVal >= 990 && timeVal <= 1290); // 5am-12:30pm, 4:30pm-9:30pm
                            return (
                                <>
                                    <div className={cn(
                                        "flex h-12 w-12 items-center justify-center rounded-full transition-colors",
                                        isOpen ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                                    )}>
                                        <span className="material-symbols-outlined text-2xl">{isOpen ? "door_open" : "door_front"}</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Temple Status</p>
                                        <h3 className="text-lg font-bold text-text-main dark:text-white">{isOpen ? "Open Now" : "Closed"}</h3>
                                        <p className="text-xs text-gray-500">{isOpen ? (timeVal < 750 ? "Closes at 12:30 PM" : "Closes at 09:30 PM") : "Opens at 05:00 AM"}</p>
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                    <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-surface-light p-5 shadow-sm dark:border-gray-800 dark:bg-surface-dark">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-2xl">self_improvement</span>
                        </div>
                        {(() => {
                            const now = currentTime;
                            const currentRitual = RITUALS.find(r => isRitualActive(r.time, new Date(), now));
                            const nextRitual = RITUALS.find(r => {
                                const [t, mod] = r.time.split(' ');
                                let [h, m] = t.split(':').map(Number);
                                if (mod === 'PM' && h < 12) h += 12;
                                if (mod === 'AM' && h === 12) h = 0;
                                const ritualTime = h * 60 + m;
                                return ritualTime > (now.getHours() * 60 + now.getMinutes());
                            }) || RITUALS[0];

                            return (
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-text-muted">{currentRitual ? "Currently Performing" : "Next Pooja"}</p>
                                    <h3 className="text-lg font-bold text-text-main dark:text-white">{currentRitual ? currentRitual.name : nextRitual.name}</h3>
                                    <p className="text-xs text-gray-500">{currentRitual ? "Started at " + currentRitual.time : "At " + nextRitual.time}</p>
                                </div>
                            );
                        })()}
                    </div>
                    <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-surface-light p-5 shadow-sm dark:border-gray-800 dark:bg-surface-dark">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                            <span className="material-symbols-outlined text-2xl">today</span>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Today's Date & Time</p>
                            <h3 className="text-lg font-bold text-text-main dark:text-white">{formatDateShort(currentTime)}</h3>
                            <p className="text-sm font-mono font-bold text-primary tabular-nums">
                                {currentTime.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    {isLoading && (
                        <div className="absolute inset-0 z-50 flex items-center justify-center rounded-xl bg-white/60 backdrop-blur-[2px] dark:bg-black/40">
                            <div className="flex flex-col items-center gap-3">
                                <div className="size-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                                <p className="text-xs font-bold text-primary-dark dark:text-primary animate-pulse">Fetching Ritual Timings...</p>
                            </div>
                        </div>
                    )}

                    {viewMode === 'daily' ? (
                        /* Daily Schedule Table */
                        <div className={`overflow-hidden rounded-xl border border-gray-100 bg-surface-light shadow-sm dark:border-gray-800 dark:bg-surface-dark transition-opacity duration-300 ${isLoading ? 'opacity-30' : 'opacity-100'}`}>
                            <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-6 py-4 dark:border-gray-800 dark:bg-gray-800/20">
                                <h2 className="text-lg font-bold text-text-main dark:text-white">Daily Schedule</h2>
                                <div className="flex gap-2">
                                    <span className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-black/20 dark:text-gray-400">
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span> Live
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="border-b border-gray-100 bg-gray-50/50 text-xs uppercase text-gray-500 dark:border-gray-800 dark:bg-gray-800/50 dark:text-gray-400">
                                        <tr>
                                            <th className="px-6 py-4 font-bold" scope="col">Date</th>
                                            <th className="px-6 py-4 font-bold" scope="col">Time</th>
                                            <th className="px-6 py-4 font-bold" scope="col">Rituals Performed</th>
                                            <th className="px-6 py-4 font-bold" scope="col">Special Events</th>
                                            <th className="px-6 py-4 font-bold text-right" scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-text-main dark:divide-gray-800 dark:text-gray-300">
                                        {/* Suprabhatam */}
                                        <tr className="bg-white transition-colors hover:bg-gray-50 dark:bg-surface-dark dark:hover:bg-gray-800/50">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium text-text-main dark:text-white">{formatDateShort(selectedDate)}</td>
                                            <td className="px-6 py-4">
                                                <div className={cn(
                                                    "flex items-center gap-2 transition-colors duration-300",
                                                    isRitualActive("05:30 AM", selectedDate, currentTime) ? "text-green-600 dark:text-green-400 font-bold" : "text-text-main dark:text-gray-300"
                                                )}>
                                                    <span className={cn(
                                                        "material-symbols-outlined text-sm",
                                                        isRitualActive("05:30 AM", selectedDate, currentTime) ? "text-green-500" : "text-text-muted"
                                                    )}>schedule</span>
                                                    05:30 AM
                                                    {isRitualActive("05:30 AM", selectedDate, currentTime) && (
                                                        <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300 animate-pulse">
                                                            Active
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="block font-semibold">Suprabhatam</span>
                                                <span className="text-xs text-text-muted">Waking the Deity</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                                                    Daily Routine
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-gray-400 transition-colors hover:text-primary">
                                                    <span className="material-symbols-outlined">info</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {/* Kaala Santhi */}
                                        <tr className="bg-white transition-colors hover:bg-gray-50 dark:bg-surface-dark dark:hover:bg-gray-800/50">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium text-text-main dark:text-white">{formatDateShort(selectedDate)}</td>
                                            <td className="px-6 py-4">
                                                <div className={cn(
                                                    "flex items-center gap-2 transition-colors duration-300",
                                                    isRitualActive("08:00 AM", selectedDate, currentTime) ? "text-green-600 dark:text-green-400 font-bold" : "text-text-main dark:text-gray-300"
                                                )}>
                                                    <span className={cn(
                                                        "material-symbols-outlined text-sm",
                                                        isRitualActive("08:00 AM", selectedDate, currentTime) ? "text-green-500" : "text-text-muted"
                                                    )}>schedule</span>
                                                    08:00 AM
                                                    {isRitualActive("08:00 AM", selectedDate, currentTime) && (
                                                        <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300 animate-pulse">
                                                            Active
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={cn("block font-semibold", isRitualActive("08:00 AM", selectedDate, currentTime) && "text-green-600 dark:text-green-400")}>Kaala Santhi</span>
                                                <span className="text-xs text-text-muted">Morning Pooja</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center rounded bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                                    Milk Abhishekam
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-gray-400 transition-colors hover:text-primary">
                                                    <span className="material-symbols-outlined">info</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {/* Uchikalam - active */}
                                        <tr className="border-l-4 border-l-primary bg-white transition-colors hover:bg-gray-50 dark:bg-surface-dark dark:hover:bg-gray-800/50">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium text-text-main dark:text-white">{formatDateShort(selectedDate)}</td>
                                            <td className="px-6 py-4">
                                                <div className={cn(
                                                    "flex items-center gap-2 transition-colors duration-300 font-bold",
                                                    isRitualActive("12:00 PM", selectedDate, currentTime) ? "text-green-600 dark:text-green-400" : "text-primary-dark dark:text-primary"
                                                )}>
                                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                                    12:00 PM
                                                    {isRitualActive("12:00 PM", selectedDate, currentTime) && (
                                                        <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300 animate-pulse">
                                                            Active
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={cn("block font-semibold", isRitualActive("12:00 PM", selectedDate, currentTime) ? "text-green-600 dark:text-green-400" : "")}>Uchikalam</span>
                                                <span className="text-xs text-text-muted">Noon Pooja</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary-dark dark:text-primary">
                                                    Deeparadhana
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-gray-400 transition-colors hover:text-primary">
                                                    <span className="material-symbols-outlined">info</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {/* Sayarakshai */}
                                        <tr className="bg-white transition-colors hover:bg-gray-50 dark:bg-surface-dark dark:hover:bg-gray-800/50">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium text-text-main dark:text-white">{formatDateShort(selectedDate)}</td>
                                            <td className="px-6 py-4">
                                                <div className={cn(
                                                    "flex items-center gap-2 transition-colors duration-300",
                                                    isRitualActive("05:30 PM", selectedDate, currentTime) ? "text-green-600 dark:text-green-400 font-bold" : "text-text-main dark:text-gray-300"
                                                )}>
                                                    <span className={cn(
                                                        "material-symbols-outlined text-sm",
                                                        isRitualActive("05:30 PM", selectedDate, currentTime) ? "text-green-500" : "text-text-muted"
                                                    )}>schedule</span>
                                                    05:30 PM
                                                    {isRitualActive("05:30 PM", selectedDate, currentTime) && (
                                                        <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300 animate-pulse">
                                                            Active
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={cn("block font-semibold", isRitualActive("05:30 PM", selectedDate, currentTime) && "text-green-600 dark:text-green-400")}>Sayarakshai</span>
                                                <span className="text-xs text-text-muted">Evening Pooja</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center rounded bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                                                    Golden Chariot
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-gray-400 transition-colors hover:text-primary">
                                                    <span className="material-symbols-outlined">info</span>
                                                </button>
                                            </td>
                                        </tr>
                                        {/* Ardha Jamam */}
                                        <tr className="bg-white transition-colors hover:bg-gray-50 dark:bg-surface-dark dark:hover:bg-gray-800/50">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium text-text-main dark:text-white">{formatDateShort(selectedDate)}</td>
                                            <td className="px-6 py-4">
                                                <div className={cn(
                                                    "flex items-center gap-2 transition-colors duration-300",
                                                    isRitualActive("09:00 PM", selectedDate, currentTime) ? "text-green-600 dark:text-green-400 font-bold" : "text-text-main dark:text-gray-300"
                                                )}>
                                                    <span className={cn(
                                                        "material-symbols-outlined text-sm",
                                                        isRitualActive("09:00 PM", selectedDate, currentTime) ? "text-green-500" : "text-text-muted"
                                                    )}>schedule</span>
                                                    09:00 PM
                                                    {isRitualActive("09:00 PM", selectedDate, currentTime) && (
                                                        <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-300 animate-pulse">
                                                            Active
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={cn("block font-semibold", isRitualActive("09:00 PM", selectedDate, currentTime) && "text-green-600 dark:text-green-400")}>Ardha Jamam</span>
                                                <span className="text-xs text-text-muted">Night Pooja</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                                                    Resting Ceremony
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-gray-400 transition-colors hover:text-primary">
                                                    <span className="material-symbols-outlined">info</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-center border-t border-gray-100 bg-gray-50/50 px-6 py-4 dark:border-gray-800 dark:bg-gray-800/20">
                                <button
                                    onClick={() => setViewMode('monthly')}
                                    className="flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                                >
                                    View Full Month Schedule <span className="material-symbols-outlined text-base">expand_more</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Monthly Calendar View */
                        <div className={`bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col transition-opacity duration-300 ${isLoading ? 'opacity-30' : 'opacity-100'}`}>
                            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center bg-gray-50/50 dark:bg-gray-800/20 gap-4">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-lg font-bold text-text-main dark:text-white">Monthly Schedule</h2>
                                    <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-black/20 border border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-600 dark:text-gray-400">
                                        <span className="size-2 rounded-full bg-green-500 animate-pulse"></span> Live
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center bg-white dark:bg-black/20 rounded-lg border border-gray-200 dark:border-gray-700 p-1 shadow-sm">
                                        <button
                                            onClick={handlePrevMonth}
                                            className="size-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors text-gray-500 dark:text-gray-400"
                                        >
                                            <span className="material-symbols-outlined text-xl">chevron_left</span>
                                        </button>
                                        <span className="text-sm font-bold px-4 text-text-main dark:text-white min-w-[150px] text-center">{formatMonthYear(displayedMonth)}</span>
                                        <button
                                            onClick={handleNextMonth}
                                            className="size-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors text-gray-500 dark:text-gray-400"
                                        >
                                            <span className="material-symbols-outlined text-xl">chevron_right</span>
                                        </button>
                                    </div>
                                    <button
                                        onClick={handleViewDailyToday}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-black text-xs font-bold hover:bg-primary-dark transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-sm">view_day</span>
                                        View Daily Schedule
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <div className="min-w-[800px]">
                                    <div className="grid grid-cols-7 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
                                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                            <div key={day} className="py-3 text-center text-xs font-bold uppercase text-text-muted tracking-wider">{day}</div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-7 auto-rows-fr bg-gray-100 dark:bg-gray-800 gap-px border-b border-gray-100 dark:border-gray-800">
                                        {/* Empty cells for leading days of the month */}
                                        {Array.from({ length: getFirstDayOfMonth(displayedMonth.getFullYear(), displayedMonth.getMonth()) }).map((_, i) => (
                                            <div key={`empty-lead-${i}`} className="bg-gray-50/30 dark:bg-gray-800/20 min-h-[140px]"></div>
                                        ))}

                                        {Array.from({ length: getDaysInMonth(displayedMonth.getFullYear(), displayedMonth.getMonth()) }).map((_, i) => {
                                            const day = i + 1;
                                            const date = new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), day);
                                            const isToday = date.toDateString() === new Date().toDateString();
                                            const special = day === 5 ? "Pradosham" : day === 13 ? "New Moon" : null;
                                            const rituals = isToday ? [
                                                "05:30 AM Suprabhatam",
                                                "08:00 AM Kaala Santhi",
                                                "12:00 PM Uchikalam",
                                                "05:30 PM Sayarakshai",
                                                "09:00 PM Ardha Jamam"
                                            ] : null;

                                            return (
                                                <div
                                                    key={day}
                                                    onClick={() => handleDateClick(date)}
                                                    className={`bg-surface-light dark:bg-surface-dark min-h-[140px] p-2 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors flex flex-col gap-1 group relative cursor-pointer ${isToday ? 'bg-primary/5 dark:bg-primary/5 ring-1 ring-primary inset z-10' : ''}`}
                                                >
                                                    <span className={`text-xs font-bold transition-colors mb-1 flex justify-between items-center ${isToday ? 'text-primary-dark dark:text-primary' : 'text-gray-400 group-hover:text-primary'}`}>
                                                        {day}
                                                        {isToday && (
                                                            <span className="text-[9px] bg-primary text-white px-1.5 py-0.5 rounded uppercase tracking-wide">Today</span>
                                                        )}
                                                    </span>

                                                    <div className={`space-y-0.5 ${!isToday ? 'opacity-60 group-hover:opacity-100 transition-opacity' : ''}`}>
                                                        {rituals ? (
                                                            rituals.map((ritual: string, idx: number) => {
                                                                const [time, modifier, ...nameParts] = ritual.split(' ')
                                                                const timeStr = `${time} ${modifier}`
                                                                const name = nameParts.join(' ')
                                                                const isActive = isRitualActive(timeStr, date, currentTime)

                                                                return (
                                                                    <div key={idx} className={cn(
                                                                        "flex items-center gap-1.5 text-[10px] transition-colors duration-300",
                                                                        isActive ? "text-green-600 dark:text-green-400 font-bold" : (isToday ? "text-gray-900 dark:text-white font-medium" : "text-gray-600 dark:text-gray-400")
                                                                    )}>
                                                                        <span className={cn(
                                                                            "size-1 rounded-full shrink-0",
                                                                            isActive ? "bg-green-500 size-1.5 animate-pulse" : "bg-primary"
                                                                        )}></span>
                                                                        <span className="font-bold w-10">{timeStr}</span>
                                                                        <span>{name}</span>
                                                                    </div>
                                                                )
                                                            })
                                                        ) : (
                                                            <div className="flex items-center gap-1.5 text-[10px] text-gray-500 dark:text-gray-400 font-medium bg-gray-50 dark:bg-white/5 rounded px-1 py-0.5">5 Daily Rituals</div>
                                                        )}
                                                    </div>

                                                    {special && (
                                                        <div className={`mt-1 px-1.5 py-1 rounded border ${special === 'Pradosham' ? 'bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800/30' : 'bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800/30'}`}>
                                                            <p className={`text-[9px] font-bold ${special === 'Pradosham' ? 'text-purple-700 dark:text-purple-300' : 'text-orange-700 dark:text-orange-300'}`}>{special}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}

                                        {/* Trailing empty cells to complete the grid */}
                                        {Array.from({ length: (7 - ((getFirstDayOfMonth(displayedMonth.getFullYear(), displayedMonth.getMonth()) + getDaysInMonth(displayedMonth.getFullYear(), displayedMonth.getMonth())) % 7)) % 7 }).map((_, i) => (
                                            <div key={`empty-trail-${i}`} className="bg-gray-50/30 dark:bg-gray-800/20 min-h-[140px]"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Special Events Slider Section */}
                <div className="space-y-4">
                    <div className="flex items-end justify-between px-1">
                        <h2 className="flex items-center gap-2 text-xl font-bold text-text-main dark:text-white">
                            <span className="h-6 w-1 rounded-full bg-primary"></span>
                            Upcoming Special Events
                        </h2>
                        <div className="flex gap-2">
                            <button
                                onClick={prevSlide}
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                            >
                                <span className="material-symbols-outlined text-sm">chevron_left</span>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                            >
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                            </button>
                        </div>
                    </div>

                    {/* Controlled slider container */}
                    <div className="relative overflow-hidden">
                        <div
                            className="flex gap-4 transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(calc(-${currentIndex * 100}% / 3))`
                            }}
                        >
                            {EVENTS.map((event, index) => (
                                <div
                                    key={index}
                                    className="group flex min-w-[calc(100%/1-16px)] sm:min-w-[calc(100%/2-16px)] lg:min-w-[calc(100%/3-16px)] items-center gap-4 rounded-xl border border-gray-100 bg-surface-light p-3 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-surface-dark"
                                >
                                    <div
                                        className="h-16 w-16 shrink-0 rounded-lg bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url("${event.image}")` }}
                                    ></div>
                                    <div className="min-w-0 flex-1">
                                        <div className="mb-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">{event.date}</div>
                                        <h3 className="truncate text-sm font-bold text-text-main dark:text-white">{event.title}</h3>
                                        <p className="truncate text-xs text-text-muted mt-1">{event.description}</p>
                                    </div>
                                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-background-light text-gray-400 transition-colors group-hover:text-primary dark:bg-background-dark">
                                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

