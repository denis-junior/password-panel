import React, { useState } from "react";
import { usePasswords } from "../context/Context";

const Controller = () => {
  const { handlePassword } = usePasswords();
  const [newPassword, setNewPassword] = useState(0);
  const [currentPassword, setCurrentPassword] = useState(0);

  const handleInputChange = (e) => {
    setNewPassword(e.target.value);
  };

  const changeCurrentPassword = () => {
    setCurrentPassword(currentPassword + 1);
    console.log("changeCurrentPassword");
  };

  return (
    <>
      <div className="add-password-section">
        <label className="form-label fs-5">Insira a Senha</label>
        <input
          className="form-control"
          type="number"
          name="password"
          placeholder={`Insera o número da senha aqui`}
          onChange={handleInputChange}
          // value={newPassword}
        />
        <button
          onClick={() => {
            handlePassword(newPassword);
          }}
        >
          Adicionar Senha
        </button>
      </div>
      <div className="call-next-password">
        <button onClick={changeCurrentPassword}>Chamar próxima senha</button>
      </div>
    </>
  );
};

export default Controller;
