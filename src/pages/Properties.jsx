// src/pages/Properties.jsx
import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import PropertyCard from "../components/PropertyCard";
import { fetchPropertiesByType } from "../api/propertiesApi";
import "./Properties.css";

const FILTERS = ["All", "Land", "Build"];

const Properties = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchPropertiesByType(activeFilter).then((data) => {
      setProperties(data);
      setLoading(false);
    });
  }, [activeFilter]);

  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Featured land & projects"
        subtitle="A look at land we currently have access to and homes we've helped clients build."
      />

      <section className="section properties-page">
        <div className="container">
          <div className="properties-filters">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                className={`filter-pill ${activeFilter === filter ? "filter-pill-active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "Build" ? "Build Projects" : filter === "Land" ? "Land" : "All"}
              </button>
            ))}
          </div>

          {loading ? (
            <p className="properties-loading">Loading…</p>
          ) : (
            <div className="properties-grid">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Properties;
