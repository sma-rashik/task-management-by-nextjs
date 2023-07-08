import { ITask } from "@/types";

interface TaskProps {
  task: ITask;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td>Kha</td>
    </tr>
  );
};

export default Task;
