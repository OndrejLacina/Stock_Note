import React from "react";

function buttonPridatAkcii({ onClickProp }) {
  return (
    <div>
      <button className="submit-button" onClick={onClickProp}>
        Přidat akcii
      </button>
    </div>
  );
}

export default buttonPridatAkcii;
