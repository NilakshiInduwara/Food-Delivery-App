import axios from "axios";
import { useState } from "react";
import { REGISTER_URL } from "../Constants";
import { useNavigate } from "react-router-dom";

function UserForm() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      role: "",
    });
    const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(REGISTER_URL, formData);

      if (response.status === 201 || response.status === 200) {
        alert("Account created successfully!");
        setFormData({ name: "", email: "", password: "", role: "" });
        navigate("/");
        return;
      }
    } catch (error) {
      const message = error.response?.data?.message || "Failed to create account";
      alert(message);
      console.error("Error:", message);
    }
  };

  const isFormValid =
    formData.name && formData.email && formData.password && formData.role;

  return (
    <div className="flex justify-center items-center md:mt-20 mb-7">
      <div className="w-[70rem] bg-blue-100 p-9 rounded-lg shadow">
        <h2 className="text-[1.8rem] font-semibold mb-6 text-center">
          Create an account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-border"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-border"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-border"
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="form-border"
          >
            <option value="">Select Role</option>
            <option value="customer">Customer</option>
            <option value="restaurant">Restaurant</option>
            <option value="biker">Biker</option>
          </select>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`mt-[3rem] mb-3 mx-[6rem] py-2 rounded text-white bg-blue-400 ${
              isFormValid ? "hover:bg-blue-500" : "cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserForm