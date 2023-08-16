import './style.css';
import { Item } from '../../types/item';
import { ItemList } from '../Item';
interface PropsList {
  list: Item[];
}
export const List = ({ list }: PropsList) => {
  const listIverse = [...list].reverse();
  return (
    <>
      <div className="list">
        <div className="title-list">
          <h2>Histórico de transações</h2>
        </div>
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
        <div className="items-list">
          {listIverse.map((obj, index) => {
            return (
              <ItemList
                key={index}
                name={obj.name}
                date={obj.date}
                category={obj.category}
                value={obj.value}
                type={obj.type}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
