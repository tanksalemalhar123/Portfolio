import React, { Component } from 'react';
import {Layout,Header,Navigation,Content,Drawer} from 'react-mdl';
import './App.css';
import Main from './components/Main';
import { Link } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout >
          <Header className="header-color" title={<Link style={{textDecoration: 'none' ,color:'white'}} to="/" >My Portfolio</Link>} scroll>
              <Navigation>
                  <Link to="/Resume">Resume</Link>
                  <Link to="/Projects">Projects</Link>
                  <Link to="/Contact">Contact</Link>
              </Navigation>

          </Header>
          <Drawer title={<Link style={{textDecoration: 'none' ,color:'black'}} to="/" >My Portfolio</Link>} scroll>
              <Navigation>
                  <Link to="/Resume">Resume</Link>
                  <Link to="/Projects">Projects</Link>
                  <Link to="/Contact">Contact</Link>
              </Navigation>
          </Drawer>

          <Main/>
          <Content />
      </Layout>
  </div>
    );
  }
}


