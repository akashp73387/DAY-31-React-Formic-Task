import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [details, setDetails] = useState([]);

  //getting api data
  useEffect(() => {
    fetchData();
  }, []);

  //Function for getting data through axios
  const fetchData = async () => {
    await axios
      .get("https://6642ed733c01a059ea20d1e5.mockapi.io/api/task_library")
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="row row-cols-1   row-cols-md-3 m-2 mb-5 pb-5 ">
        {details.map((element, index) => {
          return (
            <div key={index}>
              <div className="card card-details col-md-4 col-sm-6  ">
                <div className="card-header d-flex  justify-content-center ">
                  <img
                    src={element.image}
                    className="card-img-top img-fluid "
                    style={{
                      width: "200px",
                      position: "relative",
                      maxHeight: "30vh",
                    }}
                    alt="book image"
                  />
                </div>
                <div className="card-body body-contents">
                  <div className="card-text">
                    <p> Book Title : {element.book.title}</p>
                    <p>Author Name :{element.book.author}</p>
                    <p>ISBN Number :{element.book.isbn}</p>
                    <p>Publication Date :{element.book.pd}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
