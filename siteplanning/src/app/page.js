import './globals.css';
import { Wireframe } from "./Components/TopNavbar/topnavbar.jsx";
import { Openmap } from "./Components/OpenButton/openbutton.jsx";

export default function Home() {
  return (
    <main className="bg-white min-h-screen"> 
      <Wireframe />
      <div className="flex justify-center mt-6">
      <Openmap />
      </div>
    </main>
  );
}
