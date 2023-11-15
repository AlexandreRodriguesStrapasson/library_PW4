import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import InputBook from './pages/inputBook';
import Emprestimo from './pages/emprestimo';
import UpdateBook from './pages/updateBook';
import Home from './pages/home';
import Books from './pages/books';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Cadastro_Livro' element={<InputBook/>}></Route>
        <Route path='/Atualiza_Livro' element={<UpdateBook/>}></Route>
        <Route path='/Emprestimo' element={<Emprestimo/>}></Route>    
        <Route path='/Livros' element={<Books/>}></Route>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
