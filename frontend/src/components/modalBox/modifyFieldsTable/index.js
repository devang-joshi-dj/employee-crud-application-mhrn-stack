import { h } from 'preact';
import style from './style.css';

const ModifyFieldsTable = () => {
	return (
		<table class={style.table}>
			<tr>
				<th>Label</th>
				<th>Value</th>
			</tr>
		</table>
	);
};

export default ModifyFieldsTable;
