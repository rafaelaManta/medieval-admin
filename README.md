# Medieval CocTales Dashboard

Medieval CocTales Dashboard is a Next.js-based administrative interface for managing orders and operations for the Medieval CocTales bar.
## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Next.js 15 with React 19
- TypeScript support
- Authentication with NextAuth.js
- Tailwind CSS for styling
- Form handling with react-hook-form and zod validation
- UI components from Radix UI
- Table management with TanStack Table
- Linting with ESLint and Prettier

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/medieval-admin.git
   cd medieval-admin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## Usage

To start the development server:

```bash
npm run dev
```

This will start the server with Turbopack enabled. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

Other available scripts:

- `npm run build`: Build the application for production
- `npm start`: Start the production server
- `npm run lint`: Run ESLint to check for code quality issues

## Project Structure

- `public/`: Static assets
- `src/`: Main application code
    - `app/`: Next.js app directory
    - `components/`: Reusable React components
    - `fetch/`: Fetch-related methods and types
    - `hooks/`: Custom React hooks
    - `lib/`: Shared utilities, actions, formatters, literals, routes, and types
    - `templates/`: Template components
- `auth.ts`: Authentication configuration
- `middleware.ts`: Custom middleware functions

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://github.com/colinhacks/zod)
- [Radix UI](https://www.radix-ui.com/)
- [TanStack Table](https://tanstack.com/table/v8)
- [Lucide React](https://lucide.dev/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
