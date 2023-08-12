import './style.css';
export const List = () => {
  return (
    <>
      <div className="list">
        <div className="title-list">
          <h2>Histórico de transações</h2>
        </div>
        <table className="tb-list-trans">
          <thead className="t-head">
            <tr className="tr-header">
              <th className="th-header">Nome</th>
              <th className="th-header">Data</th>
              <th className="th-header">Categoria</th>
              <th className="th-header">Valor</th>
            </tr>
            <div className="th-type">
              <span className="th-header">Tipo</span>
            </div>
          </thead>
          <tbody className="t-body">
            <tr className="tr-body">
              <td className="td-body">Venda de celular antigo</td>
              <td className="td-body">01/08/2023</td>
              <td className="td-body">Renda extra</td>
              <td className="td-body">R$ 1.853,12</td>
            </tr>
            <div className="td-type">
              <span className="sp-type">+</span>
            </div>
          </tbody>
        </table>
      </div>
    </>
  );
};
