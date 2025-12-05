import { useState } from "react";
import axios from "axios";
import { OFFERS_URL } from "../Constants";

function OfferForm() {
  const [formData, setFormData] = useState({
    name: "",
    item: "",
    price: "",
    title: "",
    description: "",
    validTill: "",
    increment: "",
  });
  const [image, setImage] = useState(null);
  const [potionImages, setPotionImages] = useState([]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = async (e) => {
    setImage(e.target.files[0]);
  };

  const handlePotionImagesChange = async (e) => {
    setPotionImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // FormData - since sending both text & image
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    if (image) {
      data.append("image", image);
    }

    potionImages.forEach((image) => {
      data.append("potionImages", image);
    });

    try {
      const res = await axios.post(OFFERS_URL, data, {
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "multipart/form-data",
        },
      });

    //   console.log("Offer created:", res.data);
      alert("Offer created successfully!");

      setFormData({
        name: "",
        item: "",
        price: "",
        title: "",
        description: "",
        validTill: "",
        increment: "",
      });
      setImage(null);
      setPotionImages([]);
    } catch (err) {
        console.error("Error:", err);
      alert("Failed to create offer");
    }
  };

  const isFormValid =
    formData.name.trim() &&
    formData.item.trim() &&
    formData.price &&
    formData.title.trim() &&
    formData.description.trim() &&
    formData.validTill &&
    formData.increment;

  return (
    <div className="flex justify-center items-center md:mt-20 mb-7">
      <div className="w-[70rem] bg-blue-100 p-9 rounded-lg shadow">
        <h2 className="text-[1.8rem] font-semibold mb-5 text-center">Create Offer</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-border"
          />

          <input
            name="item"
            placeholder="Item"
            value={formData.item}
            onChange={handleChange}
            required
            className="form-border"
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="form-border"
          />

          <input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="form-border"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="form-border"
          />

          <input
            name="validTill"
            type="date"
            value={formData.validTill}
            onChange={handleChange}
            required
            className="form-border"
          />

          <input
            name="increment"
            type="number"
            placeholder="Increment"
            value={formData.increment}
            onChange={handleChange}
            required
            className="form-border"
          />

          <div>
            <label className="block font-medium mb-1">
              Upload Offer Image:
            </label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Upload Potion Images:
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePotionImagesChange}
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`mt-4 py-2 px-4 rounded text-white bg-blue-400 ${
                isFormValid
                ? "hover:bg-blue-500"
                : "cursor-not-allowed"
            }`}
            >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default OfferForm;
