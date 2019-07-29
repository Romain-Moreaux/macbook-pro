import React from "react";
import macbookImg from "./macbook.jpeg";
import options from "./options";

class App extends React.Component {
  state = {
    processor: 0,
    memory: 0,
    gpu: 0,
    storage: 0,
    keyboard: 0,
    finalCut: false,
    logicPro: false
  };

  verticalChoices() {
    let element = [];
    for (const option of Object.entries(options)) {
      let componentName = option[0];
      let selectedComponentPrice =
        options[componentName][this.state[[componentName]]].price;

      element.push(<h4 className="choice-name">{componentName}</h4>);
      option[1].forEach((specs, index) => {
        let componentPrice = specs.price - selectedComponentPrice;
        element.push(
          <div
            className={
              "vertical-choice " +
              (this.state[componentName] === index ? "selected" : "")
            }
            onClick={() => {
              this.setState({ [componentName]: index });
            }}
          >
            <span className="choice-name">{specs.name}</span>
            <span className="choice-price">
              {componentPrice !== 0 ? componentPrice : null}
            </span>
          </div>
        );
      });
    }
    return element;
  }

  total() {
    let total = 2699;

    Object.entries(options).forEach(component => {
      let currentComponentPrice = component[1][this.state[component[0]]].price;
      total += currentComponentPrice;
    });
    return total;
  }

  render() {
    return (
      <div>
        <div>
          <header />
          <div className="produc-name">
            <h1>MacBook Pro</h1>
          </div>
          <div className="columns">
            <div className="macbook">
              <img src={macbookImg} alt="macbook" />
            </div>
            <div className="column">
              <h2>Personnalisez votre MacBook Pro 15 pouces - Gris sidéral</h2>
              <p className="recap">
                {options.processor[this.state.processor].name}
              </p>
              <p className="recap">Écran Retina avec affichage True Tone</p>
              <p className="recap">Touch Bar et Touch ID</p>
              <p className="recap">{options.memory[this.state.memory].name}</p>
              <p className="recap">{options.gpu[this.state.gpu].name}</p>
              <p className="recap">
                {options.storage[this.state.storage].name}
              </p>
              <p className="recap">Quatre ports Thunderbolt 3</p>
              <div className="options">
                {this.verticalChoices()}
                <h3>Logiciels préinstallés</h3>
                <div>
                  <h4 className="choice-name">Final Cut Pro X</h4>
                  <div className="horizontal-choice">
                    <div
                      className={
                        "horizontal-item " +
                        (this.state.finalCut === false ? "selected" : "")
                      }
                      onClick={() => {
                        this.setState({ finalCut: false });
                      }}
                    >
                      <span className="choice-name">Aucun</span>
                      {this.state.finalCut === true && <span>- 329,99 €</span>}
                    </div>
                    <div
                      className={
                        "horizontal-item " +
                        (this.state.finalCut === true ? "selected" : "")
                      }
                      onClick={() => {
                        this.setState({ finalCut: true });
                      }}
                    >
                      <span className="choice-name">Final Cut Pro X</span>
                      {this.state.finalCut === false && <span>+ 329,99 €</span>}
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="choice-name">Logic Pro X</h4>
                  <div className="horizontal-choice">
                    <div
                      className={
                        "horizontal-item " +
                        (this.state.logicPro === false ? "selected" : "")
                      }
                      onClick={() => {
                        this.setState({ logicPro: false });
                      }}
                    >
                      <span className="choice-name">Aucun</span>
                      {this.state.logicPro === true && <span>- 229,99 €</span>}
                    </div>
                    <div
                      className={
                        "horizontal-item " +
                        (this.state.logicPro === true ? "selected" : "")
                      }
                      onClick={() => {
                        this.setState({ logicPro: true });
                      }}
                    >
                      <span className="choice-name">Logic Pro X</span>
                      {this.state.logicPro === false && <span>+ 229,99 €</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-content">
            {this.total()}€<button>Ajouter au Panier</button>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
