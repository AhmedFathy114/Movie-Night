import { lazy, Suspense, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createPortal } from "react-dom";

import AppLayout from "./components/AppLayout/AppLayout";
import Loading from "./components/Loaders/Loading";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./features/Shared/PageLoader";

import "./App.css";
import { AuthProvider } from "./contexts/AuthProvider";

const AboutPage = lazy(() => import("./pages/AboutPage"));

const TvDetailsPage = lazy(() => import("./pages/Details/TvDetailsPage"));

const ActorDetailsPage = lazy(() => import("./pages/Details/ActorDetailsPage"));

const FullCastPage = lazy(() => import("./pages/Details/FullCastPage"));

const MoviePlayerPage = lazy(() => import("./pages/players/MoviePlayerPage"));

const TvSessionPage = lazy(() => import("./pages/Details/TvSessionPage"));

const TvPlayerPage = lazy(() => import("./pages/players/TvPlayerPage"));

const AlooyPage = lazy(() => import("./pages/AlooyPage"));

const AlooyPlayerPage = lazy(() => import("./pages/players/AlooyPlayerPage"));

const CategoryPage = lazy(() => import("./pages/CategoryPage"));

const GenrePage = lazy(() => import("./pages/GenrePage"));

const LoginPage = lazy(() => import("./pages/LoginPage"));

const HomePage = lazy(() => import("./pages/HomePage"));

const ProfilePage = lazy(() => import("./pages/Profile"));

const MovieDetailsPage = lazy(() => import("./pages/Details/MovieDetailsPage"));

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
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader message="Loading Home Page" />}>
          <AuthProvider>
            <Routes>
              <Route
                path="/login"
                element={
                  <div className="fixed inset-0 z-99999 bg-black">
                    <LoginPage />
                  </div>
                }
              />

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
                <Route
                  path="/:type/cast/:id/:slug"
                  element={<FullCastPage />}
                />
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
          </AuthProvider>
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
