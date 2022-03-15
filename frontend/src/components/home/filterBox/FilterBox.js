import { h } from 'preact';
import style from './style.css';

const FilterBox = () => (
	<div class={style.filterBox}>
		<h2>Filter Box</h2>
		<div class={style.filterGrid}>
			<div>
				<div>First Name</div>
				<div>
					<input type="text" />
				</div>
			</div>
			<div>
				<div>Last Name</div>
				<div>
					<input type="text" />
				</div>
			</div>
			<div>
				<div>Department</div>

				<div>
					<input type="text" />
				</div>
			</div>
			<div>
				<div>Email</div>

				<div>
					<input type="text" />
				</div>
			</div>
			<div>
				<div>Gender</div>

				<div>
					<input type="text" />
				</div>
			</div>
			<div>
				<div>Designation</div>

				<div>
					<input type="text" />
				</div>
			</div>
			<div>
				<div>Reporting Manager</div>
				<div>
					<input type="text" />
				</div>
			</div>
			<div>
				<div>Location</div>
				<div>
					<input type="text" />
				</div>
			</div>
		</div>
	</div>
);

export default FilterBox;
