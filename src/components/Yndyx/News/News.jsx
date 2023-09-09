import { NewsHeader } from './NewsHeader';
import { NewsList } from './NewsList';
import { Rates } from './Rates';
import { ArticleCard } from './ArticleCard';

import { rates, article, news } from './constants';

// блок с новостями, курсами валют/акций и какой-нибудь случайной статьёй
export const News = () => {
  return (
    <div className="news-section">
      <div className="news_main">
        <NewsHeader />
        <NewsList news={news} />
        <Rates rates={rates} />
      </div>
      <ArticleCard {...article} />
    </div>
  );
};
