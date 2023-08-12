import './style.css';
import plus from '../../assets/plus-sm.svg';
export const Button = () => {
  return (
    <button className="btn-transation">
      <div className="icon-plus">
        <img src={plus} alt="" />
      </div>
      <div className="txt-trans">TRANSAÇÃO</div>
    </button>
  );
};
