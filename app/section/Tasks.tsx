import { Task, TaskProps } from "../components/Task";
interface TasksList {
    tasks: TaskProps[]
}
export function TasksSection(props: TasksList) {
  function ListTasks() {
    return props.tasks.map((task) =><Task category={task.category} completed={task.completed} title={task.title} desc={task.desc} due_date={task.due_date}/>);
  }
  return (
    <div className="w-11/12 flex flex-col items-center justify-center">
        <ListTasks/>
    </div>
  );
}
