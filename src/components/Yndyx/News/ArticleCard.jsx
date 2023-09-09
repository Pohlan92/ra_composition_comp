// показывает какую-нибудь случайную статью
export const ArticleCard = ({ cover, title, description, href }) => {
  return (
    <div className="article-card">
      <div className="img_wrapper">
        <img className="article-card_image" alt="cover" src={cover || null} />
      </div>
      <h5 className="article-card_title">
        <a href={href} className="article-card_title_link">
          {title}
        </a>
      </h5>
      <div className="article-card_description">{description}</div>
    </div>
  );
};
