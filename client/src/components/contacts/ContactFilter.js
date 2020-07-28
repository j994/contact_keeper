import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactFilter = () => {
  const { filterContacts, clearFilter, filtered } = useContext(ContactContext);
  const text = useRef("");

  useEffect(() => {
    if (!filtered) {
      text.current.value = "";
    }
  }, [filtered]);

  const onChange = (e) => {
    if (text.current.value) {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        type='text'
        ref={text}
        placeholder='Search Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
