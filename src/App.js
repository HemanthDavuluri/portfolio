import "./App.css";

import {doc, getDoc} from "firebase/firestore/lite";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import logo from "./logo.svg";
import UnderConstruction from "./pages/Under Construction/UnderConstruction";
import {setPreChecking, setUnderConstruction} from "./redux/configSlice";
import {db} from "./util/Firebase";

function App() {
  const dispatch = useDispatch();
  const pre_checking = useSelector((state) => state.config.pre_checking);
  const under_construction =
      useSelector((state) => state.config.under_construction);

  useEffect(() => {
    const getConfig = async () => {
      const Doc = doc(db, "portfolio-config/portfolio-config");
      const docRef = await getDoc(Doc);
      if (!docRef.exists) {
        window.alert("error");
      } else {
        dispatch(setPreChecking({pre_checking : false}));
        dispatch(setUnderConstruction({
          under_construction : docRef.data().under_construction,
        }));
      }
    };
    getConfig();
  }, [ dispatch ]);

  if (pre_checking === true) {
    return (<div className = "App"><p>Loading configs</p>
      </div>);
  } else if (under_construction === true) {
    return <UnderConstruction />;
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
    className = "App-link"
    href = "https://reactjs.org"
    target = "_blank"
    rel = "noopener noreferrer" > welcome to portfolio</a>
        </header><
          /div>
    );
  }
}

export default App;
