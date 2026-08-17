import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

function AppLayout() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(function () {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("click", handleScroll);
  }, []);
  function handleToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <section className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="scrollbar-thin flex-1 ">
        <Outlet />
      </main>
      <Footer />

      {showScrollTop && (
        <button
          onClick={handleToTop}
          className="fixed bottom-6
          left-6 bg-red-600 p-4 rounded-full
          text-lg z-999 cursor-pointer hover:bg-red-600/70"
        >
          <FaArrowUp />
        </button>
      )}
    </section>
  );
}

export default AppLayout;
