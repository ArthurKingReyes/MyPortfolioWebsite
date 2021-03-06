import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content}from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

function App() {       
  
return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to='/'>Home</Link>}scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link onClick={()=>hideMenu()} style={{textDecoration:'none', color:'black'}} to='/'>Home</Link>}>
            <Navigation>
                <Link to="/resume" onClick={()=>hideMenu()}>Resume</Link>
                <Link to="/projects" onClick={()=>hideMenu()}>Projects</Link>
                <Link to="/aboutme" onClick={()=>hideMenu()}>About Me</Link>
                <Link to="/contact" onClick={()=>hideMenu()}>Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

// Hide navigation drawer after clicking page name
function hideMenu(){
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
}

export default App;
