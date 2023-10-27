import React, { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [Email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gendr, setGendr] = useState("");

  const CONTACT = localStorage.getItem("contacts");
  const initialValue = CONTACT ? JSON.parse(CONTACT) : [];
  const [contacts, setContects] = useState(initialValue);
  const [contactId, setContectId] = useState("");

  const valName = (e) => {
    setName(e.target.value);
  };
  const valNumb = (e) => {
    setNum(e.target.value);
  };
  const valMail = (e) => {
    setEmail(e.target.value);
  };
  const valAge = (e) => {
    setAge(e.target.value);
  };
  const valGend = (e) => {
    setGendr(e.target.value);
  };

  const editbtn = (t) => {
    setContectId(t.id)
    setName(t.name);
    setNum(t.num);
    setEmail(t.Email);
    setAge(t.age);
    setGendr(t.gendr);
  };
  const deletebtn = (contact) => {
    const update = contacts.filter((t) => t.id !== contact.id);
    setContects(update);
    localStorage.setItem("contacts", JSON.stringify(update));
  };
  const allDelete = () => {
    setContects([]);
  };

  const contactsAdd = (e) => {
    e.preventDefault();
    if (contactId) {
      const updated = contacts.map((contact) => {
        return contact.id === contactId
          ? {
              ...contact,
              name: name,
              num: num,
              Email: Email,
              age: age,
              gendr: gendr,
            }
          : contact;
      });

      setContects(updated);
      localStorage.setItem("contacts", JSON.stringify(updated));
      setContectId("");
    } else {
      const updated = [
        ...contacts,
        {
          name: name,
          num: num,
          Email: Email,
          age: age,
          gendr: gendr,
          id: Math.random(),
        },
      ];
      setContects(updated);
      localStorage.setItem("contacts", JSON.stringify(updated));
    }
    setName("");
    setNum("");
    setEmail("");
    setAge("");
    setGendr("");
  };

  return (
    <div class="cner">
      <div class="applybox">
        <h1>CONTACT APLICATION</h1>
        <form>
          <div className="form_container">
            <div className="form_control">
              <label className="lbl">Name</label>
              <input
                className="inp"
                name="Name"
                placeholder="Enter Name..."
                value={name}
                required
                onChange={valName}
              />
            </div>
            <div className="form_control">
              <label className="lbl">Contact Number</label>
              <input
                className="inp"
                name="Contact Number"
                type="number"
                placeholder="Enter Contact Numb..."
                value={num}
                required
                onChange={valNumb}
              />
            </div>
            <div className="form_control">
              <label className="lbl" for="email">
                Email
              </label>
              <input
                className="inp"
                type="email"
                id="email"
                name="email"
                placeholder="Enter email..."
                value={Email}
                required
                onChange={valMail}
              />
            </div>
            <div className="form_control">
              <label className="lbl">Age</label>
              <input
                className="inp"
                type="number"
                placeholder="Enter Age..."
                value={age}
                required
                onChange={valAge}
              />
            </div>
            <div className="spcl">
              <label className="spcl-lbl">Gender</label>
              <input
                className="inp"
                type="text"
                placeholder="Male/Female..."
                value={gendr}
                required
                onChange={valGend}
              />
            </div>
          </div>
          <div className="button_container">
            <button className="bn" onClick={contactsAdd}>
              {contactId ? "UPDATE " : "ADD"}
            </button>
           
          </div>

          <div className="td">
            <div className="center">
              <table border={"1px"} className="size">
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>NUMBER</th>
                    <th>EMAIL</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                <tbody>
                  {contacts.map((t) => (
                    <tr key={t.id}>
                      <td className="center-text">{t.name}</td>
                      <td className="center-text">{t.num}</td>
                      <td className="center-text">{t.Email}</td>
                      <td className="center-text">{t.age}</td>
                      <td className="center-text">{t.gendr}</td>
                      <td>
                        <button
                          className="right-two"
                          onClick={() => {
                            editbtn(t);
                          }}
                        >
                          EDIT
                        </button>
                        <button
                          className="right-one"
                          onClick={() => {
                            deletebtn(t);
                          }}
                        >
                          DEL
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <button className="deleteAll" onClick={allDelete}>
            DELETE ALL
          </button>
        </form>
      </div>
    </div>
  );
}
export default App;
