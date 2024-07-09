import React from "react";
import { useParams } from "react-router-dom";
import servicedata from "../../assets/services_data";
import arrowIcon from "../../assets/arrow_icon.svg";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicedata.find((service) => service.s_no === id);

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div className="service-detail">
      <h1>{service.s_name}</h1>
      <p>{service.s_description}</p>
      {service.s_name === "Projects" && (
        <div className="link-container">
          <img src={arrowIcon} alt="Arrow Icon" />
          <a
            href="https://linktr.ee/nikhil_8615"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More Projects
          </a>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
