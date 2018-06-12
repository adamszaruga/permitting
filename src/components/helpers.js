import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 600px;
  background-color: #F4F4F4;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  border-radius: 5px;
  box-shadow: 0 8px 6px -6px black;
  font-family: 'Roboto', sans-serif;
`;

export const Sidebar = styled.div`
  width: 26%;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
  padding: 20px 35px;
`

export const Content = styled.div`
  width: 28%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  background-color: green;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
`

export const Logo = styled.div`
  width: 100%;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
`

export const Nav = styled.div`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  padding-top: 30px;
`

export const NavItem = styled.h6`
  color: #B6BEC7;
  cursor: pointer;
  margin-bottom: 13px;
  &:hover {
    color: #2C4863;
  }

`

export const Account = styled.div`
  width: 100%;
  margin-bottom: 5px;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  & svg {
    font-size: 40px;
    margin-right: 10px;
  }

`

export const AccountName = styled.h5`
  color: #2C4863;
 
`
export const Upgrade = styled.button.attrs({
  className: 'btn btn-primary',
})`
  width: 100%;
`;
