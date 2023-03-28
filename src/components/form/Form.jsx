import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Form.scss";
const Form = () => {
  const [checked, setChecked] = useState(true);
  const [values, setValues] = useState({
    name: "",
    number: "",
    email: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
      date: ` ${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`,
    });
  };
  useEffect(() => {
    console.log(values);
  }, [values, values.date]);
  useEffect(() => {}, [checked]);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(checked);
    if (checked === false) {
      return alert("Надайте згоду на обробку персональних даних");
    }
    if (values.name === "" || values.email === "" || values.number === "") {
      return alert("Заповніть усі поля");
    }
    try {
      const text = `<i>Дата: ${values.date}</i>%0AІм'я: ${values.name}%0A<b>Номер телефону:</b> <code>${values.number}</code>%0AEmail: ${values.email}`;
      const link = `https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage?chat_id=5495860479&text=${text}&parse_mode=html`;
      console.log(link);
      const data = await axios.get(link);
      if (data.status === 200) {
        alert("Успішно відправлено.Ми з вами зв'яжемось найближчиим часом.");
        console.log(values);
        setValues({
          name: "",
          number: "",
          email: "",
        });
      }
    } catch (error) {}
  };
  return (
    <>
      <form onSubmit={onSubmit} id="contacts" className="form">
        <h2 className="form__title">Форма зворотнього зв'язку</h2>
        <div className="form__body">
          <p className="form__info">
            Залишіть заявку, і наш менеджер зв'яжеться з <br /> вами протягом
            однієї години
          </p>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={values.name}
            placeholder="Ім'я"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="number"
            autoComplete="off"
            value={values.number}
            placeholder="Номер телефону"
            onChange={handleOnChange}
          />
          <input
            type="email"
            name="email"
            autoComplete="off"
            value={values.email}
            placeholder="Email"
            onChange={handleOnChange}
          />
          <div className="form__aggre">
            <input
              type="checkbox"
              name="check"
              defaultChecked={true}
              onChange={() => {
                setChecked(!checked);
              }}
            />
            <label htmlFor="check">
              Даю згоду на обробку персональних даних
            </label>
            {checked ? null : (
              <p className="error">
                Необхідно надати згоду на обробку персональних даних
              </p>
            )}
          </div>

          <button type="submit" className="form__button">
            Відправити
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
