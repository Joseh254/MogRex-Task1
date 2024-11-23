import React, { useState, useEffect } from "react";

function UserAcquisition () {
  const [filter, setFilter] = useState("daily");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData  (){
      const result = {
        daily: [10, 20, 15,30],
        weekly: [100, 120, 150,200],
        monthly: [400, 500, 600,100],
      };
      setData(result[filter]);
    };
    fetchData();
  }, [filter]);

  function handleChange(event){
setFilter(event.target.value)
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
        {data.map((item, i) => (
          <li key={i}>
            Day {i + 1}: {item} users
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAcquisition;