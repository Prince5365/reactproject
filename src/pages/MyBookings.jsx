import Navbar from "../components/Navbar";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const MyBookings = () => {
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || []
  );

  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({
    patient: "",
    date: "",
    time: "",
    disease: "",
  });

  const bgRef = useRef();

  /* 🎬 GSAP */
  useEffect(() => {
    gsap.to(bgRef.current, {
      backgroundPosition: "200% center",
      duration: 20,
      repeat: -1,
      ease: "linear",
    });

    gsap.from(".booking-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  /* ❌ DELETE */
  const deleteBooking = (i) => {
    const updated = bookings.filter((_, index) => index !== i);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  /* ✏️ OPEN EDIT */
  const openEdit = (booking, index) => {
    setEditIndex(index);
    setEditForm({
      patient: booking.patient,
      date: booking.date,
      time: booking.time,
      disease: booking.disease,
    });
  };

  /* 💾 SAVE EDIT */
  const saveEdit = () => {
    const updated = bookings.map((b, i) =>
      i === editIndex ? { ...b, ...editForm } : b
    );

    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
    setEditIndex(null);
  };

  return (
    <>
      <Navbar />

      <div
        ref={bgRef}
        className="min-h-screen px-8 py-10
        bg-size-[400%_400%]
        bg-linear-to-r from-rose-500 via-indigo-600 to-purple-700"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          My Bookings
        </h2>

        {bookings.length === 0 ? (
          <p className="text-center text-white text-lg">
            No appointments booked yet
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {bookings.map((b, i) => (
              <div
                key={i}
                className="booking-card bg-amber-50 p-6 rounded-2xl shadow-xl"
              >
                <p><b>Doctor:</b> {b.doctor}</p>
                <p><b>Patient:</b> {b.patient}</p>
                <p><b>Date:</b> {b.date}</p>
                <p><b>Time:</b> {b.time}</p>
                <p className="mb-4"><b>Disease:</b> {b.disease}</p>

                <div className="flex gap-3">
                  <button
                    onClick={() => openEdit(b, i)}
                    className="flex-1 bg-indigo-600 text-white py-2 rounded-lg
                    hover:bg-indigo-700 transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteBooking(i)}
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg
                    hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ✏️ EDIT MODAL */}
        {editIndex !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-blue-600 p-8 rounded-2xl w-87.5">
              <h3 className="text-2xl font-bold mb-4">Edit Booking</h3>

              <input
                className="w-full mb-3 px-3 py-2 border rounded"
                value={editForm.patient}
                onChange={(e) =>
                  setEditForm({ ...editForm, patient: e.target.value })
                }
                placeholder="Patient Name"
              />

              <input
                type="date"
                className="w-full mb-3 px-3 py-2 border rounded"
                value={editForm.date}
                onChange={(e) =>
                  setEditForm({ ...editForm, date: e.target.value })
                }
              />

              <input
                type="time"
                className="w-full mb-3 px-3 py-2 border rounded"
                value={editForm.time}
                onChange={(e) =>
                  setEditForm({ ...editForm, time: e.target.value })
                }
              />

              <input
                className="w-full mb-4 px-3 py-2 border rounded"
                value={editForm.disease}
                onChange={(e) =>
                  setEditForm({ ...editForm, disease: e.target.value })
                }
                placeholder="Disease"
              />

              <div className="flex gap-3">
                <button
                  onClick={saveEdit}
                  className="flex-1 bg-green-600 text-white py-2 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditIndex(null)}
                  className="flex-1 bg-gray-400 text-white py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyBookings;
