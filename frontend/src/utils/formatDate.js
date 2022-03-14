const getDateStr = dateStr => {
	// function to convert date object to string from mongodb

	const dateObj = new Date(dateStr);
	const date = dateObj.getDate();
	const month = dateObj.getMonth() + 1;
	const year = dateObj.getFullYear();
	return `${date}-${month}-${year}`;
};

export { getDateStr };
