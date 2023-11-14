import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FormBook from './pages/formBook';
import Emprestimo from './pages/emprestimo';
import Home from './pages/home';
import Books from './pages/books';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Cadastro_Livro' element={<FormBook/>}></Route>
        <Route path='/Emprestimo' element={<Emprestimo/>}></Route>    
        <Route path='/Livros' element={<Books/>}></Route>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
