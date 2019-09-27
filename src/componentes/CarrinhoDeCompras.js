import React from 'react';
import {Link} from 'react-router-dom';
import ListaDeProdutos from './ListaDeProdutos';

var indice = 0;

function CarrinhoDeCompras({itens,onRemover}) {
  function ItemDoCarrinho(produto, index) {    
    return (
      <tr>
        <th scope="row"  key={index}>{index+1}</th>
        <td>{produto.nome}</td>
        <td>R$ {produto.valor.toFixed(2)}</td>
        <td>
          <button  type="button" class="btn btn-danger" onClick={() => onRemover(index)}>
            Remover
          </button>
        </td>
      </tr>

      // <li key={index}>
      //   {produto.nome} - R$ {produto.valor.toFixed(2)}
      //   &nbsp; 
      //   <button onClick={() => onRemover(index)}>
      //     Remover
      //   </button>
      // </li>
    );
  }

  function calculaTotal() {
    var total = 0;
    itens.forEach((produto) => total += produto.valor);
    return (<h3>Total R$ {total.toFixed(2)}</h3>)
  }
  return (
    <>
      <p></p>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page" style={{fontSize: '25px', fontweight: 'bold'}}>Carrinho de Compras</li>
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
        <tbody>{itens.map(ItemDoCarrinho)}</tbody>
      </table>
      <Link to={'/'}><button type="button" class="btn btn-primary">Voltar</button></Link>
      {/* <ul>{itens.map(ItemDoCarrinho)}</ul> */}
      {calculaTotal()}
    </>
  );
}

export default CarrinhoDeCompras;