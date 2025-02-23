import { Fragment, useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        formData
      );
      setMessage("Registration successful! ✅");
      setFormData({ username: "", email: "", password: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed ❌");
    }
  };

  return (
    <Fragment>
      {
        
      }
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Register</h2>

          {message && <p className="text-sm text-red-500 mb-2">{message}</p>}

          <form onSubmit={handleRegister} className="flex flex-col">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="p-2 border rounded mb-3 focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border rounded mb-3 focus:ring-2 focus:ring-blue-300"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 border rounded mb-3 focus:ring-2 focus:ring-blue-300"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition cursor-pointer"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
