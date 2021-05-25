import SearchBox from "./SearchBox";
import contactList from "../list";

const LeftBox = ({ selectedContact, onSelect, onChangeSearchText, searchText }) => {
  return (
    <div className="col left">
      <SearchBox value={searchText} onChangeSearchText={onChangeSearchText} />
      <div className="contact-list">
        <ul>
          {contactList
            .filter((contact) => !searchText || contact.name.includes(searchText))
            .map((contact) => (
              <li key={contact.id}>
                <button
                  type="button"
                  onClick={() => onSelect(contact)}
                  className={contact === selectedContact ? "selected" : ""}
                >
                  {contact.name}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftBox;
