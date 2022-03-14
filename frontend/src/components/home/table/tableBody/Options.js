import { h } from 'preact';
import style from './style.css';
import optionIcon from '../../../../assets/home-icons/option.png';
import axios from 'axios';

const Options = ({ id, deleteStat, getAllRecords }) => {
	const setDeleteStatus = (id, status) => {
		axios.put(`/api/employee/${id}/${status}`).then(() => {
			getAllRecords();
		});
	};

	return (
		<td class={style.popoverWrapper}>
			<img class={style.img} src={optionIcon} alt="option" />
			<div class={style.popoverContent}>
				<button class={style.popoverButton}>Edit</button>
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
	);
};

export default Options;
