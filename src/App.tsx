import React, { useState, useEffect } from 'react';
import './styles/index.scss'
import Header from './components/Header';
import axios from 'axios'
import moment from 'moment'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('./mist.map.json')
      .then(res => {
        setData(res.data.mist)
      })
  })

  const getNodeSize = (list) => {
    let size = 0;
    list.forEach(item => {
      size += item.size;
    })
    return size;
  }


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
              <h3>{data.length}</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mist-card">
              <p>Node Size</p>
              <h3>{getNodeSize(data)} <small>MB</small></h3>
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

          {data.reverse().map((file, index) => {
            return (
              <div
                className="file-item"
                key={index}
              >
                <span>
                  <img src="https://picsum.photos/200/300" alt="asset-avatar" />
                  {file.name}
                </span>
                <span>{file.size}</span>
                <span>{moment(file.modified).format('MMMM D, YYYY')}</span>
                <button className="btn btn-dark btn-sm px-3 py-2">
                  <i className="la la-copy mr-2" />
                  Copy Link
              </button>
              </div>
            )
          })}




        </div>
      </div>
    </div >
  );
}

export default App;
