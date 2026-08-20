import { lazy, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createPortal } from "react-dom";

import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import Loading from "./components/Loaders/Loading";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import TvDetails from "./pages/Details/TvDetails";
import ActorDetails from "./pages/Details/ActorDetails";
import FullCast from "./pages/Details/FullCast";
import Player from "./pages/players/MoviePlayer";

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));
const MovieDetails = lazy(() => import("./pages/Details/MovieDetails"));
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
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/movie/:movieId/:slug" element={<MovieDetails />} />
            <Route path="/movie/cast/:movieId" element={<FullCast />} />
            <Route path="/movie/player/:movieId/:slug" element={<Player />} />
            <Route path="/tv/:movieId/:slug" element={<TvDetails />} />
            <Route path="/actor/:movieId/:slug" element={<ActorDetails />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
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
