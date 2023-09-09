// обычный рекламный баннер

export const AdBanner = ({ cover, href = '#' }) => {
  return (
    <div className="oddvertisement-banner">
      <a href={href} className="oddvertisement_link">
        <img
          src={cover || null}
          alt="Advertisement cover"
          className="oddvertisement_cover"
        />
      </a>
    </div>
  );
};
