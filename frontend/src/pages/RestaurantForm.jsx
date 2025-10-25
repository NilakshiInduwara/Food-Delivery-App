import axios from "axios";
import { useState } from "react";

function RestaurantForm() {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    rating: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/restaurants",
        formData
      );

      alert("Restaurant created successfully!");

      if (response.status === 201 || response.status === 200) {
        setFormData({ name: "", cuisine: "", rating: "", location: "" });
      }
    } catch (error) {
      alert("Failed to create restaurant");
      if (error.response) console.error("Server error:", error.response.data);
      else console.error("Network error:", error.message);
    }
  };

  const isFormValid =
    formData.name && formData.cuisine && formData.rating && formData.location;

  return (
    <div className="flex justify-center items-center md:mt-20 mb-7">
      <div className="w-[70rem] bg-blue-100 p-9 rounded-lg shadow">
        <h2 className="text-[1.8rem] font-semibold mb-5 text-center">
          Create Restaurant
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Restaurant name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-border"
          />
          <input
            type="text"
            name="cuisine"
            placeholder="Cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            required
            className="form-border"
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleChange}
            step="0.1"
            min="0"
            max="5"
            required
            className="form-border"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="form-border"
          />

          <button type="submit" disabled={!isFormValid} className={`mt-4 py-2 px-4 rounded text-white bg-blue-400 ${
                isFormValid
                ? "hover:bg-blue-500"
                : "cursor-not-allowed"
            }`}>
            Create Restaurant
          </button>
        </form>
      </div>
    </div>
  );
}

export default RestaurantForm;
