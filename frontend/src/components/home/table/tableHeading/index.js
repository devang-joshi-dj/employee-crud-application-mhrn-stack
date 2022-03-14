import { h } from 'preact';
import style from './style.css';

const TableHeading = ({ employeesCount }) => (
	<div class={style.tableHeading}>
		<h2>Employees ({employeesCount})</h2>
		<div>
			<button>New Employee</button>
		</div>
	</div>
);

export default TableHeading;
