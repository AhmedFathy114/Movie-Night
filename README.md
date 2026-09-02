<div align="center">

<img src="https://eecsajchjmzzbigvaeae.supabase.co/storage/v1/object/public/images/favicon.png" alt="Movie Night Logo" width="120" />

# 🎬 Movie Night
A modern, cinematic movie and TV discovery platform built with React, Vite, TypeScript, and Supabase.

[![LIVE DEMO](https://img.shields.io/badge/LIVE_DEMO-CLICK_HERE-2ea44f?style=for-the-badge)](https://movie-night-11.vercel.app/home)

</div>

## 🛠️ Built With

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=for-the-badge&logo=react&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_React-FF7A59?style=for-the-badge&logo=lucide&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![date-fns](https://img.shields.io/badge/date--fns-770C56?style=for-the-badge&logo=javascript&logoColor=white)
![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-FFC107?style=for-the-badge&logo=react&logoColor=black)

</div>

---

## ✨ Features

- ⚡ **Fast & Smooth** — Built with React and Vite for a fast browsing experience.
- 🎨 **Cinematic UI** — Modern dark interface inspired by streaming platforms.
- 📱 **Fully Responsive** — Works smoothly across desktop, tablet, and mobile.
- 🔎 **Smart Search** — Search for movies and TV shows quickly.
- 🎬 **Movie Details** — Explore movies, genres, cast, related content, and metadata.
- 📺 **TV Shows** — Browse TV shows, seasons, episodes, and detailed information.
- 👥 **Actors & Cast** — Explore actor details and full cast pages.
- 🎞️ **Media Players** — Dedicated players for movies, TV shows, and Alooy.
- 🏠 **Dynamic Home Page** — Discover content through different categories and sections.
- 📡 **Alooy TV** — Dedicated section for available TV content.
- ❤️ **Favorites** — Save movies and TV shows to your favorites.
- 📋 **Watchlist** — Keep track of content you want to watch later.
- 👤 **User Profiles** — Manage your profile information and avatar.
- 🔐 **Authentication** — Email/password authentication powered by Supabase.
- 🌐 **Google Sign-In** — Authentication through Google OAuth.
- 📧 **Email Confirmation** — Account verification through email.
- 🔑 **Password Recovery** — Forgot-password and reset-password flows.
- ⚡ **Realtime Updates** — User profile changes can be synchronized in realtime.
- 🖼️ **Cloud Storage** — User avatars are stored using Supabase Storage.
- 🔄 **Smart Caching** — Server-state management and caching using TanStack Query.
- 🔔 **Toast Notifications** — Clear feedback for successful and failed actions.

---

## 🎥 The Experience

Movie Night is built around a simple idea:

> Find something you want to watch, explore it, and enjoy the experience.

The application provides dedicated experiences for:

- 🎬 Movies
- 📺 TV Shows
- 🎞️ Seasons & Episodes
- 👥 Actors & Full Cast
- 🔎 Search
- 🎠 Interactive Carousels
- ❤️ Favorites
- 📋 Watchlist
- ▶️ Movie & TV Players
- 📡 Alooy TV

---

## 🔐 Authentication

Authentication is handled using Supabase Auth.

The application supports:

- 📝 Email & Password Sign Up
- 📧 Email Confirmation
- 🔑 Email & Password Login
- 🚪 Logout
- 🌐 Google OAuth
- 🔐 Forgot Password
- 🔄 Reset Password
- 👤 User Sessions

The password recovery flow allows users to request a reset link through email and securely create a new password.

---

## 👤 User Profiles

Each authenticated user has a profile connected to the Supabase authentication system.

Users can manage:

- Full Name
- Email
- Avatar
- Favorites
- Watchlist

Profile information is stored separately from authentication data while remaining connected to the authenticated user's UUID.

---

## ❤️ Favorites & Watchlist

Movie Night provides two separate ways to manage content.

**❤️ Favorites** — Users can save movies and TV shows they particularly like.

**📋 Watchlist** — Users can add movies and TV shows that they want to watch later.

Both systems support different media types through: `media_type`, `media_id`, `user_id`.

---

## 🗄️ Database & Backend

Movie Night uses Supabase as the backend infrastructure.

The database is designed around authenticated users, profiles, favorites, watchlists, and streaming providers.

### 📊 Database Schema

#### 👤 `profile`

Stores additional information related to authenticated users.

| Column | Type | Description |
|---|---|---|
| `id` | `uuid` | Connected to `auth.users.id` |
| `created_at` | `timestamptz` | Profile creation timestamp |
| `email` | `text` | User email |
| `full_name` | `text` | User's full name |
| `avatar_url` | `text` | User avatar URL |

#### ❤️ `favorites`

Stores movies and TV shows saved by users.

| Column | Type | Description |
|---|---|---|
| `id` | `int8` | Favorite record ID |
| `created_at` | `timestamptz` | Creation timestamp |
| `user_id` | `uuid` | The authenticated user |
| `media_type` | `text` | Movie or TV |
| `media_id` | `int4` | TMDB media ID |

#### 📋 `watchlist`

Stores movies and TV shows that users want to watch later.

| Column | Type | Description |
|---|---|---|
| `id` | `int8` | Watchlist record ID |
| `created_at` | `timestamptz` | Creation timestamp |
| `user_id` | `uuid` | The authenticated user |
| `media_type` | `text` | Movie or TV |
| `media_id` | `int4` | TMDB media ID |

#### 📡 `stream_providers`

Stores available streaming provider information.

| Column | Type | Description |
|---|---|---|
| `id` | `int8` | Provider ID |
| `created_at` | `timestamptz` | Creation timestamp |
| `name` | `text` | Provider name |
| `url_type` | `text` | Provider URL type |
| `media_type` | `text` | Supported media type |
| `full_url` | `text` | Provider URL |

### 🔗 Database Relationships

The `profile` table is connected directly to Supabase authentication:

```
auth.users
     │
     │ id
     ▼
  profile
     │
     ├──────────────► favorites
     │
     └──────────────► watchlist
```

User-specific records are associated with the authenticated user's UUID.

### 🖼️ Supabase Storage

Supabase Storage is used for user-uploaded profile images and avatars.

The application stores the avatar URL inside the user's profile record:

```
profile.avatar_url
        │
        ▼
Supabase Storage
        │
        ▼
User Avatar
```

This allows profile images to remain available across sessions and devices.

### 🔄 Realtime & Query Invalidation

The application combines Supabase Realtime with TanStack Query to keep user-related data synchronized.

When profile information changes, the application can update the relevant cached queries so the UI reflects the latest data without requiring a full page reload.

This approach helps keep the following synchronized with the backend:

- 👤 Profile information
- 🖼️ Avatar data
- ❤️ Favorites
- 📋 Watchlist

---

## 🎞️ Movie & TV Data

Movie Night uses the TMDB API as the main source for movie and TV metadata.

The application uses movie data for:

- 🎬 Movies
- 📺 TV Shows
- 👥 Actors
- 🎭 Cast
- 🎞️ Seasons
- 📺 Episodes
- 🏷️ Genres
- 🔎 Search
- 🎬 Related Content
- ⭐ Ratings & Metadata

Supabase handles application-specific user data, while TMDB provides the entertainment metadata.

### 🔄 Data Flow

```
                    ┌─────────────────┐
                    │    TMDB API     │
                    │ Movies / TV /   │
                    │ Cast / Genres   │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  React + Axios  │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ TanStack Query  │
                    │ Fetching / Cache│
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   Movie Night   │
                    │       UI        │
                    └─────────────────┘


                    ┌─────────────────┐
                    │    Supabase     │
                    │ Auth / Database │
                    │ Storage / RT    │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ User Profiles   │
                    │ Favorites       │
                    │ Watchlist       │
                    └─────────────────┘
```

---

## 🧩 Application Architecture

```
📦 Movie-Night
├── 📂 public
│   └── 🖼️ screenshots & static assets
│
├── 📂 src
│   ├── 📂 apis
│   │   └── API requests and external data fetching
│   │
│   ├── 📂 components
│   │   └── Reusable UI components
│   │
│   ├── 📂 features
│   │   ├── 📂 actors
│   │   ├── 📂 movies
│   │   ├── 📂 tv
│   │   ├── 📂 Shared
│   │   └── 📂 Alooy
│   │
│   ├── 📂 hooks
│   │   └── Custom React hooks
│   │
│   ├── 📂 lib
│   │   └── Shared utilities and configurations
│   │
│   ├── 📂 pages
│   │   ├── 📂 auth
│   │   ├── 📂 details
│   │   └── 📂 players
│   │
│   ├── 📂 services
│   │   └── Backend and service logic
│   │
│   ├── 📂 types
│   │   └── TypeScript types
│   │
│   ├── 📄 App.css
│   ├── 📄 App.tsx
│   ├── 📄 index.css
│   └── 📄 main.tsx
│
├── 📂 supabase

```

---

## 🎨 UI & Design

Movie Night uses a dark cinematic design focused on creating a streaming-platform experience.

**Design Highlights**

- 🌑 Dark cinematic backgrounds
- 🔴 Red accent colors
- 🎞️ Large movie artwork
- ✨ Smooth transitions
- 📱 Responsive layouts
- 🧩 Reusable UI components
- 🎠 Interactive carousels
- ▶️ Dedicated media-player pages
- 🔎 Simple and fast navigation

### 📱 Responsive Design

The application is designed to work across different screen sizes:

- 🖥️ Desktop
- 💻 Laptop
- 📱 Mobile
- 📲 Tablet

Layouts, cards, navigation, carousels, and media sections adapt to different viewport sizes.

---

## 🌐 Live Demo

Experience Movie Night online:

<div align="center">

[![Open Movie Night](https://img.shields.io/badge/🎬_OPEN_MOVIE_NIGHT-2ea44f?style=for-the-badge)](https://movie-night-11.vercel.app/home)

</div>

---

## 📸 Screenshots

<div align="center">

<img src="./public/Screenshot%202026-09-03%20004452.png" alt="Movie Night Screenshot" width="900" />

</div>

---

## 🧠 Main Concepts Used

This project demonstrates practical usage of:

- ⚛️ React component architecture
- 🟦 TypeScript
- ⚡ Vite
- 🧭 React Router
- 🔄 TanStack Query
- 🔐 Supabase Authentication
- 🗄️ Supabase PostgreSQL
- 🖼️ Supabase Storage
- ⚡ Supabase Realtime
- 🌐 REST APIs
- 📡 Axios
- 🎨 Tailwind CSS
- 🎠 Swiper
- 📝 React Hook Form
- 🔔 React Hot Toast
- 📅 date-fns
- 🎨 React Icons
- ✨ Lucide React

---

## 📌 Project Highlights

Movie Night brings together a complete modern frontend stack with a real backend experience.

The project combines:

- **React + TypeScript + Vite** — for the application layer
- **TanStack Query + Axios** — for API communication and server-state management
- **TMDB API** — for entertainment data
- **Supabase** — for authentication, database storage, user profiles, cloud storage, and realtime updates

The result is a complete movie and TV discovery experience with personalized user features.

---

## ⭐ If You Like It

If you found Movie Night useful or interesting, consider giving the repository a ⭐ on GitHub.

<div align="center">

**🎬 Movie Night**

*Discover. Explore. Watch.*

</div>
