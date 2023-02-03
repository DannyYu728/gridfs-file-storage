import React, { PureComponent } from 'react';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import UploadPage from './components/UploadPage';
import ListPage from './components/ListPage';
import Upload from './assets/images/upload.png';
import List from './assets/images/list.png';

class App extends PureComponent<{}> {
  render() {
    return (
      <div className="Main">
        <div className="Header">
          <p className="Header__Title">GridFS - Upload and List Files</p>

          <div className="Menu">
            <Link to='/'>
              <img
                src={Upload}
                alt="upload"
                className="Menu__Item"
              />
            </Link>
            <Link to='/list'>
              <img
                src={List}
                alt="list"
                className="Menu__Item"
              />
            </Link>
          </div>
        </div>

        <div className="Routes">
          <Routes>
            <Route path='/' element={<UploadPage />} />
            <Route path='/list' element={<ListPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
