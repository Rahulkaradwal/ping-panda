# PingPanda - Real-time SaaS Insights Delivered to Your Inbox

PingPanda is the easiest way to monitor your SaaS. Get instant notifications for sales, new users, or any other critical events sent directly to your Discord.

## Features

- **Real-time Discord Alerts:** Get notified instantly when critical events occur.
- **Buy Once, Use Forever:** No recurring fees; lifetime access.
- **Track Any Event:** Monitor new user signups, successful payments, or any other custom events.
- **Track Any Properties:** Attach custom data to events, such as emails, purchase amounts, and more.
- **Easy Integration:** Seamlessly connect PingPanda with your existing workflows and use our intuitive logging API.
- **Pro Version:** Unlock advanced features with increased event limits and categorized notifications.

## Tech Stack

PingPanda is built with the following technologies:

- **Frontend:** Next.js, React, TailwindCSS, ShadCN
- **Backend:** Prisma, PostgreSQL
- **Authentication:** Clerk.js
- **Forms & Validation:** React Hook Form, Zod
- **Payments:** Stripe
- **Programming Language:** TypeScript

## Installation

Follow these steps to set up PingPanda locally:

### Prerequisites

- Node.js (>= 16.x)
- PostgreSQL database

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Rahulkaradwal/ping-panda
   cd ping-panda
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following environment variables:
   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   # DATABASE - this comes from Neon Postgres (neon.tech)
   DATABASE_URL=
   # AUTH - These come from clerk
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   # DISCORD - This comes from discord
   DISCORD_BOT_TOKEN=
   STRIPE_SECRET_KEY=
   ```

4. **Run database migrations:**
   ```sh
   npx prisma migrate dev --name init
   ```

5. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

6. **Access the application:**
   Open your browser and visit `http://localhost:3000`

## Usage

1. **Sign up/Login** using Clerk authentication.
2. **Connect your Discord** to receive real-time alerts.
3. **Define events** you want to track (e.g., new user signups, payments, etc.).
4. **Upgrade to Pro** to unlock advanced features.

## API Integration

You can log events via the PingPanda API using any programming language:

```js
await fetch('https://rahul-ping-panda.netlify.app/api/events', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    category: 'bug',
    fields: {
      field1: 'value1', // for example: user id
      field2: 'value2' // for example: user email
    }
  })
})
```

## Deployment

PingPanda can be deployed on platforms like Vercel, AWS, or DigitalOcean.

### Deployment on Vercel

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy the application:
   ```sh
   vercel
   ```



