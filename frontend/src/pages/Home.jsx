import ProjectsList from "../components/ProjectsList.tsx";
import Header from "../components/Header";
import tabItems from "../data";

export default function Home() {
  return (
    <div>
      <Header />
      <ProjectsList data={tabItems} />
    </div>
  );
}
