import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import AlertMessage from './AlertMessage';

const schema = yup.object().shape({
	navn: yup
		.string()
		.min(2, "Navnet må inneholde minst 2 bokstaver")
		.required("Navnet må fylles ut"),
	epost: yup
		.string()
		.email("Vennligst tast inn gyldig e-post addresse")
		.required("E-post må fylles ut"),
	emne: yup
		.string()
		.min(3, "Emnet må inneholde minst 2 bokstaver")
		.required("Emne må fylles ut"),
	melding: yup
		.string()
		.min(10, "Meldingen må inneholde minst 10 bokstaver")
		.required("Melding må fylles ut")
})

function Contact() {
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	const [validated, setValidated] = useState(false);

	function onSubmit(data, event) {
		console.log("data", data);
		event.target.reset();
		setValidated(true);
	}
	
	return (
		<>
			{validated === true &&
				<AlertMessage />
			}
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="group">
					<label>Navn:</label>
					<input type="text" name="navn" placeholder="Ditt navn" ref={register} />
					{errors.navn && <span className="error">{errors.navn.message}</span>}
				</div>

				<div className="group">
					<label>E-post:</label>
					<input type="text" name="epost" placeholder="Din e-post adresse" ref={register} />
					{errors.epost && <span className="error">{errors.epost.message}</span>}
				</div>

				<div className="group">
					<label>Emne:</label>
					<input type="text" name="emne" placeholder="Emne" ref={register} />
					{errors.emne && <span className="error">{errors.emne.message}</span>}
				</div>

				<div className="group">
					<label>Melding:</label>
					<textarea rows="5" name="melding" placeholder="Din melding" ref={register} />
					{errors.melding && <span className="error">{errors.melding.message}</span>}
				</div>

				<div className="group">
					<button className="btn-main" type="submit">Send</button>
				</div>
			</form>
		</>
	);
}

export default Contact;