import { BsTrash } from "react-icons/fa";
import { useState } from "react";
import "./style.css";
import "./modalcompras.css";

function Compras() {
  const [values, setValues] = useState();
  console.log(values);
  const handChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handClickButton = () => {
    console.log(values);
  };

  return (
    <main className="container">
      <div className="main-header">
        <button className="btn-new-comp">Nova compra</button>
        <span className="total-comp">
          <span id="count-comp">0</span> compras resgistradas
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

      <div className="modal-c-background" id="modal">
        <article className="modal-c-container">
          <h2 className="title">Nova compra</h2>

          <form id="form-c">
            <div className="form-c-group">
              <label for="description">Descrição da compra</label>
              <input type="text" placeholder="Descrição" id="description" 
              />
            </div>
            <div className="form-c-group">
              <label for="number">Quantidade</label>
              <input type="number" id="quantidade" />
            </div>
            <div className="form-c-group-dt">
              <div>
                <label for="number">Valor</label>
                <input type="number" id="value" />

                <label for="date"> Data</label>
                <input type="date" id="date" />
              </div>
            </div>

            <div className="buttons-modal-c">
              <button className="btn-cancel" type="button">
                Cancelar
              </button>
              <button className="btn-final" type="submit" onClick={() => 
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

export default Compras;
