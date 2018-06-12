import React, { Component } from 'react';
import { Main, Sidebar, Content, 
	     Logo, Nav, NavItem, 
	     Account, AccountName, Upgrade, 
	     ContentHeader, ContentBody, Title,
	     Actions, Table, ActionButton,
	     TableHeader, TableRow, TableColumn } from './components/helpers.js';
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
	      		<Content>
	      			<ContentHeader>
	      				<Title>Permits</Title>
	      				<Actions>
	      					<ActionButton>New Permit</ActionButton>
	      				</Actions>
	      			</ContentHeader>
	      			<ContentBody>
	      				<Table>
	      					<TableHeader>
	      						<TableColumn>Project</TableColumn>
	      						<TableColumn>Applicant</TableColumn>
	      						<TableColumn>Contractor</TableColumn>
	      						<TableColumn>Owner</TableColumn>
	      					</TableHeader>
	      					<TableRow>
	      						<TableColumn>Medlock Bridge</TableColumn>
	      						<TableColumn>Adam Szaruga</TableColumn>
	      						<TableColumn>Security Vault Works</TableColumn>
	      						<TableColumn>Bank of America</TableColumn>
	      					</TableRow>
	      					<TableRow>
	      						<TableColumn>Medlock Bridge</TableColumn>
	      						<TableColumn>Adam Szaruga</TableColumn>
	      						<TableColumn>Security Vault Works</TableColumn>
	      						<TableColumn>Bank of America</TableColumn>
	      					</TableRow>
	      					<TableRow>
	      						<TableColumn>Medlock Bridge</TableColumn>
	      						<TableColumn>Adam Szaruga</TableColumn>
	      						<TableColumn>Security Vault Works</TableColumn>
	      						<TableColumn>Bank of America</TableColumn>
	      					</TableRow>
	      					<TableRow>
	      						<TableColumn>Medlock Bridge</TableColumn>
	      						<TableColumn>Adam Szaruga</TableColumn>
	      						<TableColumn>Security Vault Works</TableColumn>
	      						<TableColumn>Bank of America</TableColumn>
	      					</TableRow>
	      					<TableRow>
	      						<TableColumn>Medlock Bridge</TableColumn>
	      						<TableColumn>Adam Szaruga</TableColumn>
	      						<TableColumn>Security Vault Works</TableColumn>
	      						<TableColumn>Bank of America</TableColumn>
	      					</TableRow>
	      				</Table>
	      			</ContentBody>
	      		</Content>
	      	</Main>
      	</div>
    </div>
    );
  }
}

export default Dashboard;
