import arrowUp from '../../../assets/chart-icon-outline-trending-up.svg';
import './style.css';
export const CardUp = () => {
  return (
    <>
      <div className="card-content">
        <span className="txt-enter-up">Entradas</span>
        <div className="arrow-up">
          <img src={arrowUp} alt="" />
        </div>
      </div>
      <div className="txt-value">
        R$ 1.853,<span>12</span>
      </div>
    </>
  );
};
