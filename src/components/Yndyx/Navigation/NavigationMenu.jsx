const NavigationMenuTab = ({ tab }) => {
  return <li className="navigation-tab_item">{tab}</li>;
};

// отображение кнопок навигации
export const NavigationMenu = ({ tabs }) => {
  return (
    <ul className="navigation-tab_list">
      {tabs.map((tab, i) => (
        <NavigationMenuTab tab={tab} key={i} />
      ))}
    </ul>
  );
};
