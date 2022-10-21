//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import {
  BrowserRouter as Router , 
  Route ,
  Routes // instead of Switch from  react-router-dom 6
  
} from 'react-router-dom'; 
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
//import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path='/' element = {<ListEmployeeComponent />}></Route>
              <Route path='/employees' element = {<ListEmployeeComponent />}></Route>
              {/* 
              Use of CreateEmployeeComponent for addEmployee ( id=-1) or updateEmployee (id != -1)
               */}
              <Route path='/add-employee/:id' element={<CreateEmployeeComponent />}></Route>
              {/* <Route path='/update-employee/:id' element={<UpdateEmployeeComponent />}></Route> */}
              <Route path='/view-employee/:id' element={<ViewEmployeeComponent />}></Route>
              
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>

   
  );
}

export default App;
