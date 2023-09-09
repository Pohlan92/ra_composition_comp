import cn from 'classnames';

const tabs = ['Сейчас в СМИ', 'в Германии', 'Рекомендуем'];
const activeTab = 0;

const NewsTab = ({ name, isActive }) => {
  return (
    <button className={cn('news-header_tab', { active: isActive })}>
      {name}
    </button>
  );
};

// переключаемые вкладки в категории новостей
export const NewsHeader = () => {
  return (
    <div className="news-header">
      <div className="news-header_tabs">
        {tabs.map((tab, i) => (
          <NewsTab name={tab} isActive={i === activeTab} key={i} />
        ))}
      </div>
      {/* здесь уже начал жёстко хардкодить в основном, ибо стало лень */}
      <div className="news-header_time">10 августа, вторник, 18:45</div>
    </div>
  );
};
