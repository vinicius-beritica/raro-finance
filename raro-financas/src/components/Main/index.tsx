import { Button } from '../Button';
import { Card } from '../cards/Card-template';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { List } from '../List';
import './style.css';

export const Main = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <div className="list-cards">
          <Card />
          <Button />
        </div>
        <div className="div-list">
          <List />
        </div>
      </main>
      <Footer />
    </>
  );
};
