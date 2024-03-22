import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { DummyTasks } from "./dummy/tasks.dummy";
import { TasksSection } from "./section/Tasks";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center w-full bg-slate-200 relative">
        <Header />
        <TasksSection tasks={DummyTasks} />
        <Footer />
      </main>
    </>
  );
}
