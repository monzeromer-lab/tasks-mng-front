import Image from "next/image";
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full bg-slate-200">
        <Navigation/>
      </main>
    </>
  );
}
