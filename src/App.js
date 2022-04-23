import React from 'react';
import './App.css';
import MyHeader from './Components/AppHeader';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import AppFooter from './Components/Footer';

import About from './Components/About';
import AppFeatures from './Components/Features';
import AppDescription from './Components/Description';
import AppContact from './Components/Contact';

const { Header,  Content, Footer } = Layout;

function App() {


  return (
    <div>
        <Layout className="mainLayout">
          <Header>
            <MyHeader/>
          </Header>
          <Content>
            <AppDescription/>
            <About/>
            <AppFeatures/>
            <AppContact/>
          </Content>
          <Footer>
            <AppFooter/>
          </Footer>
        </Layout>   
    </div>
  );
}

export default App;
