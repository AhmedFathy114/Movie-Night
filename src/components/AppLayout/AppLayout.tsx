import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

function AppLayout() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <section className="flex min-h-screen flex-col bg-black">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {showScrollTop && (
        <button
          type="button"
          onClick={handleToTop}
          className="
            fixed bottom-6 right-6 z-999
            cursor-pointer rounded-full
            bg-red-600 p-4 text-lg
            transition-all duration-300
            hover:bg-red-600/70
          "
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </section>
  );
}

export default AppLayout;