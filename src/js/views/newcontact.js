import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Newcontact = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const contact = store.contactList.find((item) => item.id == params.id);
  const [localFullName, setLocalFullName] = useState(
    contact?.full_name ? contact.full_name : ""
  );
  const [localEmail, setLocalEmail] = useState(
    contact?.email ? contact.email : ""
  );
  const [localAddress, setLocalAddress] = useState(
    contact?.address ? contact.address : ""
  );
  const [localPhone, setLocalPhone] = useState(
    contact?.phone ? contact.phone : ""
  );

  const handleSubmit = (e) => {
    let contactToSend = {};
    e.preventDefault(); //Previene que cargue nuevamente la pagina cuando el submit;
    if (params.id >= 0) {
      contactToSend["id"] = params.id;
    }
    contactToSend["full_name"] =
      localFullName == "" ? contact.full_name : localFullName;

    contactToSend["email"] = localEmail == "" ? contact.email : localEmail;
    contactToSend["agenda_slug"] = "maruanGC";
    contactToSend["address"] =
      localAddress == "" ? contact.localAddress : localAddress;

    contactToSend["phone"] = localPhone == "" ? contact.localPhone : localPhone;

    console.log("contactToSend ", contactToSend);
    if (params.id >= 0) {
      actions.updateContact(contactToSend);
    } else {
      actions.addContact(contactToSend);
    }
    navigate("/");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            value={localFullName}
            className="form-control"
            onChange={(e) => setLocalFullName(e.target.value)}
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            value={localEmail}
            className="form-control"
            onChange={(e) => setLocalEmail(e.target.value)}
            id="InputEmail1"
            aria-describedby="email"
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            value={localAddress}
            className="form-control"
            onChange={(e) => setLocalAddress(e.target.value)}
            id="Address"
            aria-describedby="Full Name"
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            value={localPhone}
            className="form-control"
            onChange={(e) => setLocalPhone(e.target.value)}
            id="Phone"
            aria-describedby="Full Name"
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/">
          <button className="btn btn-danger ms-2">Cancel</button>
        </Link>
      </form>
    </div>
  );
};
