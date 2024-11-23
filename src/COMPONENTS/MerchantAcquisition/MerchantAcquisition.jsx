import React, { useState } from "react";
import './MerchantAcquisition.css'
function MerchantAcquisition(){
  const [merchants, setMerchants] = useState([
    { name: "Merchant A", engagement: "High", acquisitions: 50 },
    { name: "Merchant B", engagement: "Medium", acquisitions: 30 },
  ]);

  return (
    <div className="marchantsComponent">
      <h2>Merchant Acquisition</h2>
      <ul>
        {merchants.map((merchant, i) => (
          <li key={i}>
            <strong>{merchant.name}</strong>: :{merchant.engagement} engagement, {merchant.acquisitions} acquisitions
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MerchantAcquisition;