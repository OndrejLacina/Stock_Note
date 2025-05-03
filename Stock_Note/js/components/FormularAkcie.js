import React, { useState } from "react";
import InputVeFormulari from "./InputVeFormulari";
import ButtonPridatAkcii from "./ButtonPridatAkcii";

function FormularAkcie({ onSubmitForm }) {
  // jdu ukládat zprávu, která bude text, takže tu zprávu chci mít uloženou v nějaké hodnotě, hodnota v tom STATU je "zprava" (mohlo by to být spíš "ticker nebo stock nebo akcie", že?), "setZprava" je manažer té hodnoty "zprava" a ted už jen inicializační hodnota v useState () a dám tam prázdný textový řetězec
  const [zprava, setZprava] = useState("");

  function napisZpravu(textZpravy) {
    setZprava(textZpravy);
  }

  // jestli to nepůjde, tak v čase 1:45h se řeší console
  // Potvrzuju formulář
  function odesliZpravu(event) {
    event.preventDefault();
    console.log("zprava odeslaná");
    onSubmitForm(zprava);
    setZprava("");
  }

  return (
    <>
      {/* na potvrzení tohoto formuláře aka "event uživatele" aka "kliknutí na "odesliSpravu" aka "onSubmit" se vykoná vše, co je ve funkci odesliSpravu (respektive vložení akcie -> vytvoření nového komponentu, kde pak budu dávat transakce akcií => TO-DO??) */}
      <form className="input-area" onSubmit={(event) => odesliZpravu(event)}>
        {/* napisSpravu je funkce, kterou si tvořím výše, pro tento Formulář komponent */}
        <InputVeFormulari valueProp={zprava} onChangeText={napisZpravu} />{" "}
        {/* nefungovalo mi zde zachytávání zprávy, že byla odeslaná "odosliSpravu", protože ButtonPridatAkcii byl v divu pod - bud to nastylovat, ať je to jakoby mimo příspěvek nebo to naprogramovat, aby to bylo vedle v divu, ale dělalo to stejný */}
        <ButtonPridatAkcii />
      </form>
      <div></div>
    </>
  );
}

export default FormularAkcie;
