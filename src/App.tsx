import React, { FunctionComponent,} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PokemonList from './pages/Pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PokemonEdit from './pages/pokemon-edit';
import PageNotFound from './pages/page-not-found';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';

const App: FunctionComponent = () => {
  
 return (
<BrowserRouter>
<div>
<nav>
   <div className='nav-wrapper teal'>
<Link to="/" className="brand-logo center">Pokédex </Link>
   </div>
</nav>
<Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/pokemons' element={<PokemonList/>}/>
      <Route path='/pokemon/add' element={<PokemonAdd/>}/>
      <Route path='/pokemons/:id' element={<PokemonsDetail/>}/>
      <Route path='/pokemons/edit/:id' element={<PokemonEdit/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
</Routes>
</div>
</BrowserRouter>  
 )
}
  
export default App;