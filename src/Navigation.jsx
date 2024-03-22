import React, { useState, useEffect } from "react";
import data from "./MOCK_DATA .json";

const UserData = () => {
  const [userData, setUserData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [lookingFor, setLookingFor] = useState("");

  const search = (event) => {
    const query = event.target.value.toLowerCase();

    const filteredData = data.filter((user) => {
      for (const key in user) {
        if (Object.prototype.hasOwnProperty.call(user, key)) {
          const value = user[key];

          if (
            typeof value === "string" &&
            value.toLowerCase().includes(query)
          ) {
            return true;
          }
        }
      }
      return false;
    });

    setUserData(filteredData);
    setLookingFor(query);
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

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search"></form>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={lookingFor}
            onChange={search}
          />
        </div>
      </nav>
      <div id="box">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>
                <label>Customer</label>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => handleSort("Customer")}
                >
                  Sort/Unsort
                </button>
              </th>
              <th>
                <label>Last_seen</label>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => handleSort("Last_seen")}
                >
                  Sort/Unsort
                </button>
              </th>
              <th>
                <label>Orders</label>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => handleSort("Orders")}
                >
                  Sort/Unsort
                </button>
              </th>
              <th>
                <label>Total_spend</label>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => handleSort("Total_spend")}
                >
                  Sort/Unsort
                </button>
              </th>
              <th>
                <label>Latest_purchase</label>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => handleSort("Latest_purchase")}
                >
                  Sort/Unsort
                </button>
              </th>
              <th>
                <label>News</label>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => handleSort("News")}
                >
                  Sort/Unsort
                </button>
              </th>
              <th>
                <label>Segments</label>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => handleSort("Segments")}
                >
                  Sort/Unsort
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.Customer}</td>
                <td>{user.Last_seen}</td>
                <td>{user.Orders}</td>
                <td>{user.Total_spend}</td>
                <td>{user.Latest_purchase}</td>
                <td>{tick(user.News)}</td>
                <td>{user.Segments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserData;
