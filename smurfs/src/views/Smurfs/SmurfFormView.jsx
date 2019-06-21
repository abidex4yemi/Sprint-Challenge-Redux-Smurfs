import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../../redux/actions';
import { Input, Button } from '../../components/Form';

const SmurfFormView = props => {
	const { addSmurf } = props;
	const [form, setFormValues] = useState({
		name: '',
		age: '',
		height: '',
		errors: {}
	});

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
			<Button buttonText="Add Smurf" onclick={handleAddSmurf} type="button" />
		</form>
	);
};

export default connect(null, { addSmurf })(SmurfFormView);
