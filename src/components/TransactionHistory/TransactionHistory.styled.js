import styled from '@emotion/styled';

export const Table = styled.table`
  border: 3px solid black;
  width: 360px;
  margin: 60px auto;
  padding: 10px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  font-size: 16px;
  line-height: 1.18;

  background-color: #13d4b4;
`;

export const TableHeadCell = styled.th`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid black;
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: lightblue;
  }

  :hover {
    background-color: lightyellow;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid black;
`;
