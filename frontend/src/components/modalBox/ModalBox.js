import { h } from 'preact';
import style from './style.css';
import cancelIcon from '../../assets/home-icons/cancel.png';
import ModifyFieldsTable from './modifyFieldsTable';

const ModalBox = ({ heading, setIsOpen }) => {
	return (
		<>
			<div className={style.darkBG} onClick={() => setIsOpen(false)} />
			<div className={style.centered}>
				<div className={style.modal}>
					<div className={style.modalHeader}>
						<h5 className={style.heading}>{heading}</h5>
					</div>
					<button className={style.closeBtn} onClick={() => setIsOpen(false)}>
						<img src={cancelIcon} style={{ height: '20px' }} />
					</button>
					<div className={style.modalContent}>
						<ModifyFieldsTable />
					</div>
					<div className={style.modalActions}>
						<div className={style.actionsContainer}>
							<button className={style.deleteBtn} onClick={() => setIsOpen(false)}>
								Upload
							</button>
							<button className={style.cancelBtn} onClick={() => setIsOpen(false)}>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ModalBox;
