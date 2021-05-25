const RightBox = ({ contact }) => {
  return (
    <div className="col right">
      <div className="details">
        {contact ? (
          <ul className="info">
            <li>{contact.name}</li>
            <li>나이: {contact.age}</li>
            <li>기타: {contact.detail}</li>
          </ul>
        ) : (
          <p className="emptyset">정보가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default RightBox;
