// src/components/PropertyCard.jsx
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
  const { title, type, size, price, description, image } = property;

  return (
    <article className="property-card">
      <div className="property-card-image">
        <img src={image} alt={title} loading="lazy" />
        <span className={`property-card-tag property-card-tag-${type.toLowerCase()}`}>
          {type === "Land" ? "Land for Sale" : "Build Project"}
        </span>
      </div>
      <div className="property-card-body">
        <h3 className="property-card-title">{title}</h3>
        <p className="property-card-meta">
          {size} · {price}
        </p>
        <p className="property-card-text">{description}</p>
      </div>
    </article>
  );
};

export default PropertyCard;
