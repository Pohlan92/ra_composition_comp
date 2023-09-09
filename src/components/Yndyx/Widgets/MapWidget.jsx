import { Widget } from './Widget';

// виджет с ссылкой на карту, например, Германии
export const MapWidget = ({ link }) => {
  return (
    <Widget widgetName="map" title="Карта Германии">
      Расписания
    </Widget>
  );
};
