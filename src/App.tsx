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
              <h3>Dec 20, 2020</h3>
            </div>
          </div>
        </div>
        <hr />
        <p><i className="la la-list mr-1" /> List of assets</p>
        <hr />
        <div className="file-list-wrapper">

          <div className="file-item"
          >
            <img src="https://picsum.photos/200/300" alt="asset-avatar" />
            <span>file.js</span>
            <span>3 MB</span>
            <span>april 20, 2020</span>
          </div>

          <div className="file-item"
          >
            <img src="https://picsum.photos/200/300" alt="asset-avatar" />
            <span>file.js</span>
            <span>3 MB</span>
            <span>april 20, 2020</span>
          </div>

          <div className="file-item"
          >
            <img src="https://picsum.photos/200/300" alt="asset-avatar" />
            <span>file.js</span>
            <span>3 MB</span>
            <span>april 20, 2020</span>
          </div>

          <div className="file-item"
          >
            <img src="https://picsum.photos/200/300" alt="asset-avatar" />
            <span>file.js</span>
            <span>3 MB</span>
            <span>april 20, 2020</span>
          </div>

          <div className="file-item"
          >
            <img src="https://picsum.photos/200/300" alt="asset-avatar" />
            <span>file.js</span>
            <span>3 MB</span>
            <span>april 20, 2020</span>
          </div>

          <div className="file-item"
          >
            <img src="https://picsum.photos/200/300" alt="asset-avatar" />
            <span>file.js</span>
            <span>3 MB</span>
            <span>april 20, 2020</span>
          </div>
          <div className="file-item"
          >
            <img src="https://picsum.photos/200/300" alt="asset-avatar" />
            <span>file.js</span>
            <span>3 MB</span>
            <span>april 20, 2020</span>
          </div>


        </div>
      </div>
    </div >
  );
}

export default App;
