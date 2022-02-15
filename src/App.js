import React from 'react';
import './App.css';
import AppHeader from './Components/Common/Header';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import AppHome from './Components/Views/Home';

const { Header,  Content, Footer } = Layout;

function App() {


  return (
    <div>
        <Layout className="mainLayout">
          <Header>
            <AppHeader/>
          </Header>
          <Content>
            <AppHome></AppHome>
          </Content>
          
        </Layout>   
    </div>
  );
}

export default App;
