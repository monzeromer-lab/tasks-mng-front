export interface TaskProps {
  title: string;
  desc: string;
  due_date: string;
  completed: boolean;
  category: string;
}
export function Task(props: TaskProps) {
  return (
    <div className="flex flex-row items-center justify-center w-11/12 h-fit bg-white m-2 rounded-2xl text-black p-2">
      <div className=" w-11/12 flex flex-row items-center justify-around">
        <div className="w-10/12 flex flex-col justify-center">
          <h1 className="text-lg">{props.title}</h1>
          <p className="text-base">{props.desc}</p>
          <span className="text-sm">{props.due_date}</span>
          <span className=" text-xs">{props.category}</span>
        </div>
        <div className="flex flex-row w-2/12 items-center justify-around">
          <input type="checkbox" className="flex flex-row items-center justify-center rounded-xl" name="" defaultChecked={props.completed} id="" />
          <button className="material-symbols-rounded p-2 h-8 w-8 flex flex-row items-center justify-center text-white rounded-xl bg-green-700">edit</button>
        </div>
      </div>
    </div>
  );
}
