# Darshan Ticket Booking System

A modern, responsive web application built with Next.js for booking and managing Darshan (temple viewing) tickets. The application provides a seamless user experience for viewing ritual timings and booking tickets.

## Features

- 🎫 **Easy Ticket Booking** - Simple and intuitive interface to book Darshan tickets
- 📅 **Ritual Timings** - View detailed ritual schedules and timings
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- 🌓 **Dark Mode Support** - Built-in dark/light theme toggle
- ⚡ **Fast Performance** - Optimized Next.js application
- 📱 **Mobile Responsive** - Works seamlessly on all devices
- ♿ **Accessible Components** - Built with Radix UI for accessibility

## Tech Stack

- **Frontend Framework**: [Next.js 16.1.1](https://nextjs.org/) with React 19.2.3
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with PostCSS
- **UI Components**: [Radix UI](https://radix-ui.com/) primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Date Handling**: [date-fns](https://date-fns.org/) & [React Day Picker](https://react-day-picker.js.org/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Type Safety**: TypeScript 5
- **Linting**: ESLint 9
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)

## Project Structure

```
ticket-booking/
├── app/                    # Next.js App Router pages and layouts
├── components/            # Reusable React components
├── lib/                   # Utility functions and helpers
├── public/                # Static assets
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
└── .env                   # Environment variables
```

## Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rajmohancoder/ticket-booking.git
cd ticket-booking
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Hero Section Button Text
NEXT_PUBLIC_BOOK_DARSHAN_TEXT="Book Darshan Tickets"
NEXT_PUBLIC_VIEW_RITUAL_TEXT="View Ritual Timings"
```

## Key Components

The application uses Radix UI components including:
- Accordion - For displaying ritual schedules
- Avatar - User profile displays
- Dropdown Menu - Navigation menus
- Navigation Menu - Main site navigation
- Popover - Additional information displays

## Styling

This project uses **Tailwind CSS 4** for styling with:
- Custom component classes via `class-variance-authority`
- Utility-first CSS approach
- Smooth animations via `tw-animate-css`
- Dark mode support through `next-themes`

## Development

The project is configured with:
- **TypeScript** for type safety
- **ESLint** for code quality
- **Tailwind CSS** for rapid UI development
- **Next.js** App Router for file-based routing

## Building for Production

```bash
npm run build
npm start
```

The application will be optimized for production performance.

## Deployment

This application can be easily deployed to various platforms:

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Deployment Options
- Docker containers
- Traditional Node.js hosting
- Netlify
- Other serverless platforms

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev/) - React concepts and APIs
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Styling with Tailwind
- [Radix UI Docs](https://radix-ui.com/docs/primitives/overview/introduction) - Accessible component primitives
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial

## License

This project is private and owned by rajmohancoder.

## Contributing

Feel free to fork this repository and submit pull requests with improvements.

## Support

For questions or issues, please open a GitHub issue in this repository.

---

Made with ❤️ by [rajmohancoder](https://github.com/rajmohancoder)