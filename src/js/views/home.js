import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="container">
      {store.contactList.length == 0 ? (
        <h5 className="m-5 text-danger">Empty list, you can create contacts</h5>
      ) : (
        <></>
      )}
      {store.contactList.map((item) => {
        return (
          <div key={item.id} className="card mb-1">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="me-3">
                  <img
                    className="border rounded-circle ms-2 mt-2"
                    src={
                      "https://picsum.photos/id/" +
                      Math.floor(Math.random() * 1000).toString() +
                      "/170/170"
                    }
                    alt="Imagen del contacto"
                  ></img>
                </div>
                <div>
                  <div className="card-body">
                    <h5 className="card-title">{item.full_name}</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <i className="bi bi-geo-alt"></i>
                      {item.address}
                    </li>
                    <li className="list-group-item">{item.phone}</li>
                    <li className="list-group-item">{item.email}</li>
                  </ul>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <button
                    className="me-2 mt-2"
                    onClick={() => navigate(`/newcontact/${item.id}`)}
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                </div>
                <div>
                  <button
                    className="me-2 mt-2"
                    onClick={() => {
                      actions.deleteContact(item.id);
                    }}
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
