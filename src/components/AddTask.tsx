// src/components/AddTask.tsx
import type { FormEvent } from "react";
import "./AddTask.css";

type AddTaskProps = {
	inputTask: string;
	setInputTask: (task: string) => void;
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
const AddTask = ({ inputTask, setInputTask, handleSubmit }: AddTaskProps) => {
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="Add New Task"
					value={inputTask}
					onChange={(e) => setInputTask(e.target.value)}
				/>
				<button disabled={inputTask.length === 0}>Submit</button>
			</form>
		</div>
	);
};

export default AddTask;
