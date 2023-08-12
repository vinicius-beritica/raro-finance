import './style.css';
import credit from '../../assets/credit-card.svg';
import imgProf from '../../assets/profile-pic.jpeg';
export const Header = () => {
  return (
    <header className="top-header">
      <div className="header-content">
        <div className="logo">
          <img className="img-logo" src={credit} />
          <div className="txt-logo">Raro Finanças</div>
        </div>
        <div className="profile">
          <div className="nm-email-profile">
            {' '}
            <h2 className="nm-profile">Vinícius Beritica</h2>
            <span className="email-profile">
              vinicius.betitica@beritica.com
            </span>
          </div>
          <img className="img-round" src={imgProf}></img>
        </div>
      </div>
    </header>
  );
};
