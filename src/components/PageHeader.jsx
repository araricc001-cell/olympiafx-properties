// src/components/PageHeader.jsx
import "./PageHeader.css";

const PageHeader = ({ label, title, subtitle }) => {
  return (
    <div className="page-header">
      <div className="container">
        {label && <p className="section-label">{label}</p>}
        <h1 className="page-header-title">{title}</h1>
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
