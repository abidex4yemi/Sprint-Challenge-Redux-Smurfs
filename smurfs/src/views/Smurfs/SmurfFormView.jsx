import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
		<StyledForm>
			<h2>{props.id ? 'Edit Smurf' : 'Add Smurf'}</h2>
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
		</StyledForm>
	);
};

const mapStateToProps = state => {
	return {
		smurfs: state.smurfReducer.smurfs
	};
};

export default connect(mapStateToProps, { addSmurf, updateSmurf })(SmurfFormView);

const StyledForm = styled.div`
	h2 {
		margin-bottom: 30px;
	}

	input {
		width: 300px;
		border: 0;
		padding: 5px 8px;
		font-size: 1.5rem;
		border: 1px solid #764abc;
		height: 25px;
		border-radius: 5px;
	}

	div {
		margin-bottom: 10px;
	}

	button {
		background: #764abc;
		color: #f4f4f4;
		text-align: center;
		border: 0;
		border-radius: 5px;
		transition: 0.2s;
		width: 320px;
		height: 40px;
		padding: 5px 8px;
		font-size: 2rem;
		cursor: pointer;

		&:hover {
			color: #f4f4f4;
		}
	}
`;
