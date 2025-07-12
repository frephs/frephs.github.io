import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { QuotesSection } from './components/QuotesSection';
import { ContactsSection } from './components/ContactsSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <title>Frephs</title>
      
      <HeroSection />
      <main className="main-content">
        <ProjectsSection />
        <QuotesSection />
        <ContactsSection />
      </main>
    </div>
  );
}

export default App;
