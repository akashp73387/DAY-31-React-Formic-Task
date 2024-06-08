import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookDetails = ({ setId }) => {
  const [bookDetails, setBookDetails] = useState([]);

  const navigate = useNavigate();

  const [deleteData, setDeleteData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    await axios
      .get("https://6642ed733c01a059ea20d1e5.mockapi.io/api/task_library")
      .then((res) => setBookDetails(res.data))
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(
        `https://6642ed733c01a059ea20d1e5.mockapi.io/api/task_library/${id}`
      )
      .then((res) => setDeleteData(res.data))
      .catch((err) => console.log(err));
    alert("Book Deleted Successfully");
  };
  return (
    <>
      <div key={setId}>
        <div className="table-responsive p-2 ">
          <table className="table table-dark align-middle table-striped">
            <thead className="text-center">
              <tr>
                <th scope="col">Sl No</th>
                <th scope="col">Book Name</th>
                <th scope="col">Author Name</th>
                <th scope="col">ISBN </th>
                <th scope="col">Publication Date</th>
                <th scope="col">Date Of Birth</th>
                <th scope="col">Biography</th>
                <th scope="col" colSpan={2}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {bookDetails.map((element, index) => {
                return (
                  <tr>
                    <th scope="row">{element.id}</th>
                    <td>{element.book.title}</td>
                    <td>{element.book.author}</td>
                    <td>{element.book.isbn}</td>
                    <td>{element.book.pd}</td>
                    <td>{element.author.dob}</td>
                    <td>{element.author.bio}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          handleEdit(element.id);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger "
                        onClick={() => {
                          handleDelete(element.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            className="btn btn-info m-4 fs-5"
            onClick={() => {
              navigate("/create");
            }}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
