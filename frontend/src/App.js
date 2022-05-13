import './scss/main.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Pisos from './components/Pisos/Pisos';
import MainPrincipal from './components/Main/MainPrincipal'
function App() {
  return (
    <>
      <Header/>
      <MainPrincipal/>
      <Footer/>
    </>
  );
}

export default App;