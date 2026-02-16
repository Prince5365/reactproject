import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";

const doctors = [
  {
    id: 1,
    name: "Dr Rajesh",
    spec: "Cardiologist",
    fee: 500,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Dr Anjali",
    spec: "Dermatologist",
    fee: 400,
    image:
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Dr Amit",
    spec: "Orthopedic",
    fee: 600,
    image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "Dr Prince",
    spec: "Fever",
    fee: 300,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Dr Shikha",
    spec: "Orthopedic",
    fee: 700,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 6,
    name: "Dr Arvind",
    spec: "Surgeon",
    fee: 900,
    image: "https://images.unsplash.com/photo-1712215544003-af10130f8eb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    name: "Dr Arun",
    spec: "Brain",
    fee: 1200,
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    name: "Dr Divya",
    spec: "Heart",
    fee: 800,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8fHww",
  },
  {
    id: 9,
    name: "Dr Sarthak",
    spec: "Child",
    fee: 650,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

/* ---------- COMPONENT ---------- */
const Home = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    gsap.from(".doctor-card", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      clearProps: "all",
    });
  }, []);

  return (
    <>
      <Navbar />

      <div
        className="min-h-screen w-full
        bg-linear-to-r from-sky-500 via-indigo-600 to-purple-700
        bg-size-[400%_400%] animate-gradient"
      >
        <h1 className="text-4xl font-bold text-white text-center mt-10 mb-12">
          Available Doctors
        </h1>

        <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {doctors.map((d) => (
            <div
              key={d.id}
              className="doctor-card bg-white rounded-2xl shadow-xl p-6
              hover:scale-105 transition duration-300"
            >
              {/* DOCTOR IMAGE  */}

              <img
                src={d.image}
                alt={d.name}
                className="h-24 w-24 mx-auto mb-4 rounded-full object-cover border-4 border-indigo-500"
              />

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
