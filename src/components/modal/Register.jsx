import React, { useState } from "react";

const Register = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = () => {
    const response = fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    });
    console.log("sourav", email, password);
    console.log("res ", response);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-lg w-full max-w-md shadow-lg p-6">
        <button
          className="absolute top-3 right-3 text-3xl font-semibold text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl text-center mb-4 font-semibold">
          Register Here
        </h2>
        <form className="space-y-4">
          <div>
            <label
              className="block mb-1 font-medium text-gray-700"
              htmlFor="emailId"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              id="emailId"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
            />
          </div>
          <div>
            <label
              className="block mb-1 font-medium text-gray-700"
              htmlFor="pass"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              id="pass"
              required
              value={password}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-md transition cursor-pointer"
            onClick={registerHandler}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
