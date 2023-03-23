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
    <div className="pannel-control">
      <div className="add-password-section">
        <div className="control-password-section">
          <label className="label-password-section">Insira a Senha</label>
          <input
            className="input-password-section"
            type="number"
            name="password"
            onChange={handleInputChange}
            min="1"
            // value={newPassword}
          />

          <div className="controls-password-section">
            <button
              className="default-button"
              onClick={() => {
                handlePassword(newPassword);
              }}
            >
              Adicionar Senha
            </button>

            <button className="default-button" onClick={changeCurrentPassword}>
              Chamar próxima senha
            </button>
          </div>
        </div>

        <h1 className="title-password-section">Control Pannel</h1>
      </div>
      <section className="passwords-tables">
        <div className="passwords-control">
          <div className="last-passwords-control">
            <h2 className="title-passwords-control">Ultimas Senhas</h2>
            <ul>
              <li>Senha 5</li>
              <li>Senha 4</li>
              <li>Senha 3</li>
              <li>Senha 2</li>
              <li>Senha 1</li>
            </ul>
          </div>
          <div className="current-next-passwords-control">
            <div className="current-password-control">
              <h2 className="title-passwords-control">Senha Atual</h2>
              <ul>
                <li>Senha 5</li>
              </ul>
            </div>
            <div className="next-password-control">
              <h2 className="title-passwords-control">Proxima Senha</h2>
              <ul>
                <li>Senha 6</li>
              </ul>
            </div>

          </div>


        </div>

        <div className="tutorial">
          <h2 className="title-tutorial">Como usar</h2>
          <p className="text-tutorial">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptatibus placeat libero nesciunt, quae ut, a omnis quasi similique, tempore delectus. Quis quia sint perspiciatis dolor esse eveniet odit atque?</p>
          <p className="text-tutorial">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptatibus placeat libero nesciunt, quae ut, a omnis quasi similique, tempore delectus. Quis quia sint perspiciatis dolor esse eveniet odit atque?</p>
          <p className="text-tutorial">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptatibus placeat libero nesciunt, quae ut, a omnis quasi similique, tempore delectus. Quis quia sint perspiciatis dolor esse eveniet odit atque?</p>
        </div>
      </section>
    </div>
  );
};

export default Controller;
