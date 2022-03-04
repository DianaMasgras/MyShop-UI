import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Input, Menu, Segment } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

class TopMenu extends React.Component {

  render() {

    return (
      <div>
        <Menu pointing>
          <Menu.Item >
              <Link to="/products"><Icon name='content' /></Link> 
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
export default TopMenu;