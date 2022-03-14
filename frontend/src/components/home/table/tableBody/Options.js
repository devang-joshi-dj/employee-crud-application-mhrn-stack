import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';
import optionIcon from '../../../../assets/home-icons/option.png';
import ModalBox from '../../../modalBox';
import axios from 'axios';

const Options = ({ id, employee, deleteStat, getAllRecords }) => {
	const [isOpen, setIsOpen] = useState(false);

	const setDeleteStatus = (id, status) => {
		axios.put(`/api/employee/${id}/${status}`).then(() => {
			getAllRecords();
		});
	};

	return (
		<>
			<td class={style.popoverWrapper}>
				<img class={style.img} src={optionIcon} alt="option" />
				<div class={style.popoverContent}>
					<button class={style.popoverButton} onClick={() => setIsOpen(true)}>
						Edit
					</button>
					<button
						class={style.popoverButton}
						onClick={() => {
							const status = deleteStat === null ? 'Deactivate' : 'Activate';
							setDeleteStatus(id, status);
						}}
					>
						{deleteStat === null ? 'Deactivate' : 'Activate'}
					</button>
				</div>
			</td>
			{isOpen && (
				<ModalBox
					id={id}
					setIsOpen={setIsOpen}
					employee={employee}
					getAllRecords={getAllRecords}
					heading="Edit User"
					modalStatus="edit"
				/>
			)}
		</>
	);
};

export default Options;
