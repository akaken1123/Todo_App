// src/components/TaskList.tsx
import type { Task } from "../types";
import "./TaskList.css";

type TaskListProps = {
	taskList: Task[];
	handleTaskChange: (id: number) => void;
	handleRemoveTask: (id: number) => void;
	handleAllRemoveTask: (tasks: Task[]) => void;
};

const TaskList = ({
	taskList,
	handleTaskChange,
	handleRemoveTask,
	handleAllRemoveTask,
}: TaskListProps) => {
	return (
		<ul>
			{taskList.length === 0 ? (
				<p>タスクを追加してください</p>
			) : (
				taskList.map((task) => (
					<li key={task.id}>
						<input
							type="checkbox"
							checked={task.isDone}
							onChange={() => handleTaskChange(task.id)}
						/>
						<span
							style={{ textDecoration: task.isDone ? "line-through" : "none" }}
						>
							{task.name}
						</span>
						<button
							className="danger"
							onClick={() => handleRemoveTask(task.id)}
						>
							☓
						</button>
					</li>
				))
			)}
			<button
				className="danger delete"
				onClick={() =>
					handleAllRemoveTask(taskList.filter((task) => task.isDone))
				}
			>
				delete all
			</button>
		</ul>
	);
};

export default TaskList;
