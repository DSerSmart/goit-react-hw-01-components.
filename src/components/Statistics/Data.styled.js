import styled from 'styled-components';

export const Statistics = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  margin-bottom: 25px;
  margin-left: 0px;
  background-color: rgb(189, 189, 189);
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;
export const Statlist = styled.ul`
  display: inline-flex;
  flex-direction: row;
  list-style: none;
  background-color: greenyellow;
  padding-left: 0;
  margin: 0;
  border-radius: 0px 0px 10px 10px;
  /* ===== */
  width: calc(100% / 5);
  :first-child {
    background-color: lightskyblue;
    border-bottom-left-radius: 10px;
  }

  :nth-child(2) {
    background-color: #fc83c7;
  }

  :nth-child(3) {
    background-color: yellow;
  }

  :nth-child(4) {
    background-color: tomato;
  }

  :last-child {
    background-color: lawngreen;
    border-bottom-right-radius: 10px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
  padding: 24px;
`;
export const Title = styled.h2`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
`;
