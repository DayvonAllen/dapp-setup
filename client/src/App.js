
loadWeb3 = async () => {
  // modern web browser
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  }
  // legacy web browsers
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected, You should consider trying MetaMask"
    );
  }
};

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
