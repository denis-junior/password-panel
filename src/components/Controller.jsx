import React, { useState } from "react";

const Controller = ({ passwords, setPasswords }) => {
  const [newPassword, setNewPassword] = useState(0);

  const addPassword = () => {
    const channel = new BroadcastChannel("password_panel");
    setPasswords([...passwords, newPassword]);
    channel.postMessage(passwords);
  };

  const handleInputChange = (e) => {
    // console.log("***** handleInputChange", e.target.value)
    setNewPassword(e.target.value);
  };

  const handlePassword = (e) => {
    const channel = new BroadcastChannel("password_panel");
    e.preventDefault();

    const formData = new FormData(e.target);
    const finalData = Object.fromEntries(formData);

    // make validation here

    console.log("*** handle submit", finalData);
    window.confirm("deseja adicionar a senha ?")
      ? setPasswords([
          Number(newPassword),
          ...passwords,
        ]) /*function that send the data */
      : console.log("nhew");

    channel.postMessage(passwords);
  };

  return (
    <>
      <div className="add-password-section">
        <form onSubmit={handlePassword}>
          <label className="form-label fs-5">Insira a Senha</label>
          <input
            className="form-control"
            type="number"
            name="password"
            placeholder={`Insera o número da senha aqui`}
            onChange={handleInputChange}
            value={newPassword}
          />
          <button type="submit">Adicionar Senha</button>
        </form>
      </div>
      <div className="call-next-password">
        <button>Chamar próxima senha</button>
      </div>
    </>
  );
};

export default Controller;
