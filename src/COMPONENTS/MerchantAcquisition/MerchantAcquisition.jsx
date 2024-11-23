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
        {merchants.map((current, i) => (
          <li key={i}>
            <strong>{current.name}</strong>: :{current.engagement} engagement, {current.acquisitions} acquisitions
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MerchantAcquisition;