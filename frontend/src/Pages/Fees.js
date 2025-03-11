import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const Fees = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Fee Data
  const totalFees = 50000;
  const paidFees = 35000;
  const pendingFees = totalFees - paidFees;
  const dueDate = "2025-04-10";

  // Fee Breakdown
  const feeDetails = [
    { category: "Tuition Fees", amount: 30000 },
    { category: "Hostel Fees", amount: 10000 },
    { category: "Exam Fees", amount: 5000 },
    { category: "Library Fees", amount: 5000 },
  ];

  // Payment History
  const paymentHistory = [
    { date: "2025-01-10", mode: "UPI", amount: 20000, receipt: "#" },
    { date: "2025-02-15", mode: "Net Banking", amount: 15000, receipt: "#" },
  ];

  // Pie Chart Data
  const pieData = {
    labels: ["Paid", "Pending"],
    datasets: [
      {
        data: [paidFees, pendingFees],
        backgroundColor: ["#4CAF50", "#F44336"],
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="p-6 ml-64">
        <h1 className="text-3xl font-bold text-gray-800">💰 Fees</h1>
        <p className="text-gray-600 mt-2">Manage your fee payments and track due dates.</p>

        {/* 📌 Total Fee Summary */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-700">Total Fees</h2>
            <p className="text-2xl text-blue-500 font-bold">₹{totalFees}</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-700">Paid Fees</h2>
            <p className="text-2xl text-green-500 font-bold">₹{paidFees}</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-700">Pending Fees</h2>
            <p className="text-2xl text-red-500 font-bold">₹{pendingFees}</p>
          </div>
        </div>

        {/* 📌 Fee Breakdown Table */}
        <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">📋 Fee Breakdown</h2>
          <table className="w-full border-collapse mt-3">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border">Category</th>
                <th className="p-3 border">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {feeDetails.map((fee, index) => (
                <tr key={index} className="text-center bg-gray-100">
                  <td className="p-3 border">{fee.category}</td>
                  <td className="p-3 border">₹{fee.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 📌 Payment Due Alerts */}
        <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">⚠️ Payment Due Alert</h2>
          <p className={`text-lg font-semibold mt-2 ${pendingFees > 0 ? "text-red-500" : "text-green-500"}`}>
            {pendingFees > 0 ? `Pending: ₹${pendingFees}, Due by ${dueDate}` : "All Fees Paid ✅"}
          </p>
        </div>

        {/* 📌 Payment History */}
        <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">💳 Payment History</h2>
          <table className="w-full border-collapse mt-3">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Mode</th>
                <th className="p-3 border">Amount (₹)</th>
                <th className="p-3 border">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment, index) => (
                <tr key={index} className="text-center bg-gray-100">
                  <td className="p-3 border">{payment.date}</td>
                  <td className="p-3 border">{payment.mode}</td>
                  <td className="p-3 border">₹{payment.amount}</td>
                  <td className="p-3 border">
                    <a href={payment.receipt} className="text-blue-500 underline">
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 📊 Graphical Representation */}
       {/* 📊 Graphical Representation */}
<div className="mt-6 bg-white p-4 shadow-md rounded-lg">
  <h2 className="text-xl font-semibold text-gray-700">📊 Fee Status</h2>
  <div className="flex justify-center mt-4">
    <div style={{ width: "250px", height: "250px" }}>
      <Pie data={pieData} />
    </div>
  </div>
</div>


        {/* 💳 Payment Options */}
        <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">💳 Pay Fees</h2>
          <div className="flex space-x-4 mt-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">UPI</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Net Banking</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded">Debit/Credit Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;
