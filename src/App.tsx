import React from 'react';
import './App.css';
import { NavBar } from './features/NavBar/Navbar';
import { AppHome } from './views/Home';
import { Layout } from 'antd';

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="mainLayout">
        <Header>
          <NavBar />
        </Header>
        <Content>
          <AppHome />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
