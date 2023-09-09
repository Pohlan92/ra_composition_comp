import { Card } from './components/Card';
import { Yndyx } from './components/Yndyx/Yndyx';
import { Collapse } from './components/Collapse';

import './styles/app.css';
import img from './assets/nettos.jpg';

export function App() {
  return (
    <>
      <Yndyx />

      <div className="cards-container">
        <Card
          title="Card title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonText="Some button text"
        >
          <img src={img} className="card-img-top" alt="Котёнки" />
        </Card>
        <Card
          title="Card without image"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonText="Some text"
        />
      </div>

      <Collapse collapsedLabel="Развернуть!" expandedLabel="Скрыть!">
        <p className="paragraph paragraph_theme_alfa-on-white">
          Альфа-Банк, основанный в&nbsp;1990 году, является универсальным
          банком, осуществляющим все основные виды банковских операций,
          представленных на рынке финансовых услуг, включая обслуживание частных
          и&nbsp;корпоративных клиентов, инвестиционный банковский бизнес,
          торговое финансирование и&nbsp;т.д.
        </p>
      </Collapse>
    </>
  );
}
