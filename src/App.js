import React, { useState } from "react";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";
import contactList from "./list";

const App = () => {
  const [selectedContact, setSelectedContact] = useState();
  const [searchText, setSearchText] = useState("");

  const handleChangeSearchText = (searchText) => {
    setSearchText(searchText);
    setSelectedContact(null);
  };

  return (
    <div>
      <div id="root" />
      <div className="container">
        <h1 className="subject">HIS 연락처</h1>
        <div className="contact-wrap">
          <LeftBox
            searchText={searchText}
            onChangeSearchText={handleChangeSearchText}
            contactList={contactList}
            onSelect={setSelectedContact}
            selectedContact={selectedContact}
          />
          <RightBox contact={selectedContact} />
        </div>
      </div>
    </div>
  );
};

export default App;
