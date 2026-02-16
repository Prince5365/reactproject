import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

const Login = () => {
  const navigate = useNavigate();
  const cardRef = useRef();
  const bgRef = useRef();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  //USING GSAP Animations
  useEffect(() => {
    gsap.from(cardRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(bgRef.current, {
      backgroundPosition: "200% center",
      duration: 15,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.email === form.email && user?.password === form.password) {
      navigate("/home");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div
      ref={bgRef}
      className="min-h-screen flex items-center justify-center
      bg-size-[400%_400%]
      bg-linear-to-r from-slate-900 via-indigo-900 to-purple-900"
    >
      <form
        ref={cardRef}
        onSubmit={handleLogin}
        className="bg-red-500 w-105 p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          Login
        </h2>

      
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full px-4 py-2 mb-4 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          className="w-full px-4 py-2 mb-2 border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

      
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}


        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2
          rounded-lg text-lg font-semibold
          hover:bg-indigo-700 transition duration-300"
        >
          Login
        </button>

        <p
          className="text-center mt-5 text-indigo-600 cursor-pointer hover:underline"
          onClick={() => navigate("/")}
        >
          Don&apos;t have an account? Signup
        </p>
      </form>
    </div>
  );
};

export default Login;
