import React, { Component } from 'react';
import { Main, Sidebar, Content, Logo, Nav, NavItem, Account, AccountName, Upgrade } from './components/helpers.js';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUserCircle from '@fortawesome/fontawesome-free-solid/faUserCircle'




class Dashboard extends Component {
  render() {
    let { firebase } = this.props;
    return (
      <div className="Dashboard">
      	<div className="container">
	      	<Main>
	      		<Sidebar>
	      			<Logo><img src="./logo.png" /></Logo>
	      			<Nav>
	      				<NavItem>Permits</NavItem>
	      				<NavItem>Applicants</NavItem>
	      				<NavItem>Owners</NavItem>
	      				<NavItem>Contractors</NavItem>
	      			</Nav>
	      			<Account>
	      				<FontAwesomeIcon icon={faUserCircle} />
	      				<AccountName>Free Demo</AccountName>
	      			</Account>
	      			<Upgrade>Upgrade</Upgrade>
	      		</Sidebar>
	      		<Content>This is the content</Content>
	      	</Main>
      	</div>
      </div>
    );
  }
}

export default Dashboard;
