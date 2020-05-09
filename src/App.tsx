import React from 'react';
import './styles/index.scss'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="fixed-top" >
        <Header />
      </div>

      <div className="content-body">
        <div className="row">
          <div className="col-md-4">
            <div className="mist-card">
              <p>Files</p>
              <h3>32</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mist-card">
              <p>Node Size</p>
              <h3>4 <small>MB</small></h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mist-card">
              <p>Last update</p>
              <h3>April 10, 2020</h3>
            </div>
          </div>
        </div>
        <hr />
        <p>this is not cool</p>
      </div>
    </div >
  );
}

export default App;
