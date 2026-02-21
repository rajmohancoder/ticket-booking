import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const events = [
    {
        title: "Thai Poosam Festival",
        date: "Jan 25",
        description: "A grand celebration dedicated to Lord Muruga, marking the victory of good over evil.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0w94-dy5G4Xp1u36ndP55I-IYuUpZShxaDb-33s_nsxydcjqZymO7sNdVD1Bl68lWjyNt0YuonoVWFlsVJppbCWE-8cuVomddj7sI0MUw9qf9_IeeW4irTjXdyCMCBTfWaIb_E6nDSwIGgQp0GHcz8VCGlw2lOo0O77riXQ67MjKq8ANCwyKeeD79A6OF9mma7Xe4fNJaQ1nJkq50KsEp9gFtd6aEGgaE5fQo8zo4Z-AZZGc295rJ3CPsOEX833ymkni87TJgl04",
    },
    {
        title: "Weekly Abhishekam",
        date: "Fri Weekly",
        description: "Special rituals performed every Friday with milk, honey, and sandalwood paste.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOM6q6aB7iuREOVUOlqR0J6TtE8sM0uj7RMWL4AKKht360vn1ijk_ZStFqh1IPbn6Am8bLlaNv3LDYLIIGb9xTRXqU794McVa3Zv5nQ_CW1wcfip0lj1-k9TS2CfsRSblhFnwmOUUedv8HzD5anJCVivlyNVtiDmN8uj1ca5rrrBxdRhexSgWMtwlAe_gsnlJU7Z_W1nYpDICywHr8WwfalL9XSpHekWSnB7SL6X6I1I-UXNy_IBuyzz0bfQld2srB31hydgHxu7w",
    },
    {
        title: "Panguni Uthiram",
        date: "Mar 24",
        description: "Celebrating the divine marriage of Lord Muruga and Deivanai. A day of unity.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv-k3dWANnMQ_L-wpX3xRen1BI2GVPSOkjyKSP1xLFQ1WfPcmwZyAmL2Co4P3Kwu37vqKpl6NfkHmiFoZAJDBIh6tG-3Po6xUDigwE9PG2cd_reHsui7zsXKvrtIo0acOHYDyUvbojGqXnNlQNVW6RB0YFoxHzvFvMtgu7xCfLHR8RCMq0_hqn0nE1PprWfWybzEQIjrWr-sYP0pvWt9oBFQhjjiO4Rzdqd9qIGiAZmT14o9yKzWhFkYmMR2V8GBvp1tfnM9uXyco",
    },
]

export function Events() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16 md:px-10 md:py-24" id="events">
            <div className="mb-10 flex flex-col items-end justify-between gap-4 md:flex-row">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Upcoming Events</h2>
                    <p className="text-text-muted dark:text-gray-400">Join us for sacred festivals and special poojas.</p>
                </div>
                <Link
                    href="#"
                    className="group flex items-center gap-1 font-bold text-primary transition-all"
                >
                    View All Events{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event, index) => (
                    <Card
                        key={index}
                        className="group overflow-hidden border-gray-100 bg-surface-light shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-surface-dark"
                    >
                        <CardHeader className="p-0">
                            <div className="relative aspect-video w-full overflow-hidden bg-gray-200">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url("${event.image}")` }}
                                ></div>
                                <div className="absolute left-3 top-3 rounded bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider dark:bg-black/80">
                                    {event.date}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-5">
                            <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                            <p className="line-clamp-2 text-sm text-text-muted dark:text-gray-400">
                                {event.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
