import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addSmurf, updateSmurf } from '../../redux/actions';
import { Input, Button } from '../../components/Form';

const SmurfFormView = props => {
	const { addSmurf, smurfs, updateSmurf } = props;
	const [form, setFormValues] = useState({
		name: '',
		age: '',
		height: '',
		errors: {}
	});

	useEffect(() => {
		populateForm();
	}, []);

	const populateForm = () => {
		if (props.id) {
			const smurfID = props.id;
			const smurf = smurfs.filter(smurf => `${smurf.id}` === `${smurfID}`);
			const values = smurf[0];
			setFormValues({
				...form,
				name: values.name,
				age: values.age,
				height: values.height
			});
		}
	};

	const inputChange = (field, value) => {
		setFormValues({
			...form,
			[field]: value
		});
	};

	const handleAddSmurf = () => {
		const newSmurf = {
			name: form.name,
			height: form.height,
			age: parseInt(form.age, 10)
		};

		addSmurf(newSmurf).then(() => {
			setFormValues({
				name: '',
				age: '',
				height: '',
				errors: {}
			});
		});
	};

	const handleUpdateSmurf = () => {
		const ID = props.id;
		const updatedSmurf = {
			name: form.name,
			height: form.height,
			age: parseInt(form.age, 10)
		};

		updateSmurf(ID, updatedSmurf).then(() => {
			setFormValues({
				name: '',
				age: '',
				height: '',
				errors: {}
			});
			props.history.push('/');
		});
	};

	return (
		<form>
			<Input
				value={form.name}
				name="name"
				placeholder="Enter Smurf name..."
				inputChange={inputChange}
				type="text"
				error={form.errors.name}
			/>

			<Input
				value={form.age}
				name="age"
				placeholder="Enter Smurf age..."
				inputChange={inputChange}
				type="text"
				error={form.errors.age}
			/>

			<Input
				value={form.height}
				name="height"
				placeholder="Enter Smurf height..."
				inputChange={inputChange}
				type="text"
				error={form.errors.height}
			/>
			{props.id ? (
				<Button buttonText="Update Smurf" onclick={handleUpdateSmurf} type="button" />
			) : (
				<Button buttonText="Add Smurf" onclick={handleAddSmurf} type="button" />
			)}
		</form>
	);
};

const mapStateToProps = state => {
	return {
		smurfs: state.smurfReducer.smurfs
	};
};

export default connect(mapStateToProps, { addSmurf, updateSmurf })(SmurfFormView);
