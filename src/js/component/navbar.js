import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light mb-3">
        <div>
          <button
            className="btn btn-success ms-2"
            onClick={() => navigate(`/newcontact/-1`)}
          >
            Add New Contact
          </button>
        </div>
        <div className="ml-auto">
          <button
            className="btn btn-warning me-2"
            onClick={() => actions.createAgenda()}
          >
            Create Agenda
          </button>

          <button
            type="button"
            className="btn btn-danger me-2"
            data-bs-toggle="modal"
            data-bs-target="#deleteAgenda"
          >
            Delete Agenda
          </button>

          <div className="modal fade" id="deleteAgenda">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    This delete entire contacts of agenda, sure?
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      actions.deleteAgenda();
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
