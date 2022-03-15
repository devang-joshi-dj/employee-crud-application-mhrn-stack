import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import style from './style.css';
import { validateEmail, validatePhone } from '../../../utils/validateObject';
import AlertTypo from '../../Typo/AlertTypo';
import TableTemplate from '../tableTemplate';
import axios from 'axios';

const NewRecordInsertTable = ({ setIsOpen, getAllRecords }) => {
	const recordDefaultValue = {
		FirstName: '',
		LastName: '',
		Email: '',
		Mobile: '',
		Gender: '',
		Designation: '',
		Salary: '',
		EmployeeCode: '',
		DateOfJoining: '',
		ReportingManager: '',
		Location: '',
		State: '',
		Country: '',
		Department: '',
	};

	const errorsDefaultValue = {
		firstName: '',
		lastName: '',
		email: '',
		mobile: '',
		gender: '',
		salary: '',
		employeeCode: '',
	};

	const [recordData, setRecordData] = useState(recordDefaultValue);
	const [errors, setErrors] = useState(errorsDefaultValue);
	const [mainErrorIndicator, setMainErrorIndicator] = useState('');

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
			errors.employeeCode;

		if (recordData.FirstName) handleErrors('', 'firstName');
		if (recordData.LastName) handleErrors('', 'lastName');
		if (validateEmail(recordData.Email)) handleErrors('', 'email');
		if (validatePhone(recordData.Mobile)) handleErrors('', 'mobile');
		if (recordData.Gender) handleErrors('', 'gender');
		if (recordData.Salary.length === 0 || (!isNaN(recordData.Salary) && recordData.Salary > 0))
			handleErrors('', 'salary');
		if (
			recordData.EmployeeCode.length === 0 ||
			(!isNaN(recordData.EmployeeCode) && recordData.EmployeeCode > 0)
		)
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

		if (!recordData.FirstName) tempErr.firstName = 'Please enter your first name';
		if (!recordData.LastName) tempErr.lastName = 'Please enter your last name';
		if (!recordData.Email) tempErr.email = 'Please enter your email address';
		else if (recordData.Email && !validateEmail(recordData.Email))
			tempErr.email = 'Please enter a valid email address';
		if (!recordData.Mobile) tempErr.mobile = 'Please enter your mobile number';
		else if (!validatePhone(recordData.Mobile))
			tempErr.mobile = 'Please enter a valid phone number';
		if (!recordData.Gender) tempErr.gender = 'Please enter your gender';
		if (isNaN(recordData.Salary) || Number(recordData.Salary) < 0)
			tempErr.salary = 'Please enter a valid salary';
		if (isNaN(recordData.EmployeeCode) || Number(recordData.EmployeeCode) < 0)
			tempErr.employeeCode = 'Please enter a employee code';

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
				axios({
					method: 'post',
					url: '/api/employee',
					data: recordData,
				})
					.then(res => {
						setIsOpen(false);
						setRecordData(recordDefaultValue);
						getAllRecords();
					})
					.catch(err => {
						throw err;
					});
			}
		};

		create();
	};

	return (
		<>
			<div className={style.modalContent}>
				<TableTemplate recordData={recordData} errors={errors} handleChange={handleChange} />
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

export default NewRecordInsertTable;
