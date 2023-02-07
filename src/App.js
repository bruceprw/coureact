import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCC7SDYgABduhAdowt2USdXqgczGY1DvaE",
  authDomain: "coureact.firebaseapp.com",
  projectId: "coureact",
  storageBucket: "coureact.appspot.com",
  messagingSenderId: "188512414625",
  appId: "1:188512414625:web:fb8d7e245496bf29c6f9e0",
  measurementId: "G-19YF29VBJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
