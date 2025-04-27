const express = require("express");
const Signature = require("../models/Signature");
const router = express.Router();

router.get("/api/signatures", async (req, res) => {
	try {
		const signatures = await Signature.findAll();
		res.json(signatures);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Failed to fetch signatures" });
	}
});

router.post("/api/signatures", async (req, res) => {
	try {
		const signature = await Signature.create({
			name: req.body.name,
			city: req.body.city,
			state: req.body.state,
		});
		res.status(201).json(signature);
	} catch (err) {
		console.error(err);
		res.status(400).json({ error: "Failed to add signature" });
	}
});

module.exports = router;
