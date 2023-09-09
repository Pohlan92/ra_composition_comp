export const Card = ({ children, title, description, buttonText }) => {
  return (
    <div className="card">
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary">{buttonText}</button>
      </div>
    </div>
  );
};
