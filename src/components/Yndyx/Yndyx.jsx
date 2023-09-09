import { News } from './News/News';
import { Navigation } from './Navigation/Navigation';
import { Widgets } from './Widgets/Widgets';

// фактически компонент всего приложения
export const Yndyx = () => {
  return (
    <div className="yndyx_container">
      <News />
      <Navigation />
      <Widgets />
    </div>
  );
};
