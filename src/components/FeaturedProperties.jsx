// src/components/FeaturedProperties.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFeaturedProperties } from "../api/propertiesApi";
import PropertyCard from "./PropertyCard";
import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProperties().then((data) => {
      setProperties(data.slice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <section className="section featured">
      <div className="container">
        <div className="featured-header">
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="featured-title">Featured land & projects</h2>
          </div>
          <Link to="/properties" className="btn btn-outline">
            View all
          </Link>
        </div>

        {loading ? (
          <p className="featured-loading">Loading properties…</p>
        ) : (
          <div className="featured-grid">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;
