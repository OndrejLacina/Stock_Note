import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import FormularAkcie from "./components/FormularAkcie";
import PrispevekAkcie from "./components/PrispevekAkcie";

class App extends Component {
  state = {
    prispevky: [], // pole
    zprava: "",
  };

  pridejPrispevek = (zprava) => {
    // zde budu upravovat state a přidávat příspěvky
    this.setState((prevState) => {
      return {
        prispevky: [...prevState.prispevky, zprava],
      };
    });
  };

  vymazatPrispevok = (indexPrispevku) => {
    this.setState((prevState) => {
      return {
        prispevky: prevState.prispevky.filter(
          (prispevek, index) => indexPrispevku !== index
        ),
      };
    });
  };

  // input: hodnota zpravy z inputu
  napisZpravu = (input) => {
    this.setState({ zprava: input });
  };

  render() {
    return (
      <div className="wrapper">
        <h1>Stock Note</h1>
        <div>
          {/* toto bude funkce přidání PrispevekAkcie, ale nemám nastavený ještě neboť ve videu byla classa? čas 2:12:21, ano je to class komponent, napíšu to tak ale TODO => přepsat to jednodušeji do funkcionálního komponentu */}
          <FormularAkcie onSubmitForm={this.pridejPrispevek} />
        </div>
        <div className="list">
          {this.state.prispevky.map((prispevek, index) => {
            return (
              <PrispevekAkcie
                key={index}
                text={prispevek}
                onDelete={() => this.vymazatPrispevok(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

{
  /* // TO-DO -> udělat pak menu nahoře, alespoň 2 záložky (druhá bude přehled portfolia)
// function App() { */
}
{
  /* //   return (
//     <BrowserRouter>
//       <Navigacia />
//       <Routes>
//         <Route path="/" element={<Main />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="login" element={<Login />} />
//         <Route path="products/*" element={<Products />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// } */
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
