import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FormBook from './pages/formBook';
import Emprestimo from './pages/emprestimo';
import Home from './pages/home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Cadastro_Livro' element={<FormBook/>}></Route>
        <Route path='/Emprestimo' element={<Emprestimo/>}></Route>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
