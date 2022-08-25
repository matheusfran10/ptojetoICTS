import React, { useState } from "react";
import './stylemodal.css';
import Axios from "axios";

function Produtos() {

  const [values, setValues] = useState();
  console.log(values);
  const handChangeValues = (value) => {
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
  }));
  };

  const handClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      nome: values.nome,
      quantidade: values.quantidade,
      valor: values.valor,
      data: values.data,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <main className="container">
      <div className="main-header">
        <button className="btn-new-comp">Novo Produto</button>
        <span className="total-comp">
          <span id="count-comp">0</span> Produtos resgistradas
        </span>
      </div>

      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Data</th>
            <th>Ações</th>
            <th>Auteração</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TV Samsung</td>
            <td>22/08/2022</td>
            <td>
              <a href="#">lixo</a>
            </td>
            <td>
              <a href="*">Editar</a>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="modal-background" id="modal">
        <article className="modal-container">
          <h2 className="title">Novo Produto</h2>

          <form id="form">
            <div className="form-group">
              <label for="nome">Nome do produto</label>
              <input type="text"  autocomplete="off" id="nome" 
              onChange={handChangeValues}/>
            </div>
            <div className="form-group">
              <label for="number">Quantidade</label>
              <input type="number" id="quantidade" onChange={handChangeValues} />
            </div>
            <div className="form-group-dt">
              <div>
                <label for="number">Valor</label>
                <input type="number" id="valor" onChange={handChangeValues}/>

                <label for="date"> Data</label>
                <input type="date" id="data" onChange={handChangeValues}/>
              </div>
            </div>

            <div className="buttons-modal">
              <button className="btn-cancel" type="button" >
                Cancelar
              </button>
              <button className="btn-final" type="submit" onClick={()=> 
              handClickButton()}>
                Finalizar
              </button>
            </div>
          </form>
        </article>
      </div>
    </main>
  );
}

export default Produtos;
