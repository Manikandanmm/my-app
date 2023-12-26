import React from 'react';

const RadioInput = ({label, value, checked, setter}) => {
	return (
	  <label>
	    <input type="radio" checked={checked == value}
	           onChange={() => setter(value)} />
	    <span>{label}</span>
	  </label>
	);
};
   
const Form = props => {
	const [, setGender] = React.useState();
	const [role, setRole] = React.useState();
	const handleSubmit = e => {
		e.preventDefault();
		const data = {gender, role};
		const json = JSON.stringify(data, null, 4);
		console.clear();
		console.log(json);
	};
	return (
	  <form onSubmit={handleSubmit}>
	    <div>
	      <label>Gender:</label>
	      <RadioInput label="Male" value="male" checked={gender} setter={setGender}  />
	      <RadioInput label="Female" value="female" checked={gender} setter={setGender} />
	    </div>
	    <div>
	      <label>Role:</label>
	      <RadioInput label="Admin" value="admin" checked={role} setter={setRole} />
	      <RadioInput label="User" value="user" checked={role} setter={setRole}  />
	    </div>
	    <button type="submit">Submit</button>
	  </form>
	);
};

export default Form;