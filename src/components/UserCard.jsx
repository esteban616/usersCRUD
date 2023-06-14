/* eslint-disable react/prop-types */
import "./styles/Usercard.css";

const UserCard = ({
  user,
  deleteUserByid,
  setUpdateInfo,
  setformClose
}) => {
  const handleDelete = () => {
    deleteUserByid("/users", user.id);
  };
  const handleEdit = () => {
    setUpdateInfo(user);
    setformClose(false);
  };
  return (
    <article className="user_card">
      <h3 className="user_name">
        {user.first_name} {user.last_name}
      </h3>
      <hr />
      <ul className="data_list">
        <li className="data_item">
          <span className="data_label">Email </span>
          <span className="email_value">{user.email}</span>
        </li>
        <li className="data_item">
          <span className="data_label">Birthday </span>
          <span className="birthday_value">
            <i className="bx bx-gift"></i>
            {user.birthday}
          </span>
        </li>
      </ul>
      <hr />
      <div className="user_btns">
        <button className="btn_delete" onClick={handleDelete}>
          <i className="bx bx-trash"></i>
        </button>
        <button className="btn_edit" onClick={handleEdit}>
          <i className="bx bx-edit-alt"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
