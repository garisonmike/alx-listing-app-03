# ALX Listing App - Milestone 4: Booking Detail Page

This is a fully functional Next.js application implementing a booking detail page with TypeScript and Tailwind CSS.

## 🚀 Features

- **Booking Form Component**: Collects contact details, payment information, and billing address
- **Order Summary Component**: Displays booking details with price breakdown
- **Cancellation Policy**: Shows cancellation terms and ground rules
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **TypeScript Support**: Full type safety across all components
- **Next.js Pages Router**: Server-side rendering capabilities

## 📁 Project Structure

```
alx-listing-app-03/
├── src/
│   ├── components/
│   │   └── booking/
│   │       ├── BookingForm.tsx
│   │       ├── OrderSummary.tsx
│   │       └── CancellationPolicy.tsx
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   └── booking/
│   │       └── index.tsx
│   └── styles/
│       └── globals.css
├── components/booking/          # Root-level for spec compliance
├── pages/booking/              # Root-level for spec compliance
└── package.json
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
