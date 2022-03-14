import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';
import { validateEmail, validatePhone, phoneInputPattern } from '../../../utils/validateObject';
import AlertTypo from '../../Typo/AlertTypo';
import axios from 'axios';

const ModifyFieldsTable = () => {
	const recordDefaultValue = {
		firstName: '',
		lastName: '',
		email: '',
		mobile: '',
		gender: '',
		Designation: '',
		salary: '',
		employeeCode: '',
		dateOfJoining: '',
		reportingManager: '',
		location: '',
		state: '',
		country: '',
		department: '',
	};

	const errorsDefaultValue = {
		firstName: '',
		lastName: '',
		email: '',
		mobile: '',
		gender: '',
		salary: '',
		employeeCode: '',
		accountExists: false,
	};

	const [recordData, setRecordData] = useState(recordDefaultValue);
	const [errors, setErrors] = useState(errorsDefaultValue);
	const [mainErrorIndicator, setMainErrorIndicator] = useState('');

	useEffect(() => {
		console.log(recordData);
	}, [recordData]);

	const handleChange = (e, param) => {
		if (e)
			setRecordData(prevState => {
				var newState = {};
				newState[param] = e.target ? e.target.value : e;
				return { ...prevState, ...newState };
			});
	};

	const handleErrors = (message, param) => {
		setErrors(prevState => {
			var newState = {};
			newState[param] = message;
			return { ...prevState, ...newState };
		});
	};

	useEffect(() => {
		// to remove errors which are no longer required in real time

		const checkErrors =
			errors.firstName ||
			errors.lastName ||
			errors.email ||
			errors.mobile ||
			errors.gender ||
			errors.salary ||
			errors.employeeCode ||
			errors.accountExists;

		if (recordData.firstName) handleErrors('', 'firstName');
		if (recordData.lastName) handleErrors('', 'lastName');
		if (validateEmail(recordData.email)) handleErrors('', 'email');
		if (validatePhone(recordData.mobile)) handleErrors('', 'mobile');
		if (recordData.gender) handleErrors('', 'gender');
		if (recordData.salary.length === 0 || !isNaN(recordData.salary)) handleErrors('', 'salary');
		if (recordData.employeeCode.length === 0 || !isNaN(recordData.employeeCode))
			handleErrors('', 'employeeCode');
		if (!checkErrors) setMainErrorIndicator('');
		else setMainErrorIndicator('You have got some errors to deal with');
	}, [
		errors.firstName,
		errors.lastName,
		errors.email,
		errors.mobile,
		errors.gender,
		errors.salary,
		errors.employeeCode,
		recordData,
	]);

	const validate = async () => {
		setErrors(errorsDefaultValue);
		setMainErrorIndicator('');
		let tempErr = errorsDefaultValue;

		if (!recordData.firstName) tempErr.firstName = 'Please enter your first name';
		if (!recordData.lastName) tempErr.lastName = 'Please enter your last name';
		if (!recordData.email) tempErr.email = 'Please enter your email address';
		else if (recordData.email && !validateEmail(recordData.email))
			tempErr.email = 'Please enter a valid email address';
		if (!recordData.mobile) tempErr.mobile = 'Please enter your mobile number';
		else if (!validatePhone(recordData.mobile))
			tempErr.mobile = 'Please enter a valid phone number';
		if (!recordData.gender) tempErr.gender = 'Please enter your gender';
		if (isNaN(recordData.salary)) tempErr.salary = 'Please enter a valid salary';
		if (isNaN(recordData.employeeCode)) tempErr.employeeCode = 'Please enter a employee code';

		if (
			tempErr.firstName ||
			tempErr.lastName ||
			tempErr.email ||
			tempErr.mobile ||
			tempErr.gender ||
			tempErr.salary ||
			tempErr.employeeCode
		) {
			setErrors(tempErr);
			setMainErrorIndicator('You have got some errors to deal with');
			return false;
		}
		return true;
	};

	const handleSubmit = async () => {
		const create = async () => {
			const flag = await validate();
			if (flag) {
				// const documentExists = await checkDocument(['leads', recordData.phone]);
				if (!documentExists) {
				} else {
				}
			}
		};

		create();
	};

	return (
		<>
			<div className={style.modalContent}>
				<table class={style.table}>
					<tr>
						<th>Label</th>
						<th>Value</th>
					</tr>
					<tr>
						<td>First Name</td>
						<td>
							<input
								type="text"
								name="firstName"
								value={recordData.firstName}
								onInput={e => handleChange(e, 'firstName')}
							/>
						</td>
					</tr>
					<tr>
						<td colspan="2">{errors.firstName && <AlertTypo>{errors.firstName}</AlertTypo>}</td>
					</tr>
					<tr>
						<td>Last Name</td>
						<td>
							<input
								type="text"
								name="lastName"
								value={recordData.lastName}
								onInput={e => handleChange(e, 'lastName')}
							/>
						</td>
					</tr>
					<tr>
						<td colspan="2">{errors.lastName && <AlertTypo>{errors.lastName}</AlertTypo>}</td>
					</tr>
					<tr>
						<td>Email</td>
						<td>
							<input
								type="email"
								name="Email"
								value={recordData.email}
								onInput={e => {
									handleChange(e, 'email');
									handleErrors(false, 'accountExists');
								}}
							/>
						</td>
					</tr>
					<tr>
						<td colspan="2">{errors.email && <AlertTypo>{errors.email}</AlertTypo>}</td>
					</tr>
					<tr>
						<td>Mobile</td>
						<td>
							<input
								type="text"
								name="mobile"
								value={recordData.mobile}
								onInput={e => {
									if (phoneInputPattern.test(e.target.value)) handleChange(e, 'mobile');
									else e.preventDefault();
									handleErrors(false, 'accountExists');
								}}
							/>
						</td>
					</tr>
					<tr>
						<td colspan="2">{errors.mobile && <AlertTypo>{errors.mobile}</AlertTypo>}</td>
					</tr>
					<tr>
						<td>Gender</td>
						<td>
							<input
								type="text"
								name="gender"
								value={recordData.gender}
								onInput={e => handleChange(e, 'gender')}
							/>
						</td>
					</tr>
					<tr>
						<td colspan="2">{errors.gender && <AlertTypo>{errors.gender}</AlertTypo>}</td>
					</tr>
					<tr>
						<td>Designation</td>
						<td>
							<input
								type="text"
								name="designation"
								value={recordData.designation}
								onInput={e => handleChange(e, 'designation')}
							/>
						</td>
					</tr>
					<tr>
						<td>Reporting Manager</td>
						<td>
							<input
								type="text"
								name="reportingManager"
								value={recordData.reportingManager}
								onInput={e => handleChange(e, 'reportingManager')}
							/>
						</td>
					</tr>
					<tr>
						<td>Salary (in Rs)</td>
						<td>
							<input
								type="text"
								name="salary"
								value={recordData.salary}
								onInput={e => handleChange(e, 'salary')}
							/>
						</td>
					</tr>
					<tr>
						<td colspan="2">{errors.salary && <AlertTypo>{errors.salary}</AlertTypo>}</td>
					</tr>
					<tr>
						<td>Employee Code</td>
						<td>
							<input
								type="text"
								name="employeeCode"
								value={recordData.employeeCode}
								onInput={e => handleChange(e, 'employeeCode')}
							/>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							{errors.employeeCode && <AlertTypo>{errors.employeeCode}</AlertTypo>}
						</td>
					</tr>
					<tr>
						<td>Location</td>
						<td>
							<input
								type="text"
								name="location"
								value={recordData.location}
								onInput={e => handleChange(e, 'location')}
							/>
						</td>
					</tr>
					<tr>
						<td>State</td>
						<td>
							<input
								type="text"
								name="state"
								value={recordData.state}
								onInput={e => handleChange(e, 'state')}
							/>
						</td>
					</tr>
					<tr>
						<td>Country</td>
						<td>
							<input
								type="text"
								name="country"
								value={recordData.country}
								onInput={e => handleChange(e, 'country')}
							/>
						</td>
					</tr>
					<tr>
						<td>Department</td>
						<td>
							<input
								type="text"
								name="department"
								value={recordData.department}
								onInput={e => handleChange(e, 'department')}
							/>
						</td>
					</tr>
				</table>
			</div>
			<div className={style.modalActions}>
				<div className={style.actionsContainer}>
					{mainErrorIndicator && <AlertTypo>{mainErrorIndicator}</AlertTypo>}
					<button className={style.deleteBtn} onClick={() => handleSubmit()}>
						Upload
					</button>
					<button className={style.cancelBtn} onClick={() => setIsOpen(false)}>
						Cancel
					</button>
				</div>
			</div>
		</>
	);
};

export default ModifyFieldsTable;
