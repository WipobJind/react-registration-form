import { useState, Fragment } from "react";
import "./Register.css";

export default function Register() {
  // Arrays for choices (using array of JSON as suggested in hint)
  const availableGenders = [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
    { name: "Others", value: "others" }
  ];

  const availableHobbies = [
    { name: "Music", value: "music" },
    { name: "Movies", value: "movies" },
    { name: "Plastic Model", value: "plastic-model" }
  ];

  const availableRoles = [
    { name: "General staff", value: "general-staff" },
    { name: "Developer", value: "developer" },
    { name: "System Analyst", value: "system-analyst" }
  ];

  // State variables
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("");

  // Checkbox handler (from assignment hint)
  function onHobbiesToggle(event) {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;

    if (!isChecked) {
      setHobbies(
        (prev) => {
          return prev.filter((item) => {
            if (item == targetValue) return false;
            else return true;
          });
        }
      );
    } else {
      setHobbies((prev) => {
        return [...prev, targetValue];
      });
    }
  }

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form>
        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Firstname */}
        <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>

        {/* Lastname */}
        <div className="form-group">
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        {/* Gender - Radio buttons using map() */}
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            {availableGenders.map((item, index) => {
              return (
                <Fragment key={item.value}>
                  <input
                    type="radio"
                    id={item.value}
                    name="gender"
                    value={item.value}
                    checked={gender === item.value}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor={item.value}>{item.name}</label>
                </Fragment>
              );
            })}
          </div>
        </div>

        {/* Hobbies - Checkboxes using map() */}
        <div className="form-group">
          <label>Hobbies</label>
          <div className="checkbox-group">
            {availableHobbies.map((item, index) => {
              return (
                <Fragment key={item.value}>
                  <input
                    type="checkbox"
                    id={item.value}
                    name="hobbies"
                    value={item.value}
                    onChange={onHobbiesToggle}
                  />
                  <label htmlFor={item.value}>{item.name}</label>
                </Fragment>
              );
            })}
          </div>
        </div>

        {/* Apply Role - Dropdown using map() */}
        <div className="form-group">
          <label htmlFor="role">Apply Role</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">-- Select Role --</option>
            {availableRoles.map((item, index) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
      </form>

      {/* Summary Section - Reflects input values */}
      <hr />
      <h3>Registration Summary</h3>
      <table className="summary-table">
        <tbody>
          <tr>
            <th>Username</th>
            <td>{username}</td>
          </tr>
          <tr>
            <th>Firstname</th>
            <td>{firstname}</td>
          </tr>
          <tr>
            <th>Lastname</th>
            <td>{lastname}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{gender}</td>
          </tr>
          <tr>
            <th>Hobbies</th>
            <td>{hobbies.join(", ")}</td>
          </tr>
          <tr>
            <th>Role</th>
            <td>{role}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}