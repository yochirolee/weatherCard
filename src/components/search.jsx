import { useForm } from "../hooks/useForm";

export const Search = ({ onSearch }) => {
	const { formState, onInputChange, onResetForm } = useForm({ search: "" });
	const { search } = formState;

	const onFormSubmit = (event) => {
		event.preventDefault();
		if (search.length <= 1) return;
		onSearch(search);
		onResetForm();
	};
	return (
		<form onSubmit={onFormSubmit} className="mx-auto">
			<input
				type="text"
				placeholder="Enter a City"
				className="rounded-xl  mt-4 h-8 p-2 text-gray-500 outline-none"
				name="search"
				value={search}
				onChange={onInputChange}
			></input>
		</form>
	);
};
