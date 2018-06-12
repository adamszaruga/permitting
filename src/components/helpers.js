import styled from 'styled-components';

let blue = '#2C4863';

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
  box-shadow: 0 8px 6px -6px rgba(0,0,0,0.2);
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
  font-weight: 300;
  &:hover {
    color: ${blue};
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
    color: #999;
  }

`

export const AccountName = styled.h5`
  color: ${blue};
 
`
export const Upgrade = styled.button.attrs({
  className: 'btn btn-primary',
})`
  width: 100%;
`;

export const Content = styled.div`
  width: 28%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 60px;
  padding-bottom: 35px;
`

export const ContentHeader = styled.div`
  width: 100%;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
`

export const Title = styled.h1`
  width: 50%;
  color: ${blue};
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  font-weight: 300;
  margin-bottom: 0;
`
export const Actions = styled.div`
  width: 50%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  text-align: right;
`
export const ActionButton = styled.button.attrs({
  className: 'btn btn-primary',
})`
  font-weight: 300;
`;

export const ContentBody = styled.div`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
`

export const Table = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 5px;
  border: 1px solid #F4F4F4;
  box-shadow: 0 8px 6px -6px rgba(0,0,0,0.2);
  padding: 20px 20px;
`

export const TableHeader = styled.div`
  width: 100%;
  color: #AEB9C3;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  padding: 8px 10px;
`

export const TableRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  border-bottom: 1px solid #DBDBDB;
  padding: 10px 10px;
  color: #AEB9C3;
  font-weight:300;
  font-size: 12px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #FAFAFA;
  }
  & .permit-column:first-child {
    font-weight: 500;
    color: ${blue};
  }
`
export const TableColumn = styled.div.attrs({
  className: 'permit-column',
})`
  width: 100%
`

