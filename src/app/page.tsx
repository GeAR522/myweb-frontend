import Image from 'next/image';
import NavBar from './components/NavBar';
import CenteredContent from './components/CenteredContent';
import WelcomeBlock from './components/WelcomeBlock';
import About from './components/About';
import Divider from './components/Divider';
import Projects from './components/Projects';
import { ListOfProjects } from './projects/projects';
import Employment from './components/Employment';
import Posts from './components/Posts';

export default function Home() {
  return (
    <main className="flex w-full h-full overflow-y-auto">
      <div className=" overflow-y-auto ">
        <NavBar />
        <div id="main" className="sm:ml-48 text-white">
          <CenteredContent>
            <WelcomeBlock />
            <Divider />
            <About />
            <Divider />
            <Projects projects={ListOfProjects} />
            <Divider />
            <Employment />
            <Divider />
            <Posts />
          </CenteredContent>
        </div>
      </div>
    </main>
  );
}
