import Offer from "../models/Offer.js";

export const getOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOfferById = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    if (!offer) return res.status(404).json({ message: "Not found" });
    res.json(offer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createOffer = async (req, res) => {
    try {
        const { name, item, price, title, description, validTill, increment } = req.body;

        const image = req.file ? `/uploads/${req.file.filename}` : null;

        const offer = await Offer.create({
            name,
            item,
            price,
            title,
            description,
            validTill,
            increment,
            image,
        });

        res.status(201).json(offer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};