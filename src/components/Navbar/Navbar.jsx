import React,{useState} from 'react'

import logo from '../../assests//images/logo.png';
const Navbar = () => {
    const[isWalletConnected,setIsWalletConnected] = useState(false);
    const[error,setError] = useState(null);
    const[customerAddress,setCustomerAddress] = useState(null);
    const checkIfWalletIsConnected = async () => {
        try {
          if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            setIsWalletConnected(true);
            setCustomerAddress(account);
            console.log("Account Connected: ", account);
          } else {
            setError("Please install a MetaMask wallet to use our bank.");
            console.log("No Metamask detected");
          }
        } catch (error) {
          console.log(error);
        }
      }
  return (
    <div className="container navbar__section">
       <nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="30" height="24" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
        <button type="button" class="btn navbarBtn" onClick={checkIfWalletIsConnected}>Connect Wallet</button>
        {
            window.ethereum ? null : <p className="text-light">Address : {customerAddress}</p>
        }
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar