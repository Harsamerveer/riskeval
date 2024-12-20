import React from "react";

function Content() {
  return (
    <div className="container my-4">
      <h2 className="text-center mb-2">Our Process</h2>
      <p>
        Explore the benefits of our services with our step-by-step evaluation process
        tailored to meet your business needs.
      </p>
      <div className="row">
        <div className="col-md-2">
          <h4>Step 1</h4>
          <p>Gather data about potential risks.</p>
        </div>
        <div className="col-md-2">
          <h4>Step 2</h4>
          <p>Analyze the risks using our tools.</p>
        </div>
        <div className="col-md-2">
          <h4>Step 3</h4>
          <p>Provide actionable insights for mitigation.</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
