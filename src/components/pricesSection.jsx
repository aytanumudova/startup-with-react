import React from "react";

const pricesSection = () => {
  return (
    <div className="prices-section container m-auto text-center d-flex flex-column justify-content-center align-items-center">
      <span>Pricing</span>
      <h1 className="mt-4 mb-3">Our Packages</h1>
      <p>
        Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae.
        Quisque sit amet nisi erat.
      </p>
      <div className="row mt-5 d-flex justify-content-center align-items-center gap-4">
        <div className="col-12 col-md-3 pricing-card">
          <h6 class="card-heading">SMALL PACK</h6>
          <p class="price">$19</p>
          <div class="services-list">
            <p>Unlimited Reservations</p>
            <p>2 Clients and Products</p>
            <p>Invoicing and Payments</p>
            <p>Housekeeping Status</p>
            <p class="deactive">Data Security and Backups</p>
            <p class="deactive">Unlimited Staff Accounts</p>
            <p class="deactive">Web Booking Widget</p>
            <p class="deactive">Monthly Reports and Analytics</p>
          </div>
          <button class="card-btn">Select Plan</button>
        </div>
        <div className="col-12 col-md-3 pricing-card">
          <h6 class="card-heading color-red">MEDIUM PACK</h6>
          <p class="price">$29</p>
          <div class="services-list">
            <p>Unlimited Reservations</p>
            <p>2 Clients and Products</p>
            <p>Invoicing and Payments</p>
            <p>Housekeeping Status</p>
            <p>Data Security and Backups</p>
            <p>Unlimited Staff Accounts</p>
            <p class="deactive">Web Booking Widget</p>
            <p class="deactive">Monthly Reports and Analytics</p>
          </div>
          <button class="card-btn color-red bg-light-red">Select Plan</button>
        </div>
        <div className="col-12 col-md-3 pricing-card heading-red">
          <h6 class="card-heading">LARGE PACK</h6>
          <p class="price">$39</p>
          <div class="services-list">
            <p>Unlimited Reservations</p>
            <p>2 Clients and Products</p>
            <p>Invoicing and Payments</p>
            <p>Housekeeping Status</p>
            <p>Data Security and Backups</p>
            <p>Unlimited Staff Accounts</p>
            <p>Web Booking Widget</p>
            <p>Monthly Reports and Analytics</p>
          </div>
          <button class="card-btn">Select Plan</button>
        </div>
      </div>
    </div>
  );
};

export default pricesSection;