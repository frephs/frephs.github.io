import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CourseworkSection } from "./components/CourseworkSection";
import { CVSection } from "./components/CVSection";
import { QuotesSection } from "./components/QuotesSection";
import { ContactsSection } from "./components/ContactsSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <main className="main-content">
        <CVSection />
        <ProjectsSection />
        <CourseworkSection />
        <QuotesSection />
        <ContactsSection />
      </main>
    </div>
  );
}

export default App;
