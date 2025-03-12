import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Timetable = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const timetable = [
    {
      day: "Monday",
      schedule: [
        { time: "8:30 - 9:30", subject: "Mathematics", type: "lecture" },
        { time: "9:30 - 10:30", subject: "Physics", type: "lecture" },
        { time: "10:30 - 12:30", subject: "Physics Lab", type: "practical" },
        { time: "12:30 - 1:30", subject: "Lunch Break", type: "break" },
        { time: "1:30 - 2:30", subject: "Chemistry", type: "lecture" },
        { time: "2:30 - 3:30", subject: "English", type: "lecture" },
        { time: "3:30 - 4:30", subject: "Computer Science", type: "lecture" },
      ],
    },
    {
      day: "Tuesday",
      schedule: [
        { time: "8:30 - 9:30", subject: "Computer Science", type: "lecture" },
        { time: "9:30 - 10:30", subject: "Mathematics", type: "lecture" },
        { time: "10:30 - 12:30", subject: "Computer Science Lab", type: "practical" },
        { time: "12:30 - 1:30", subject: "Lunch Break", type: "break" },
        { time: "1:30 - 2:30", subject: "Physics", type: "lecture" },
        { time: "2:30 - 3:30", subject: "English", type: "lecture" },
        { time: "3:30 - 4:30", subject: "Chemistry", type: "lecture" },
      ],
    },
    {
      day: "Wednesday",
      schedule: [
        { time: "8:30 - 9:30", subject: "English", type: "lecture" },
        { time: "9:30 - 10:30", subject: "Mathematics", type: "lecture" },
        { time: "10:30 - 12:30", subject: "Chemistry Lab", type: "practical" },
        { time: "12:30 - 1:30", subject: "Lunch Break", type: "break" },
        { time: "1:30 - 2:30", subject: "Physics", type: "lecture" },
        { time: "2:30 - 3:30", subject: "Computer Science", type: "lecture" },
        { time: "3:30 - 4:30", subject: "Chemistry", type: "lecture" },
      ],
    },
    {
      day: "Thursday",
      schedule: [
        { time: "8:30 - 9:30", subject: "Mathematics", type: "lecture" },
        { time: "9:30 - 10:30", subject: "Physics", type: "lecture" },
        { time: "10:30 - 12:30", subject: "Physics Lab", type: "practical" },
        { time: "12:30 - 1:30", subject: "Lunch Break", type: "break" },
        { time: "1:30 - 2:30", subject: "English", type: "lecture" },
        { time: "2:30 - 3:30", subject: "Chemistry", type: "lecture" },
        { time: "3:30 - 4:30", subject: "Computer Science", type: "lecture" },
      ],
    },
    {
      day: "Friday",
      schedule: [
        { time: "8:30 - 9:30", subject: "Computer Science", type: "lecture" },
        { time: "9:30 - 10:30", subject: "Physics", type: "lecture" },
        { time: "10:30 - 12:30", subject: "English Lab", type: "practical" },
        { time: "12:30 - 1:30", subject: "Lunch Break", type: "break" },
        { time: "1:30 - 2:30", subject: "Mathematics", type: "lecture" },
        { time: "2:30 - 3:30", subject: "Chemistry", type: "lecture" },
        { time: "3:30 - 4:30", subject: "Physics", type: "lecture" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Navbar and Sidebar */}
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="p-6 ml-64"> {/* Ensures Sidebar Space */}
        <h1 className="text-3xl font-bold text-gray-800">Timetable</h1>
        <p className="text-gray-600 mt-2">Your weekly schedule.</p>

        {/* Table Container */}
        <div className="mt-4 bg-white p-6 shadow-lg rounded-xl">
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="bg-gradient-to-r from-orange-400 to-orange-600">
                <th className="p-4 border text-left text-white">Day</th>
                <th className="p-4 border text-center text-white">Time</th>
                <th className="p-4 border text-center text-white">Subject</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((daySchedule, index) => (
                <React.Fragment key={index}>
                  {/* Day Header Row */}
                  <tr className="bg-blue-100">
                    <td colSpan="3" className="p-3 text-left font-semibold text-gray-800">
                      {daySchedule.day}
                    </td>
                  </tr>
                  {/* Timetable Slots */}
                  {daySchedule.schedule.map((slot, i) => (
                    <tr
                      key={i}
                      className={`cursor-pointer hover:bg-opacity-75 transition duration-300 ease-in-out ${
                        slot.type === "practical"
                          ? "bg-yellow-100"
                          : slot.type === "break"
                          ? "bg-gray-300"
                          : "bg-green-100"
                      }`}
                    >
                      <td className="p-4 border">{slot.time}</td>
                      <td className="p-4 border text-center">{slot.subject}</td>
                      <td className="p-4 border text-center">
                        <span className="text-sm font-medium text-gray-700">
                          {slot.type === "lecture"
                            ? "Lecture"
                            : slot.type === "practical"
                            ? "Practical"
                            : "Break"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
