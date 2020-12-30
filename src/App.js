import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Navbar from './components/pages/navbar';
import About from './components/pages/about';
import Home from './components/pages/home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Chip from 'material-ui/Chip';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = (event) => {
    this.setState({
      open: !this.state.open,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <AppBar title="FAQ" iconClassNameRight="muidocs-icon-navigation-expand-more" showMenuIconButton={true} onLeftIconButtonTouchTap={this.handleToggle} >
              <div className="App">
                <Router>
                  <div>
                    <Navbar /><hr/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/About' render={ () => <About name={'Tom'}/> }/>
                  </div>
                </Router>
              </div>
            </AppBar>
            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
              animation={PopoverAnimationVertical}
            >
              <Menu>
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help &amp; feedback" />
                <MenuItem primaryText="Settings" />
                <MenuItem primaryText="Sign out" />
              </Menu>
            </Popover>
          </div>
          <header>
            <List>
              <ListItem leftAvatar={<Avatar src={logo} />}>
                Welcome to React
              </ListItem>
            </List>
          </header>

          <Chip>
            To Get started, edit <code>src/App.js</code> and save to reload.
          </Chip>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
