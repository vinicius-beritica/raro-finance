import './style.css';
export const CardBalance = () => {
  return (
    <>
      <div className="card-content">
        <span className="txt-balance">Saldo</span>
        <div className="bg-balance">
          <span className="img-balance">$</span>
        </div>
      </div>
      <div className="txt-value">
        R$ 1.320,<span>60</span>
      </div>
    </>
  );
};
