import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";

/* ---------- DATA ---------- */
const doctors = [
  { id: 1, name: "Dr Rajesh", spec: "Cardiologist", fee: 500 },
  { id: 2, name: "Dr Anjali", spec: "Dermatologist", fee: 400 },
  { id: 3, name: "Dr Amit", spec: "Orthopedic", fee: 600 },
  { id: 4, name: "Dr Prince", spec: "Fever", fee: 300 },
  { id: 5, name: "Dr Sarthak", spec: "Orthopedic", fee: 700 },
  { id: 6, name: "Dr Arvind", spec: "Surgeon", fee: 900 },
  { id: 7, name: "Dr Arun", spec: "Brain", fee: 1200 },
  { id: 8, name: "Dr Shikha", spec: "Heart", fee: 800 },
  { id: 9, name: "Dr Divya", spec: "Child", fee: 650 },
];

/* ---------- COMPONENT ---------- */
const Home = () => {
  const navigate = useNavigate();

  /* GSAP FIX — runs AFTER DOM paint */
  useLayoutEffect(() => {
    gsap.from(".doctor-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.25,
      ease: "power3.out",
      clearProps: "all", // 🔥 VERY IMPORTANT FIX
    });
  }, []);

  return (
    <> 

    <Navbar/>
    <div
      className="min-h-screen w-full
      bg-linear-to-r from-sky-500 via-indigo-600 to-purple-700
      bg-size-[400%_400%] animate-gradient"
    >
      {/* NAVBAR (INLINE) */}
      <nav className="flex items-center justify-between px-8 py-4 text-white font-semibold">
        <div className="space-x-6">
          {/* <button>Home</button>
          <button>About</button>
          <button>Contact</button>
          <button>My Booking</button> */}
          {/* <button
            onClick={() => navigate("/login")}
            className="bg-red-500 px-4 py-1 rounded-lg"
          >
            Logout
          </button> */}
        </div>
      </nav>

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-white text-center mt-10 mb-12">
        Available Doctors
      </h1>

      {/* DOCTOR GRID */}
      <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {doctors.map((d) => (
          <div
            key={d.id}
            className="doctor-card bg-red-600 rounded-2xl shadow-xl p-6
            hover:scale-105 transition duration-300"
          >
            <div
              className="h-24 w-24 mx-auto mb-4 rounded-full
              bg-indigo-100 flex items-center justify-center
              text-3xl font-bold text-indigo-600"
            >
              {d.name.charAt(0)}
            </div>

            <h3 className="text-xl font-bold text-center">{d.name}</h3>
            <p className="text-gray-600 text-center">{d.spec}</p>
            <p className="text-center font-semibold text-indigo-600 mt-2">
              ₹{d.fee}
            </p>

            <button
              onClick={() => navigate("/book", { state: d })}
              className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg
              hover:bg-indigo-700 transition"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
