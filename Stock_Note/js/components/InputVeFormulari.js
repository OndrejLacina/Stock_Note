import React from "react";

function InputVeFormulari({ valueProp, onChangeText }) {
  return (
    <textarea
      className="textarea"
      placeholder="Vlož novou akcii.."
      rows={2}
      name="zprava"
      // attribut hodnoty je - value (já hledám hodnotu té zprávy, aby mi to pak s tím pracovalo a vyresetovalo tu hodnotu na nic)
      value={valueProp}
      onChange={(event) => onChangeText(event.target.value)}
    ></textarea>
  );
}

export default InputVeFormulari;
