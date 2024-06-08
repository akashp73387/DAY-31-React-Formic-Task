import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Edit.css";

const Edit = ({ id }) => {
  //for navigating
  const navigate = useNavigate();

  //setting initial value to empty
  const [editBook, setEditBook] = useState({
    book: {
      title: "",
      author: "",
      isbn: "",
      pd: "",
    },
    author: {
      name: "",
      dob: "",
      bio: "",
    },
    image: "",
  });

  //Rendering data from api
  useEffect(() => {
    fetchData();
  }, []);

  //Funtion to get data from the api through axios
  const fetchData = async () => {
    await axios
      .get(`https://6642ed733c01a059ea20d1e5.mockapi.io/api/task_library/${id}`)
      .then((res) => setEditBook(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    formik.setValues(editBook);
  }, [editBook]);

  const validationschema = Yup.object({
    book: Yup.object({
      title: Yup.string().required("Field is empty"),
      author: Yup.string().required("Field is empty"),
      isbn: Yup.string()
        .matches(
          /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/,
          "ISBN should have atleast 10-13 number"
        )
        .required("Field is empty"),
      pd: Yup.date().required("Field is empty"),
    }),
    author: Yup.object({
      name: Yup.string().required("Field is empty"),
      dob: Yup.date().required("Field is empty"),
      bio: Yup.string().required("Field is empty"),
    }),
    image: Yup.string().required(),
  });

  // const handleSubmit =

  let formik = useFormik({
    initialValues: {
      book: {
        title: "",
        author: "",
        isbn: "",
        pd: "",
      },
      author: {
        name: "",
        dob: "",
        bio: "",
      },
      image: "",
    },
    validationSchema: validationschema,
    onSubmit: async (values) => {
      console.log(values);
      await axios
        .put(
          `https://6642ed733c01a059ea20d1e5.mockapi.io/api/task_library/${id}`,
          values
        )
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      alert("data edited successfully");
      navigate("/");
    },
  });

  return (
    <div className="m-3 ">
      <div className="card edit-card">
        <div className="card-header text-uppercase text-center fs-3 fw-bolder">
          Currently Editing the Details of Book Title -{editBook.book.title}
        </div>
        <div className="card-body ">
          <form
            onSubmit={formik.handleSubmit}
            className="col-md-12 col-12 col-sm-12"
          >
            {/* book details */}
            <div>
              <h3 className="mt-1 text-center text-color">Book Details</h3>
              <div className=" fs-5 fw-bolder col-12 ">
                {/* book title */}
                <div className=" col-12 col-md-6 col-sm-12 ">
                  <label className="small mb-1 " htmlFor="title">
                    Book Title
                  </label>
                  <input
                    className="form-control "
                    id="title"
                    placeholder="Enter the book title"
                    type="text"
                    name="book.title"
                    value={formik.values.book.title}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.book?.title ? (
                    <h6 className="text-danger">{formik.errors.book.title}</h6>
                  ) : null}
                </div>
                {/* end of book title */}

                {/* author name */}
                <div className="col-md-6 col-sm-12 col-12 ">
                  <label className="small mb-1 " htmlFor="author">
                    Author's Name
                  </label>
                  <input
                    className="form-control  col-12"
                    type="text"
                    name="book.author"
                    id="author"
                    placeholder="Enter the author's name"
                    value={formik.values.book.author}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.book?.author ? (
                  <h6 className="text-danger">{formik.errors.book.author}</h6>
                ) : null}
                {/* end of author name */}

                {/* isbn */}
                <div className="col-md-6 col-sm-12 col-12 ">
                  <label className="small mb-1 " htmlFor="isbn">
                    ISBN
                  </label>
                  <input
                    className="form-control  col-12"
                    type="text"
                    name="book.isbn"
                    id="isbn"
                    placeholder="Enter the ISBN"
                    value={formik.values.book.isbn}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.book?.isbn ? (
                  <h6 className="text-danger">{formik.errors.book.isbn}</h6>
                ) : null}
                {/* end of isbn */}

                {/* publication date */}
                <div className="col-md-3 col-sm-6 col-6 ">
                  <label className="small mb-1 " htmlFor="pubdate">
                    Publication Date
                  </label>
                  <input
                    className="form-control  col-12"
                    type="date"
                    name="book.pd"
                    id="pubdate"
                    placeholder="Enter the Publication date"
                    value={formik.values.book.pd}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.book?.pubdate ? (
                  <h6 className="error_message">
                    {formik.errors.book.pubdate}
                  </h6>
                ) : null}
                {/* end of publication date */}

                {/* image */}
                <div className="col-md-3 col-sm-6 col-6 ">
                  <label className="small mb-1 " htmlFor="image">
                    Image
                  </label>
                  <input
                    className="form-control  col-12"
                    type="text"
                    name="image"
                    id="image"
                    placeholder="Enter the image url"
                    value={formik.values.image}
                    onChange={formik.handleChange}
                  />
                </div>
                <h6 className="text-danger">{formik.errors.image}</h6>
                {/* end of image */}
              </div>
            </div>
            <hr />
            {/* author details */}
            <div>
              <h3 className=" text-center text-color">Author's Details</h3>
              <div className=" fs-5 fw-bolder col-12 ">
                {/* author name */}
                <div className="col-md-6 col-sm-12 col-12 ">
                  <label className="small mb-1 " htmlFor="name">
                    Author's Name
                  </label>
                  <input
                    className="form-control  col-12"
                    type="text"
                    name="author.name"
                    id="name"
                    placeholder="Enter the author's name"
                    value={formik.values.author.name}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.author?.name ? (
                  <h6 className="text-danger">{formik.errors.author.name}</h6>
                ) : null}
                {/* end of author name */}

                {/* dob */}
                <div className="col-md-4 col-sm-6 col-12 ">
                  <label className="small mb-1 " htmlFor="dob">
                    Date Of Birth
                  </label>
                  <input
                    className="form-control  col-12"
                    type="date"
                    name="author.dob"
                    id="dob"
                    placeholder="Enter the date of birth"
                    value={formik.values.author.dob}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.author?.dob ? (
                  <h6 className="text-danger">{formik.errors.author.dob}</h6>
                ) : null}
                {/* end of dob*/}

                {/* publication date */}
                <div className="col-md-6 col-sm-12 col-12 ">
                  <label className="small mb-1 " htmlFor="bio">
                    Biography
                  </label>
                  <input
                    className="form-control  col-12"
                    type="text"
                    name="author.bio"
                    id="bio"
                    placeholder="Enter the Publication date"
                    value={formik.values.author.bio}
                    onChange={formik.handleChange}
                  />
                </div>
                {formik.errors.author?.bio ? (
                  <h6 className="text-danger">{formik.errors.author.bio}</h6>
                ) : null}
                {/* end of publication date */}
              </div>
            </div>
            <div className="card-footer  d-flex justify-content-center mt-4">
              <button
                className="btn btn-success col-md-3 col-sm-3 col-6  col-5"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
