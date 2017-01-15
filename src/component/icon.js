import {createElement} from 'react';

const Icon = ({name, size}) => (
  	<i className={`fa ${name} ${size}`} aria-hidden="true"></i>
);

export default Icon;