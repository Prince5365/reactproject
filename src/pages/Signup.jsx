import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Signup = () => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const bgRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  // 🎬 GSAP Animations
  useEffect(() => {
    gsap.from(cardRef.current, {
      scale: 0.85,
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "back.out(1.7)",
    });

    gsap.to(bgRef.current, {
      backgroundPosition: "200% center",
      duration: 15,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  // ✅ VALIDATION (FULL NAME ALLOWED)
  const validate = () => {
    let err = {};

    if (!form.name.trim()) {
      err.name = "Name is required";
    } else if (/^\s/.test(form.name)) {
      err.name = "Name should not start with space";
    }

    if (!form.email) err.email = "Email is required";

    if (form.password.length < 6)
      err.password = "Minimum 6 characters required";

    if (form.password !== form.confirmPassword)
      err.confirmPassword = "Password does not match";

    setError(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("user", JSON.stringify(form));
      navigate("/login");
    }
  };

  return (
    <div
      ref={bgRef}
      className="
        min-h-screen flex items-center justify-center
        bg-size-[400%_400%]
        bg-linear-to-r from-indigo-500 via-purple-600 to-pink-500
        px-4
      "
    >
      <form
        ref={cardRef}
        onSubmit={handleSubmit}
        className="
          bg-blue-500 w-full max-w-md
          p-8 rounded-2xl shadow-2xl
        "
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">
          Signup
        </h2>

        {/* ✅ FULL NAME INPUT */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 mb-1 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value }) // 🔥 NO trim here
          }
        />
        <p className="text-red-500 text-sm mb-3 min-h-5">
          {error.name}
        </p>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-1 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <p className="text-red-500 text-sm mb-3 min-h-5">
          {error.email}
        </p>

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-1 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />
        <p className="text-red-500 text-sm mb-3 min-h-5">
          {error.password}
        </p>

        {/* CONFIRM PASSWORD */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-2 mb-1 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({ ...form, confirmPassword: e.target.value })
          }
        />
        <p className="text-red-500 text-sm mb-4 min-h-5">
          {error.confirmPassword}
        </p>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2
          rounded-lg text-lg font-semibold hover:bg-indigo-700
          transition duration-300"
        >
          Signup
        </button>

        <p
          className="text-center mt-5 text-indigo-600
          cursor-pointer hover:underline"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </p>
      </form>
    </div>
  );
};

export default Signup;
