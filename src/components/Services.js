import React, { useState, useEffect } from "react";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simulated API fetch
    const fetchServices = async () => {
      const data = [
        { id: 1, title: "Data Analysis", description: "Analyze and interpret data for better decisions." },
        { id: 2, title: "Risk Mitigation", description: "Strategies to minimize potential risks." },
        { id: 3, title: "Business Optimization", description: "Optimize workflows and improve outcomes." }
      ];
      setServices(data);
    };
    fetchServices();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map(service => (
          <div className="col-md-4 mb-3" key={service.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
