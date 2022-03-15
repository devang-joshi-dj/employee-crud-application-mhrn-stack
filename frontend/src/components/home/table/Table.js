import { h } from 'preact';
import style from './style.css';
import TableHeading from './tableHeading';
import TableBody from './tableBody';

const Table = ({ employeesCount, getAllRecords, employees, setShowFilterBox }) => {
	return (
		<div class={style.container}>
			<TableHeading
				employeesCount={employeesCount}
				getAllRecords={getAllRecords}
				setShowFilterBox={setShowFilterBox}
			/>
			<TableBody employees={employees} getAllRecords={getAllRecords} />
		</div>
	);
};

export default Table;
