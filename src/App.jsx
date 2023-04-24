import './App.css'
import FirstScreen from './sections/FirstScreen';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Reviews from './sections/Reviews';
import Services from './sections/Services';

function App() {

  return (
    <div>
			<Header />
			<FirstScreen />
			<Services />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App;
