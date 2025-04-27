const express = require("express");
const session = require("express-session");
const cors = require("cors");
const sequelize = require("./db");
const Petition = require("./models/Signature");
const router = require("./routes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
	session({
		secret: "petitions",
		resave: false,
		saveUninitialized: true,
	})
);

app.use("/", router);

sequelize.sync({ force: true }).then(async () => {
	try {
		await addDefaults();
		console.log("Defaults added.");
		app.listen(PORT, () => {
			console.log(`Server running on http://localhost:${PORT}`);
		});
	} catch (err) {
		console.error("Error during initialization:", err);
		process.exit(1);
	}
});

async function addDefaults() {
	await Petition.create({
		name: "Alice Johnson",
		city: "Seattle",
		state: "WA",
	});
	await Petition.create({
		name: "Bob Smith",
		city: "Portland",
		state: "OR",
	});
}
