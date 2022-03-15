import { h } from 'preact';
import style from './style.css';
import Table from './table';
import FilterBox from './filterBox';

const Home = () => (
	<div class={style.home}>
		<FilterBox />
		<Table />
	</div>
);

export default Home;
