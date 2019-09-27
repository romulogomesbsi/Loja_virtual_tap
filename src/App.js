import React, {useState} from 'react';
import CarrinhoDeCompras 
  from './componentes/CarrinhoDeCompras';
import ListaDeProdutos 
  from './componentes/ListaDeProdutos';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [produtos, setProdutos] = useState([
    {id: 1, nome: 'Cadeira', valor: 150.0},
    {id: 2, nome: 'Mouse', valor: 30.0},
    {id: 3, nome: '2 Big Mac', valor: 14.90}
  ]);
  const [carrinho, setCarrinho] = useState([]);
  
  function onComprar(produto) {
    setCarrinho([...carrinho, produto]);
  }
  
  function onRemover(indice) {
    setCarrinho([...carrinho.slice(0,indice), ...carrinho.slice(indice + 1)]);
  }

  
  return (
    <>
    <BrowserRouter>
      <Route path="/" exact><ListaDeProdutos itens={produtos} onComprar={onComprar}/></Route>    
      <Route path="/carrinho"><CarrinhoDeCompras itens={carrinho} onRemover={onRemover}/></Route>
    </BrowserRouter>
      {/* <CarrinhoDeCompras itens={carrinho} onRemover={onRemover}/>
      <ListaDeProdutos itens={produtos} onComprar={onComprar}/> */}
    </>
  );
}

export default App;
