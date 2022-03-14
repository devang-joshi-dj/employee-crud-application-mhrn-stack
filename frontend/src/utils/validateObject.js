const validateEmail = email => {
	const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	return emailRegex.test(email);
};

const validatePhone = number => {
	const completePhoneValidationPattern = /^[1-9]\d{9}$|^[1-9]\d{9}$/;
	return completePhoneValidationPattern.test(number);
};

export { validateEmail, validatePhone };
