import { Widget } from './Widget';

const OnAirWidgetItem = ({ source, title, link }) => {
  return (
    <li className="on-air_item">
      <a href={link} className="on-air_item_link">
        {title}
        <span className="on-air_item_source">{source}</span>
      </a>
    </li>
  );
};

// виджет с передачами в эфире
export const OnAirWidget = ({ onAirList }) => {
  return (
    <Widget widgetName="on-air" title="Эфир">
      <ul className="on-air_list">
        {onAirList.map((item, i) => (
          <OnAirWidgetItem {...item} key={i} />
        ))}
      </ul>
    </Widget>
  );
};
