import axios from "axios";
import { useState } from "react";
import { LOGIN_URL } from "../Constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../state/Auth/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, formData);

      if (response.status === 201 || response.status === 200) {
        // Save user in localStorage so ProtectedRoute knows the role
        const userData = {
          _id: response.data._id,
          name: response.data.name,
          email: response.data.email,
          role: response.data.role,
          token: response.data.token,
        };

        dispatch(loginSuccess(userData));

        // localStorage.setItem("token", response.data.token);

        console.log("Login response:", response.data);
        
        alert("Successfully logged in!");
        setFormData({ email: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      const message = error.response?.data?.message || "Failed to log in";
      alert(message);
      console.error("Error:", message);
    }
  };

  const isFormValid = formData.email && formData.password;

  return (
    <div className="flex justify-center items-center md:mt-20 mb-7">
      <div className="w-[70rem] bg-blue-100 p-9 rounded-lg shadow">
        <h2 className="text-[1.8rem] font-semibold mb-6 text-center">
          Log In
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
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

          <button
            type="submit"
            disabled={!isFormValid}
            className={`mt-[3rem] mb-3 mx-[6rem] py-2 rounded text-white bg-blue-400 ${
              isFormValid ? "hover:bg-blue-500" : "cursor-not-allowed"
            }`}
          >
            Log In
          </button>
        </form>
        <div className="flex justify-center text-center mt-2 text-xs">
          <span className="mr-1">Don't have an account?</span>
          <a href="/register" className="text-blue-600 hover:underline"> Register here</a>
        </div>
      </div>
    </div>
  )
}

export default Login