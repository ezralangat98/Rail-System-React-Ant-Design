import React from 'react';
import './App.css';
import AppHeader from './Components/Common/Header';
import 'antd/dist/antd.css';

import { Layout } from 'antd';

const { Header } = Layout;

function App() {


  return (
    <div>
        <Layout className="mainLayout">
          <Header>
            <AppHeader/>
          </Header>
          
        </Layout>   
    </div>
  );
}

export default App;
