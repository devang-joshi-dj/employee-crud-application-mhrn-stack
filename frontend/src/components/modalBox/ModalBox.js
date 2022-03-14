import { h } from 'preact';
import style from './style.css';
import cancelIcon from '../../assets/home-icons/cancel.png';
import NewRecordInsertTable from './newRecordInsertTable';
import EditRecordInsertTable from './editRecordInsertTable';

const ModalBox = ({ heading, setIsOpen, modalStatus, getAllRecords, employee, id }) => {
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
					{modalStatus === 'edit' ? (
						<EditRecordInsertTable
							id={id}
							employee={employee}
							setIsOpen={setIsOpen}
							getAllRecords={getAllRecords}
						/>
					) : (
						<NewRecordInsertTable setIsOpen={setIsOpen} getAllRecords={getAllRecords} />
					)}
				</div>
			</div>
		</>
	);
};

export default ModalBox;
