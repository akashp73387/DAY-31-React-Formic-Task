import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./Create.css";

const Create = () => {
  const navigate = useNavigate();

  const initialValues = {
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
  };

  const validationschema = Yup.object().shape({
    book: Yup.object().shape({
      title: Yup.string().required("Field is empty"),
      author: Yup.string().required("Field is empty"),
      isbn: Yup.string()
        .matches(
          /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/,
          "ISBN should have atleast 10-13 number"
        )
        .required("Field is empty"),
      pd: Yup.string().required("Field is empty"),
    }),
    author: Yup.object().shape({
      name: Yup.string().required("Field is empty"),
      dob: Yup.string().required("Field is empty"),
      bio: Yup.string().required("Field is empty"),
    }),
    image: Yup.string().required("Field is empty"),
  });

  const handleSubmit = async (values) => {
    //console.log(values);
    await axios
      .post(
        "https://6642ed733c01a059ea20d1e5.mockapi.io/api/task_library/",
        values
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    alert("Added Book Successfully");
    navigate("/");
  };

  return (
    <>
      <div className="details ">
        {/* <h3 className="text-center">New Book</h3 > */}
        <div className="row-cols-1 ">
          <Formik
            initialValues={initialValues}
            validationSchema={validationschema}
            onSubmit={handleSubmit}
          >
            <Form className="myform ">
              <div className="card p-0 m-0">
                <div className="card-header text-center ">
                  <h3>Book Details</h3>
                </div>

                <div className="card-body create-card">
                  {/* card-body */}

                  {/* Book title */}
                  <div className="card-text col-10 col-md-5 col-sm-5 me-5 ms-5 mb-3">
                    <label className="fs-5 mb-1 ">Book Name :</label>
                    <Field
                      type="text"
                      className="form-control "
                      name="book.title"
                      placeholder="Title of the book"
                    />
                    <ErrorMessage
                      name="book.title"
                      component="h6"
                      className="text-danger"
                    />
                  </div>
                  {/* end of Book title */}

                  {/* Author name*/}
                  <div className="card-text col-10 col-md-5 col-sm-5  ms-5 mb-3">
                    <label className="fs-5 mb-1 ">Author name :</label>
                    <Field
                      type="text"
                      className="form-control "
                      name="book.author"
                      placeholder="Author of book"
                    />
                    <ErrorMessage
                      name="book.author"
                      component="h6"
                      className="text-danger"
                    />
                  </div>

                  {/* end of Author name*/}

                  {/* isbn name*/}

                  <div className="card-text col-10 col-md-5 col-sm-5  ms-5 me-5 mb-3">
                    <label className="fs-5 mb-1 ">ISBN :</label>
                    <Field
                      type="text"
                      className="form-control "
                      name="book.isbn"
                      placeholder="Book ISBN"
                    />
                    <ErrorMessage
                      name="book.isbn"
                      component="h6"
                      className="text-danger"
                    />
                  </div>
                  {/* end of isbn*/}

                  {/* publication date */}
                  <div className="card-text col-10 col-md-5 col-sm-5  ms-5 mb-3">
                    <label className="fs-5 mb-1 ">Publication Date :</label>
                    <Field
                      type="date"
                      className="form-control "
                      name="book.pd"
                      placeholder="Publication date"
                    />
                    <ErrorMessage
                      name="book.pd"
                      component="h6"
                      className="text-danger"
                    />
                  </div>
                  {/* end of publication date*/}

                  {/* image */}

                  <div className="card-text col-10 col-md-5 col-sm-5  ms-5 mb-3">
                    <label className="fs-5 mb-1 ">Image</label>
                    <Field
                      type="text"
                      className="form-control "
                      name="image"
                      placeholder="Image to upload"
                    />
                    <ErrorMessage
                      name="image"
                      component="h6"
                      className="text-danger"
                    />
                  </div>
                  {/* end of image */}

                  {/* end of card-body */}
                </div>
              </div>

              <div className="card p-0 m-0">
                <div className="card-header text-center">
                  <h3>Author Details</h3>
                </div>
                <div className="card-body create-card">
                  {/* author's name */}
                  <div className="card-text col-10 col-md-5 col-sm-5  ms-5 mb-2 me-5">
                    <label className="fs-5 mb-1 ">Name of Author :</label>
                    <Field
                      type="text"
                      className="form-control "
                      name="author.name"
                      placeholder="Author's name"
                    />
                    <ErrorMessage
                      name="author.name"
                      component="h6"
                      className="text-danger"
                    />
                  </div>
                  {/* end of author's name */}
                  {/* dob */}
                  <div className="card-text col-10 col-md-5 col-sm-5  ms-5 mb-2">
                    <label className="fs-5 mb-1 ">Date of Birth :</label>
                    <Field
                      type="date"
                      className="form-control "
                      name="author.dob"
                      placeholder="Author's DOB"
                    />
                    <ErrorMessage
                      name="author.dob"
                      component="h6"
                      className="text-danger"
                    />
                  </div>
                  {/* end of dob */}
                  {/* bio */}
                  <div className="card-text col-10 col-md-5 col-sm-5  ms-5 me-5">
                    <label className="fs-5 mb-1 ">Biography :</label>
                    <Field
                      type="text"
                      className="form-control "
                      name="author.bio"
                      placeholder="Short description about author"
                    />
                    <ErrorMessage
                      name="author.bio"
                      component="h6"
                      className="text-danger"
                    />
                  </div>
                  {/* end of bio */}
                </div>
                <div className=" card-footer col-md-12 col-12 col-sm-12 mt-3  d-flex justify-content-center ">
                  <button type="submit" className="btn btn-success ">
                    Add Book
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Create;
