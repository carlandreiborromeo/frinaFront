import  { useState } from "react";
import "./CSS/Bday.css";

function  Birthdaytrack() {
  const [formData, setFormData] = useState({ name: "", birthday: "", gift: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch('https://bdaydsa-fdegbvfwfbaygwbn.southeastasia-01.azurewebsites.net/birthdays', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData),
          });

          const result = await response.json();
          console.log(result.msg);
          setSubmitted(true);
      } catch {
          alert('An error occurred while submitting your vote. Please try again later.');
      }
  };

  return (
      <div className="App">
          <header>
              <h1>🎉 Birthday Reminder 🎉</h1>
          </header>

          <main>
              <section className="welcome-section">
                  <p>Track your friends special days and make them unforgettable!</p>
              </section>

              <section className="form-section">
                  <h2>Add a Birthday</h2>
                  <form id="birthdayForm" onSubmit={handleSubmit}>
                      <label htmlFor="name">Name:</label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                      />
                      <br />

                      <label htmlFor="birthday">Birthday:</label>
                      <input
                          type="date"
                          id="birthday"
                          name="birthday"
                          value={formData.birthday}
                          onChange={handleChange}
                          required
                      />
                      <br />

                      <label htmlFor="gift">Gift Idea:</label>
                      <input
                          type="text"
                          id="gift"
                          name="gift"
                          value={formData.gift}
                          onChange={handleChange}
                          required
                      />
                      <br />

                      <button type="submit">Add Birthday</button>
                  </form>
              </section>
          </main>
      </div>
  );
}

export default Birthdaytrack;
