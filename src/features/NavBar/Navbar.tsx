import React, { useState } from 'react';
import { ThunderboltFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
// import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons';
// import './Navbar.css'

const items: MenuProps['items'] = [
  {
    label: (
      <a href="/" target="_self" rel="noopener noreferrer">
        Home
      </a>
    ),
    key: 'home',
  },
  {
    label: 'About',
    key: 'about',
  },
  {
    label: 'Projects',
    key: 'projects',
  },
  {
    label: 'Stack',
    key: 'stack',
  },
  {
    label: 'Resume',
    key: 'resume',
  },
  {
    label: 'Contact',
    key: 'contact',
  },
];

export const NavBar: React.FC = () => {
  const [current, setCurrent] = useState('home');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (

    <div className="container-fluid">
      <div className='header'>
        <div className="logo">
          <ThunderboltFilled className='thunderBolt'/>
          <a href="/" target="_self" rel='noopener noreferrer'>QSOD</a>
        </div>
        <Menu mode="horizontal" selectedKeys={[current]} items={items} onClick={onClick} />
      </div>
    </div>
  );
  
};

// <section>
//   <div className='container'>
//     <div className='container-props'>
//       <span>Work</span>
//       <span>About</span>
//       <span>Resume</span>
//     </div>
//     <div className='container-links'>
//       <div><a href="https://github.com/Quintinus98" target="_blank" rel='noopener noreferrer'><GithubOutlined /></a></div>
//       <div><a href="mailto:obododavidsop@gmail.com" target="_blank" rel='noopener noreferrer'><MailOutlined /></a></div>
//       <div><a href="https://www.linkedin.com/in/david-obodo-sop/" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a></div>
//     </div>
//   </div>
//     <Divider />
// </section>
