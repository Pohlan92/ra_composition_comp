// просто отображает рандомную ссылку на какой-то запрос

export const NavigationFooter = ({ linkTitle, link }) => {
  return (
    <div className="navigation_footer">
      Найдётся всё. Например,{' '}
      <a href={link} className="navigation_random-link">
        {linkTitle}
      </a>
    </div>
  );
};
