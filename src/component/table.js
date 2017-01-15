import {createElement} from 'react';
import styles from './styles.css';
import map from 'lodash/fp/map';

const Table = ({model}) => (
		<table className={styles.productsTable}>
			<thead>
				<tr>
					{map((item) => <td>{item}</td>, model.headers)}
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
				</tr>	
			</tbody>
		</table>
)

export default Table;
