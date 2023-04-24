import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }: any) => {
  const taskTableRows = (doneValue: any) => {
    return tasks
      .filter((task: any) => task.done === doneValue)
      .map((task: any) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };
  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>

      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
