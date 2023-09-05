
import './App.scss';

import Header from './components/Header/Header';
import Categories from './components/categories/Categories';



function App() {


  return (
    <>
      <div className='header-wrapper'>
        <Header />
      </div>
      <div className='main-wrapper'>
        <div className='page-content'>
          <Categories />
        </div>
      </div>

    </>
  );
}

export default App;
