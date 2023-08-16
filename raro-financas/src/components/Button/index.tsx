import './style.css';
import plus from '../../assets/plus-sm.svg';

interface PropButton {
  prop: () => void;
}
export const ButtonTransaction = ({ prop }: PropButton) => {
  return (
    <>
      <button className="btn-transation" onClick={prop}>
        <div className="icon-plus">
          <img src={plus} alt="" />
        </div>
        <div className="txt-trans">TRANSAÇÃO</div>
      </button>
    </>
  );
};
