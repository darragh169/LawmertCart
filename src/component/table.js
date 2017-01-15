import {createElement} from 'react';
import styles from './styles.css';
import map from 'lodash/fp/map'; 

const Table = ({model, data}) => (
		<table className={styles.productsTable}>
			<thead>
				<tr>
					{map((item) => <td key={item}>{item}</td>, model.headers)}
				</tr>
			</thead>
			<tbody>
				<tr>
					{map((item) => <td key={item.id}></td>, data)}
				</tr>	
			</tbody>
		</table>
)

export default Table;


/*{map((item) => <td key={item.id}>{item}</td>, data)}*/