import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Buy/Buy.css";
import Confetti from "react-confetti";
const Buy = () => {
  const size = useWindowSize();
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }
  return (
    <div className="BuyContainer">
      <Confetti
        run={setTimeout(true, 1000)}
        // tweenDuration={10}
        width={size.width}
        height={size.height}
      />
      <Link className="Arrow" to="/join">
        &#8592;Home
      </Link>
      <table className="BuyItemRotate">
        <th id="headerText">Table</th>
        <tr>
          <td id="h2">
            <p id="RedPrice">0</p>.00$
          </td>
        </tr>
        <tr>
          <td id="Closed">&#10006;</td>
        </tr>
        <tr>
          <td id="Closed">&#10006;</td>
        </tr>
        <tr>
          <td id="Closed">&#10006;</td>
        </tr>
        <tr>
          <td id="Closed">&#10006;</td>
        </tr>
        <tr>
          <td id="Closed">&#10006;</td>
        </tr>
        <tr>
          <td>
            <input
              className="Subscribe"
              id="GreenSubscribe"
              type="Button"
              value="Subscribe"
              // onClick={}
            />
          </td>
        </tr>
      </table>
      <div className="BuyItem">
        <header>
          <h1 id="headerText">Basic</h1>
        </header>
        <div className="Price">
          <h2 id="h2">
            <p id="RedPrice">2</p>.99$
          </h2>
        </div>
        <ul>
          <li>Unlimited storage</li>
          <li>Save your messages</li>
          <li id="Closed">&#10006;</li>
          <li id="Closed">&#10006;</li>
          <li id="Closed">&#10006;</li>
        </ul>
        <input
          className="Subscribe"
          id="GreenSubscribe"
          type="Button"
          value="Subscribe"
          // onClick={}
        />
      </div>
      <div className="BuyItem">
        <header>
          <h1 id="headerText">Premium</h1>
        </header>
        <div className="Price">
          <h2 id="h2">
            <p id="RedPrice">4</p>.99$
          </h2>
        </div>
        <ul>
          <li>Unlimited storage</li>
          <li>Save your messages</li>
          <li>Free audio messages</li>
          <li>Free animated stickers</li>
          <li id="Closed">&#10006;</li>
        </ul>
        <input
          className="Subscribe"
          id="RedSubscribe"
          type="Button"
          value="Subscribe"
          // onClick={() => setIsExploding(true)}
        />
      </div>
      <div className="BuyItem">
        <header>
          <h1 id="headerText">Bussiness</h1>
        </header>
        <div className="Price">
          <h2 id="h2">
            <p id="RedPrice">9</p>.99$
          </h2>
        </div>
        <ul>
          <li>Unlimited storage</li>
          <li>Save your messages</li>
          <li>Free audio messages</li>
          <li>Free animated stickers</li>
          <li>Unlimited rooms creating</li>
        </ul>
        <input
          className="Subscribe"
          id="OrangeSubscribe"
          type="Button"
          value="Subscribe"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};
export default Buy;
