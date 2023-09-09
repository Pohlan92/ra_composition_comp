import { Widget } from './Widget';

// погода сегодняшнего дня
export const WeatherWidget = ({
  sky,
  avgTemp,
  morningTemp,
  dayTemp,
  nightTemp,
}) => {
  return (
    <Widget widgetName="weather" title="Погода">
      <div className="weather_sky">[Дождик]</div>
      <div className="weather_avg-temperature">+17°</div>
      <div className="weather_times-of-day">Утром +17, днём +20</div>
    </Widget>
  );
};
