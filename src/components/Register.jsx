import { useState } from "react";

export default function Register() {
  const availableGenders = [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
    { name: "Others", value: "others" }
  ];

  const availableHobbies = [
    { name: "Music", value: "music" },
    { name: "Movies", value: "movies" },
    { name: "Plastic Model", value: "plastic model" }
  ];

  const availableRoles = [
    { name: "General staff", value: "general staff" },
    { name: "Developer", value: "developer" },
    { name: "System Analyst", value: "system analyst" }
  ];

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("");

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
    <div>
      <div>
        <label>Username</label>
        <div>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
      </div>

      <div>
        <label>Firstname</label>
        <div>
          <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
        </div>
      </div>

      <div>
        <label>Lastname</label>
        <div>
          <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
        </div>
      </div>

      <div>
        <label>Gender</label>
        {availableGenders.map((item, index) => {
          return (
            <div key={index}>
              <input type="radio" name="gender" value={item.value} onChange={(e) => setGender(e.target.value)}/>
              <label>{item.name}</label>
            </div>
          );
        })}
      </div>

      <div>
        <label>Hobbies</label>
        {availableHobbies.map((item, index) => {
          return (
            <div key={index}>
              <input type="checkbox" value={item.value} onChange={onHobbiesToggle}/>
              <label>{item.name}</label>
            </div>
          );
        })}
      </div>

      <div>
        <label>Role</label>
        <div>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            {availableRoles.map((item, index) => {
              return (
                <option key={index} value={item.value}>{item.name}</option>
              );
            })}
          </select>
        </div>
      </div>

      <div>
        <p>Username: {username}</p>
        <p>Firstname: {firstname}</p>
        <p>Lastname: {lastname}</p>
        <p>Gender: {gender}</p>
        <p>Hobbies: {hobbies.join(", ")}</p>
        <p>Role: {role}</p>
      </div>
    </div>
  );
}