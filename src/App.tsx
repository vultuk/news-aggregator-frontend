import Footer from 'Components/Footer/Footer';
import Header from 'Components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'Routes/Routes';

const App = () => (
  <Router>
    <Header />
    <Routes />
    <Footer />
  </Router>
);

export default App;
