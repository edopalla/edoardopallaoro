import { Overview } from "./components/Overview";
import { projects } from "./lib/projects";

export default function Home() {
  return <Overview projects={projects} />;
}
