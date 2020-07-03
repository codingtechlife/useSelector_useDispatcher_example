import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.css';

import {dataAction} from './actions/getDataAction';

function App() {
  
  const data = useSelector(state => state.dataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataAction())
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data}</h1>
      </header>
    </div>
  );
}

export default App;
