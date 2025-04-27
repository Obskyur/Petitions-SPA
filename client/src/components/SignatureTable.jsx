import React from "react";
import "./SignatureTable.css";

function SignatureTable({ signatures }) {
	return (
		<div className="signatures-section">
			<h2>Signatures</h2>
			<table className="signatures-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>City</th>
						<th>State</th>
					</tr>
				</thead>
				<tbody>
					{signatures.map((sig, index) => (
						<tr key={index}>
							<td>{sig.name}</td>
							<td>{sig.city}</td>
							<td>{sig.state}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default SignatureTable;
