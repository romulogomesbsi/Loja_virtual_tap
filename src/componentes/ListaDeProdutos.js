import React from 'react';
import {Link} from 'react-router-dom';


function ListaDeProdutos({itens, onComprar}) {
  function ItemDaLista(produto) {
    return (

      <tr>
        {/* <th scope="row" >{ItemDaLista}</th> */}
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.valor.toFixed(2)}</td>
        <td>
        <button type="button" class="btn btn-primary" onClick={() => onComprar(produto)}>
          Comprar
        </button>
        </td>
      </tr>

      // <li>
      //   {produto.nome} - R$ {produto.valor.toFixed(2)}
      //   &nbsp; 
      //   <button onClick={() => onComprar(produto)}>
      //     Comprar
      //   </button>
      // </li>
    );
  }
  
  return (
    <>
      {/* <h1>Lista De Produtos</h1> */}
      <p></p>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page" style={{fontSize: '25px', fontweight: 'bold'}}>Lista De Produtos</li>
          <li>
            <Link to={'/carrinho'}><button type="button" class="btn btn-primary" >
          Carrinho
        </button></Link>
          </li>
        </ol>
      </nav>
      <p></p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Descrição</th>
            <th scope="col">Preço</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>{itens.map(ItemDaLista)}</tbody>
      </table>
      {/* <ul>{itens.map(ItemDaLista)}</ul> */}
    </>
  );
}

export default ListaDeProdutos;
