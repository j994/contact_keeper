import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./ContactContext";
import contactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jill@gmail.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 2,
        name: "Sara Watson",
        email: "sara@gmail.com",
        phone: "221-111-1111",
        type: "personal",
      },
      {
        id: 3,
        name: "Harry White",
        email: "harry@gmail.com",
        phone: "111-189-1111",
        type: "professional",
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  // Delete contact
  const deleteContact = (contactID) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: contactID,
    });
  };

  // Set current contact
  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Contact
  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text,
    });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
