import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent></HeaderComponent>
              <div className="container">
                <Routes>
                  <Route path='/' element={<ListEmployeeComponents/>} ></Route>
                  <Route path='/employees' element={<ListEmployeeComponents/>} ></Route>
                  <Route exact path='/add-employee' element={<CreateEmployeeComponent/>} ></Route>
                </Routes>
              </div>
          <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}

export default App;
