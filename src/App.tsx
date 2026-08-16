import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";

const AppLayout = lazy(() => import("./components/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));
const About = lazy(() => import("./pages/About"));
const MovieDetails = lazy(() => import("./pages/MovieDetails"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          {/* <Suspense fallback={<LoadingModel message="loading Page" />}> */}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route
                  path="movieDetails/:movieId"
                  element={<MovieDetails />}
                />
                <Route path="profile" element={<Profile />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          {/* </Suspense> */}
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
