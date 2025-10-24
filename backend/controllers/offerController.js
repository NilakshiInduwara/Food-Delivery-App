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

        // Handle main image
        const image = req.files.image ? `/uploads/${req.files.image[0].filename}` : null;

        // Handle potion images
        const potionImages = req.files.potionImages ? req.files.potionImages.map(file => ({
            url: `/uploads/${file.filename}`,
            altText: file.originalname
        })) : [];

        const offer = await Offer.create({
            name,
            item,
            price,
            title,
            description,
            validTill,
            increment,
            image,
            potionImages,
        });

        res.status(201).json(offer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};