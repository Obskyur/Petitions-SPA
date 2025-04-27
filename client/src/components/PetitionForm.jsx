import React, { useState } from "react";
import "./PetitionForm.css";

function PetitionForm({ onSubmit }) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		city: "",
		state: "",
	});
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const validateForm = () => {
		const newErrors = {};

		if (formData.name.trim().length < 5 || formData.name.trim().length > 20) {
			newErrors.name = "Name must be between 5 and 20 characters";
		}

		if (!formData.email.includes("@")) {
			newErrors.email = "Email must contain @";
		}

		if (formData.state.trim().length !== 2 || formData.state !== formData.state.toUpperCase()) {
			newErrors.state = "State must be 2 uppercase characters";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (validateForm()) {
			// Remove email from the data sent to the server as it's not in the model
			const { email, ...dataToSubmit } = formData;
			onSubmit(dataToSubmit);

			// Reset form
			setFormData({
				name: "",
				email: "",
				city: "",
				state: "",
			});
		}
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<h2 className="form__title">Sign the Petition</h2>

			<input
				id="name"
				className="form__input"
				type="text"
				name="name"
				placeholder="Your Name"
				value={formData.name}
				onChange={handleChange}
				required
			/>
			{errors.name && <span className="error">{errors.name}</span>}

			<input
				id="email"
				className="form__input"
				type="text"
				name="email"
				placeholder="Your Email"
				value={formData.email}
				onChange={handleChange}
				required
			/>
			{errors.email && <span className="error">{errors.email}</span>}

			<input id="city" className="form__input" type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />

			<input
				id="state"
				className="form__input"
				type="text"
				name="state"
				placeholder="State (e.g., WA)"
				value={formData.state}
				onChange={handleChange}
				required
			/>
			{errors.state && <span className="error">{errors.state}</span>}

			<button id="submit" className="form__button" type="submit">
				Sign Petition
			</button>
		</form>
	);
}

export default PetitionForm;
