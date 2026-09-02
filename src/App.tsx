import { lazy, Suspense, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createPortal } from "react-dom";
import { Toaster } from "react-hot-toast";

import AppLayout from "./components/AppLayout/AppLayout";
import Loading from "./components/Loaders/Loading";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./features/Shared/PageLoader";

import "./App.css";

const AboutPage = lazy(() => import("./pages/AboutPage"));

const TvDetailsPage = lazy(() => import("./pages/details/TvDetailsPage"));

const ActorDetailsPage = lazy(() => import("./pages/details/ActorDetailsPage"));

const FullCastPage = lazy(() => import("./pages/details/FullCastPage"));

const MoviePlayerPage = lazy(() => import("./pages/players/MoviePlayerPage"));

const TvSessionPage = lazy(() => import("./pages/details/TvSessionPage"));

const TvPlayerPage = lazy(() => import("./pages/players/TvPlayerPage"));

const AlooyPage = lazy(() => import("./pages/AlooyPage"));

const AlooyPlayerPage = lazy(() => import("./pages/players/AlooyPlayerPage"));

const CategoryPage = lazy(() => import("./pages/CategoryPage"));

const GenrePage = lazy(() => import("./pages/GenrePage"));

const LoginPage = lazy(() => import("./pages/auth/LoginPage"));

const RegisterPage = lazy(() => import("./pages/auth/RegisterPage"));

const ResetPage = lazy(() => import("./pages/auth/ResetPage"));

const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));

const HomePage = lazy(() => import("./pages/HomePage"));

const ProfilePage = lazy(() => import("./pages/ProfilePage"));

const MovieDetailsPage = lazy(() => import("./pages/details/MovieDetailsPage"));

const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const [showLoader, setShowLoader] = useState(() => {
    return !sessionStorage.getItem("app-loader-shown");
  });
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoader(true);

      sessionStorage.setItem("app-loader-shown", "true");

      const removeTimer = setTimeout(() => {
        setShowLoader(false);
      }, 600);

      return () => clearTimeout(removeTimer);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          zIndex: 99999999,
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "14px",
            maxWidth: "420px",
            padding: "12px 18px",
            background: "#171717",
            color: "#f5f5f5",
            border: "1px solid #262626",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
            fontFamily: "Roboto, sans-serif",
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader message="Loading Home Page" />}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPage />} />

            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/alooy" element={<AlooyPage />} />

              <Route path="/alooy/player" element={<AlooyPlayerPage />} />
              <Route
                path="/movie/:movieId/:slug"
                element={<MovieDetailsPage />}
              />
              <Route
                path="/movie/player/:movieId/:slug"
                element={<MoviePlayerPage />}
              />
              <Route path="/:type/cast/:id/:slug" element={<FullCastPage />} />
              <Route path="/tv/:tvId/:slug" element={<TvDetailsPage />} />
              <Route
                path="/tv/season/:tvId/:seasonNumber/:slug"
                element={<TvSessionPage />}
              />
              <Route
                path="/tv/player/:tvId/:seasonNumber/:episodeNumber/:slug"
                element={<TvPlayerPage />}
              />
              <Route
                path="/actor/:actorId/:slug"
                element={<ActorDetailsPage />}
              />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route
                path="/category/"
                element={<Navigate to="/category/trending" replace />}
              />
              <Route path="/genre/:slug" element={<GenrePage />} />
              <Route
                path="/genre/"
                element={<Navigate to="/genre/action" replace />}
              />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      {showLoader &&
        createPortal(
          <div
            className={`fixed inset-0 z-99999 transition-opacity duration-600 ${
              hideLoader ? "opacity-0" : "opacity-100"
            }`}
          >
            <Loading />
          </div>,
          document.body,
        )}
    </QueryClientProvider>
  );
}

export default App;
