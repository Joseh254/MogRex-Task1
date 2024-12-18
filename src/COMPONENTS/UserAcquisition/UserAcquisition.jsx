import React, { useState, useEffect } from "react";
import './UserAcquisition.css'
function UserAcquisition () {
  const [filter, setFilter] = useState("daily");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData  (){
      const result = {
        daily: [10, 20, 15,30],
        weekly: [100, 120, 150,200],
        monthly: [400, 500, 600,1000],
      };
      setData(result[filter]);
    };
    fetchData();
  }, [filter]);

  function handleChange(event){
setFilter(event.target.value)
  }
  function dataset(current,i){
    return(
      <li key={i}>
        Day {i+1}:{current}users
      </li>
    )
  }

  return (
    <div className="UserAquuisitionComponent">
      <h2>User Acquisition</h2>
      <div>
        <select value={filter} onChange={handleChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <ul>
        {data.map(dataset)}
      </ul>
    </div>
  );
};

export default UserAcquisition;