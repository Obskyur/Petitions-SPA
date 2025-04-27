import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PetitionForm from "./components/PetitionForm";
import SignatureTable from "./components/SignatureTable";
import "./App.css";
import axios from "axios";

function App() {
	const [signatures, setSignatures] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchSignatures();
	}, []);

	const fetchSignatures = async () => {
		try {
			setLoading(true);
			const response = await axios.get("http://localhost:4000/api/signatures");
			setSignatures(response.data);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching signatures:", error);
			setLoading(false);
		}
	};

	const handleSubmitSignature = async (signatureData) => {
		try {
			await axios.post("http://localhost:4000/api/signatures", signatureData);
			fetchSignatures();
		} catch (error) {
			console.error("Error submitting signature:", error);
		}
	};

	return (
		<div className="App">
			<Navbar />
			<main className="main">
				<Hero />
				<PetitionForm onSubmit={handleSubmitSignature} />
				{loading ? <p>Loading signatures...</p> : <SignatureTable signatures={signatures} />}
			</main>
		</div>
	);
}

export default App;
