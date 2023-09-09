import { Widget } from './Widget';

const TVProgramWidgetItem = ({ channel, title, time }) => {
  return (
    <li className="tv-program_item">
      {time} {title} <span className="tv-program_channel">{channel}</span>
    </li>
  );
};

// виджет с телепрограммой
export const TVProgramWidget = ({ programs }) => {
  return (
    <Widget widgetName="tv-program" title="Телепрограмма">
      <ul className="tv-program_list">
        {programs.map((item, i) => (
          <TVProgramWidgetItem {...item} key={i} />
        ))}
      </ul>
    </Widget>
  );
};
