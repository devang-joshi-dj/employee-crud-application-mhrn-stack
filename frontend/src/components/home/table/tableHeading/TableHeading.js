import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';
import ModalBox from '../../../modalBox';

const TableHeading = ({ employeesCount }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div class={style.tableHeading}>
			<h2>Employees ({employeesCount})</h2>
			<div>
				<button class={style.button} onClick={() => setIsOpen(true)}>
					New Employee
				</button>
			</div>
			{isOpen && <ModalBox heading="Add New User" setIsOpen={setIsOpen} />}
		</div>
	);
};

export default TableHeading;
