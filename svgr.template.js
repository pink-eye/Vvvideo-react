const customTemplate = ({ componentName, jsx, exports }, { tpl }) => {
	const componentNameWithType = `${componentName}: FC<IconComponent>`;

	return tpl`
	  import { FC, memo } from 'react';
	  import { IconComponent } from '../types';

	  const ${componentNameWithType} = ({ color = '#000', ...props }) => {
		return ${jsx}
	  };

	  ${exports}
	`;
};

module.exports = customTemplate;
