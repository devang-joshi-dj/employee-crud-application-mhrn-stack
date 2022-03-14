import { h } from 'preact';
import style from './style.css';

const AlertTypo = ({ children }) => <span class={style.alertText}>{children}</span>;

export default AlertTypo;
