import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navigate = useNavigate();
  const navRef = useRef();

  // 🎬 Navbar slide-down animation
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50
      bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600
      px-8 py-4 flex items-center justify-between
      shadow-xl"
    >
      {/* Logo */}
      <h2 className="text-2xl font-bold text-white tracking-wide">
        DoctorApp
      </h2>

      {/* Links */}
      <div className="flex items-center gap-8 text-white font-medium">
        <Link
          to="/home"
          className="hover:text-yellow-300 transition"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-yellow-300 transition"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-yellow-300 transition"
        >
          Contact
        </Link>
        <Link
          to="/mybookings"
          className="hover:text-yellow-300 transition"
        >
          My Booking
        </Link>

        {/* Logout */}
        <button
          onClick={() => navigate("/login")}
          className="bg-red-500 px-4 py-1 rounded-lg
          hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

