// ввод запроса пользователем

export const SearchForm = () => {
  return (
    <form className="search_form">
      <input className="search_input" type="text" />
      <button className="search_submit-btn" type="submit">
        Найти
      </button>
    </form>
  );
};
