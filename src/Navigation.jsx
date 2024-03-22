import React, { useState, useEffect } from "react";
import data from "./MOCK_DATA.json";

const UserData = () => {
  const [userData, setUserData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [lookingFor, setLookingFor] = useState("");

  const search = (event) => {
    setLookingFor(event.target.value.toLowerCase());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setUserData(data);
  };

  const handleSort = (key) => {
    const sortedData = [...userData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });

    setUserData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const tick = (m) => {
    if (m) {
      return <span>&#10004;</span>;
    } else {
      return <span>&#10060;</span>;
    }
  };

  const filteredData = lookingFor
    ? userData.filter((user) =>
        user.Customer.toLowerCase().startsWith(lookingFor)
      )
    : userData;

  return (
    <>
      <div id="search">
        <label> Search :</label>
        <input
          type="text"
          placeholder="Search"
          value={lookingFor}
          onChange={search}
        />
      </div>
      <div id="box">
        <table>
          <thead>
            <tr>
              <th>
                <label>Customer</label>
                <button onClick={() => handleSort("Customer")}>
                  Sort/Unsort
                </button>
              </th>
              <th>
                <label>Last_seen</label>
                <button onClick={() => handleSort("Last_seen")}>
                  Sort/Unsort
                </button>
              </th>
              <th>
                <label>Orders</label>
                <button onClick={() => handleSort("Orders")}>
                  Sort/Unsort
                </button>
              </th>
              <th>
                <label>Total_spend</label>
                <button onClick={() => handleSort("Total_spend")}>
                  Sort/Unsort
                </button>
              </th>
              <th>
                <label>Latest_purchase</label>
                <button onClick={() => handleSort("Latest_purchase")}>
                  Sort/Unsort
                </button>
              </th>
              <th>
                <label>News</label>
                <button onClick={() => handleSort("News")}>Sort/Unsort</button>
              </th>
              <th>
                <label>Segments</label>
                <button onClick={() => handleSort("Segments")}>
                  Sort/Unsort
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user, index) => (
              <tr key={index}>
                <td>{user.Customer}</td>
                <td>{user.Last_seen}</td>
                <td>{user.Orders}</td>
                <td>{user.Total_spend}</td>
                <td>{user.Latest_purchase}</td>
                <td>{tick(user.News)}</td>
                <td>{user["Segments "]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserData;
