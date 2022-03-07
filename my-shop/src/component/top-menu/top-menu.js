import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Input, Menu, MenuHeader, Segment } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import './top-menu.css';

class TopMenu extends React.Component {

  render() {

    return (
      <div>
        <Menu pointing>
          <Menu.Item >
            <Link to="/products"><Icon name='content' /></Link>
          </Menu.Item>
          <Menu.Item className='logo'>
          <Link to="/home"><p>SHOP</p>  </Link>
            
          </Menu.Item>
          <div className='top-menu-right'>
            <Menu.Item className='search-bar'>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item className='user' >
              <Icon name='user' />
            </Menu.Item>
            <Menu.Item className='favourite'>
              <Icon name='heart' />
            </Menu.Item>
            <Menu.Item className='cart'>
              <Icon name='shopping cart' />
            </Menu.Item>
          </div>
        </Menu >
      </div >
    )
  }
}
export default TopMenu;