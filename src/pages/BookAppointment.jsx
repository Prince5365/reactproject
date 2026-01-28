import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const BookAppointment = () => {
  const { state: doctor } = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    patient: "",
    date: "",
    time: "",
    disease: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      doctor: doctor.name,
      patient: form.patient,
      date: form.date,
      time: form.time,
      disease: form.disease,
    };

    const oldBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...oldBookings, newBooking])
    );

    navigate("/mybookings");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-500 to-purple-600">
        <form
          onSubmit={handleSubmit}
          className="bg-red-500 p-8 rounded-2xl shadow-xl w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Book Appointment
          </h2>

          <input
            type="text"
            name="patient"
            placeholder="Patient Name"
            required
            onChange={handleChange}
            className="w-full border p-2 mb-4 rounded"
          />

          <input
            type="date"
            name="date"
            required
            onChange={handleChange}
            className="w-full border p-2 mb-4 rounded"
          />

          <input
            type="time"
            name="time"
            required
            onChange={handleChange}
            className="w-full border p-2 mb-4 rounded"
          />

          {/* ✅ Disease Dropdown */}
          <select
            name="disease"
            required
            onChange={handleChange}
            className="w-full border p-2 mb-4 rounded"
          >
            <option value="">Select Disease</option>
            <option value="Heart Problem">Heart Problem</option>
            <option value="Skin Allergy">Skin Allergy</option>
            <option value="Bone Pain">Bone Pain</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Fever">Fever</option>
          </select>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg
            hover:bg-indigo-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </>
  );
};

export default BookAppointment;
