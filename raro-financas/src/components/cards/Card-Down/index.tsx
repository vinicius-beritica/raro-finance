import arrowDown from '../../../assets/chart-icon-outline-trending-down.svg';
import './style.css';
export const CardDown = () => {
  return (
    <>
      <div className="card-content">
        <span className="txt-exits-down">Saídas</span>
        <div className="arrow-down">
          <img src={arrowDown} alt="" />
        </div>
      </div>
      <div className="txt-value">
        R$ 532,<span>52</span>
      </div>
    </>
  );
};
