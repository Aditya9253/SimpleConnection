import { useState } from "react";
import Web3 from "web3";
import lottery from "./contracts/lottery.json";
import "./App.css";

function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
    connected: false,
    accounts: [],
  });

  async function connectWallet() {
    try {
      await window.ethereum.enable();
      const web3 = new Web3(window.ethereum);


      const deployedNetwork = "0xcD8987c928de8F86d3F054FEAf66E687a588E1f1";

      const contract = new web3.eth.Contract(lottery.abi, deployedNetwork);
      setState({ web3: web3, contract: contract, connected: true });


    } catch (error) {
      console.log("Error connecting to MetaMask:", error);

    }
  }

  async function getAccounts() {

    
    try {
      const { web3 } = state;
      const accounts = await web3.eth.getAccounts();


      setState((prevState) => ({ ...prevState, accounts: accounts }));
    } catch (error) {
      console.log("Error getting accounts:", error);


    }
  }

  return (
    <div className="App">
      {state.connected ? (
        <>
          <p>Connected to MetaMask</p>
          <button onClick={getAccounts}>Get Accounts</button>
          <div>
            <h3>Accounts:</h3>
            {state.accounts && state.accounts.length > 0 ? (
              state.accounts.map((account) => <p key={account}>{account}</p>)
            ) : (
              <p>No accounts available</p>
            )}
          </div>
        </>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default App;




