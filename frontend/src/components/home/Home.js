import { h } from 'preact';
import style from './style.css';
import Table from './table';

const Home = () => (
	<div class={style.home}>
		<Table />
	</div>
);

export default Home;
