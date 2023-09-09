const Rate = ({ name, value, change }) => {
  return (
    <div className="news_rates_item">
      <span className="rate_name">{name}</span>
      <span className="rate_value">{value}</span>
      <span className="rate_change">{change}</span>
    </div>
  );
};

// показывает текущие курсы валют или акций
export const Rates = ({ rates }) => {
  return (
    <div className="news_rates">
      {rates.map((props, i) => (
        <Rate props={props} key={i} />
      ))}
    </div>
  );
};
