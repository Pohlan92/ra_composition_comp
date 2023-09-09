import { Widget } from './Widget';

const PopularWidgetItem = ({ source, title, link }) => {
  return (
    <li className="popular_item">
      <a href={link} className="popular_item_link">
        <span className="popular_item_source">{source}</span> — {title}
      </a>
    </li>
  );
};
// виджет с посещаемыми страницами
export const PopularWidget = ({ popularList }) => {
  return (
    <Widget widgetName="popular" title="Посещаемое">
      {popularList.map((popular, i) => (
        <PopularWidgetItem {...popular} key={i} />
      ))}
    </Widget>
  );
};
