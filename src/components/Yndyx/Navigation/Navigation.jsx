import { NavigationFooter } from './NavigationFooter';
import { NavigationMenu } from './NavigationMenu';
import { SearchForm } from './SearchForm';

const navigationMenuTabs = [
  'Видео',
  'Картинки',
  'Новости',
  'Карты',
  'Маркет',
  'Переводчик',
  'Эфир',
  'ещё',
];

// просто лого...
const Logo = () => {
  return (
    <div className="yndyx-logo">
      <span className="yndyx-logo_first-letter">Ы</span>ндыкс
    </div>
  );
};

// содержит основной функционал сайта (поиск по запросу, другие категории)
export const Navigation = () => {
  return (
    <div className="navigation">
      <Logo />
      <div className="navigation_content">
        <NavigationMenu tabs={navigationMenuTabs} />
        <SearchForm />
        <NavigationFooter
          link="https://google.com"
          linkTitle="Фаза луны сегодня"
        />
      </div>
    </div>
  );
};
