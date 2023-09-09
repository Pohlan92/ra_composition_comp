import { WeatherWidget } from './WeatherWidget';
import { PopularWidget } from './PopularWidget';
import { MapWidget } from './MapWidget';
import { TVProgramWidget } from './TVProgramWidget';
import { OnAirWidget } from './OnAirWidget';
import { AdBanner } from './AdBanner';

import { popularList, tvProgram, onAirList } from './constants';

// блок с разнообразными небольшими виджетами
export const Widgets = () => {
  return (
    <div className="widgets_section">
      <AdBanner />
      <div className="widgets">
        <WeatherWidget />
        <PopularWidget popularList={popularList} />
        <MapWidget />
        <TVProgramWidget programs={tvProgram} />
        <OnAirWidget onAirList={onAirList} />
      </div>
    </div>
  );
};
