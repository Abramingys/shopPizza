
import './App.scss';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';



function App() {


  return (
    <>
      <div className='header-footer-wrapper'>
        <Header />
      </div>
      <div className='main-wrapper'>
        <div className='page-content'>
          <Categories />
        </div>
      </div>
      <div className='header-footer-wrapper'>
        <Footer />
      </div>

    </>
  );
}

export default App;
