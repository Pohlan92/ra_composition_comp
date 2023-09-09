const NewsItem = ({ title, icon, href }) => {
  return (
    <div className="news-item">
      <a href={href} className="news-item_link">
        <div className="news-item_icon">
          <img className="news-item_icon_img" alt="ico" src={icon} />
        </div>
        <div className="news-item_title">{title}</div>
      </a>
    </div>
  );
};

// список ссылок на актуальные новости
export const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((item, i) => (
        <NewsItem {...item} key={i} />
      ))}
    </div>
  );
};
