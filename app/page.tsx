import { HomeView } from "./components/HomeView";
import { projects } from "./lib/projects";

export default function Home() {
  return <HomeView projects={projects} />;
}
