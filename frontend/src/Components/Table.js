import React from "react";

const Table = () => {
  const students = [
    { id: 1, name: "John Doe", course: "Computer Science", status: "Active" },
    { id: 2, name: "Jane Smith", course: "Mechanical Engg", status: "Inactive" },
    { id: 3, name: "Alice Johnson", course: "Electrical Engg", status: "Active" },
    { id: 4, name: "Bob Brown", course: "Civil Engg", status: "Active" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Student List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gradient-to-r from-[#FF512F] to-[#F09819] text-white">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Course</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={student.id}
                className={`text-center ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="p-3 border">{student.id}</td>
                <td className="p-3 border">{student.name}</td>
                <td className="p-3 border">{student.course}</td>
                <td
                  className={`p-3 border font-semibold ${
                    student.status === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {student.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
