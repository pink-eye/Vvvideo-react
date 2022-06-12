import { FC, useState, memo, KeyboardEvent, ChangeEvent } from 'react';
import { Input } from '../Input';

interface Props {
	className?: string;
	onSearch?: (value: string) => void;
	onChange?: (value: string) => void;
	onReset?: () => void;
}

export const SearchInput: FC<Props> = memo(
	({ onReset, onSearch, className, onChange }) => {
		const [searchValue, setSearchValue] = useState('');

		const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
			setSearchValue(event.currentTarget.value);
			onChange?.(event.currentTarget.value);
		};

		const clearSearchValue = () => {
			setSearchValue('');
			onReset?.();
		};

		const search = () => {
			if (searchValue) onSearch?.(searchValue);
		};

		const handleKeyPress = (event: KeyboardEvent) => {
			if (event.code === 'Enter') search();
		};

		return (
			<Input
				onChange={handleSearch}
				onKeyDown={handleKeyPress}
				className={className}
			/>
		);
	},
);
