import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';
import FilterIcon from '../../../../assets/home-icons/filter.png';
import ModalBox from '../../../modalBox';

const TableHeading = ({ employeesCount, getAllRecords, setShowFilterBox }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div class={style.tableHeading}>
				<h2>
					Employees ({employeesCount}){' '}
					<img src={FilterIcon} onClick={() => setShowFilterBox(prev => !prev)} alt="Option" />
				</h2>
				<div>
					<button class={style.button} onClick={() => setIsOpen(true)}>
						New Employee
					</button>
				</div>
			</div>
			{isOpen && (
				<ModalBox getAllRecords={getAllRecords} heading="Add New User" setIsOpen={setIsOpen} />
			)}
		</>
	);
};

export default TableHeading;
