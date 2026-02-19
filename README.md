# Budget System V2 (Frontend)

This is the frontend application for the **Budget System V2** used by **Satri Sirikaket School** (SSK). It is built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**, featuring a modern, responsive design and robust state management.

## 🚀 Features

- **Authentication System**:
  - Secure Login/Register flow.
  - JWT Access Token & Refresh Token support.
  - Persistent authentication state using **Zustand** (localStorage).
  - Protected routes via `AuthGuard` component.
  - Automatic logout on 401 Unauthorized responses.

- **Dashboard & User Interface**:
  - Responsive Sidebar navigation.
  - User profile summary.
  - Budget overview dashboard.
  - Request management ("My Requests").
  - Historical data view.

- **Technical Highlights**:
  - **Next.js 16 (App Router)** for efficient routing and server-side rendering capability.
  - **TypeScript** for type-safe development.
  - **Tailwind CSS 4** for styling and theming.
  - **Zustand** for global state management (auth state, loading, errors).
  - **Custom API Client** (`src/lib/apiClient.ts`) for centralized fetch logic with automatic headers and error handling.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: Heroicons (SVG)

## 📂 Project Structure

```
src/
├── app/              # Next.js App Router pages (layout.tsx, page.tsx, etc.)
├── auth/             # Authentication logic (AuthGuard.tsx)
├── components/       # Reusable UI components
│   └── layouts/      # Layout components (Sidebar, Header, etc.)
├── lib/              # Utility functions and helpers (apiClient.ts)
├── services/         # API service layer (auth.service.ts)
├── store/            # Global state management stores (useAuthStore.ts)
├── types/            # TypeScript interfaces and types
└── hooks/            # Custom React hooks
```

## 🔒 Authentication Flow

1. **Login**: User logs in -> Access Token & User Data are stored in Zustand (persisted to localStorage).
2. **Persistence**: `useAuthStore` handles rehydration on page load.
3. **Protection**: `AuthGuard` wraps protected routes, redirecting unauthenticated users to `/login`.
4. **API Requests**: `apiClient` automatically attaches the Bearer token to requests requiring auth.
5. **Expiration**: If the API returns 401, the client automatically logs out the user and redirects to login.

## 📝 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run format`: Formats code using Prettier.

## 📄 License

[MIT](LICENSE)
