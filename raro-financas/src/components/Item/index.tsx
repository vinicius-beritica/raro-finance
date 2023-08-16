import { Item } from '../../types/item';
import './style.css';

export const ItemList = (props: Item) => {
  const valueNumber = props.value;
  const formatValue = valueNumber.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  return (
    <>
      <table className="tb-list-trans">
        <tbody className="t-body">
          <tr className="tr-body">
            <td className="td-body">{props.name}</td>
            <td className="td-body">{props.date}</td>
            <td className="td-body">{props.category}</td>
            <td className="td-body">{formatValue}</td>
          </tr>
          <div className="td-type">
            <span className={props.type === '+' ? 'positive' : 'negative'}>
              {props.type}
            </span>
          </div>
        </tbody>
      </table>
    </>
  );
};
