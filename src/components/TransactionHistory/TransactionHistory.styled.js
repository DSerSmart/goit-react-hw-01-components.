import styled from 'styled-components';

export const Table = styled.table`
  background-color: #fff;
  color: #fff;
  max-width: 450px;
  text-align: center;
  width: 100%;
  margin-left: 0px;
  margin-right: auto;
  align-items: center;
  border: solid;
  border-color: #f44336 #2196f3 #4caf50 #ff9800;
`;

export const Head = styled.thead`
  background-color: turquoise;
`;

export const HeadRow = styled.tr`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 18px;
`;

export const HeadCell = styled.th`
  height: 40px;
`;

export const TableBody = styled.tbody`
  color: Navy;
`;

export const TableRow = styled.tr`
  height: 30px;
  :nth-child(2n) {
    background-color: DeepSkyBlue;
  }
`;

export const TableCell = styled.td`
  text-transform: capitalize;
`;
