import { Overview } from "./components/Overview";
import { projects } from "./lib/content";

export default function Home() {
  return <Overview projects={projects} />;
}
