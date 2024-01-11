import styled from '@emotion/styled';

export const Table = styled.table`
  border: 3px solid black;
  width: 360px;
  margin: 60px auto;
  padding: 10px;
  border-collapse: collapse;

  & th,
  & td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid black;
  }

  & th {
    background-color: lightgray;
    font-weight: bold;
  }

  & td {
    background-color: white;
  }

  & tr:nth-of-type(even) {
    background-color: lightblue;
  }

  & tr:last-of-type td {
    border-bottom: none;
  }

  & td:hover,
  & td:hover ~ td {
    background-color: lightyellow;
  }

  // overflow: hidden;
  // text-transform: capitalize;

  // width: 100%;

  // margin-left: 16px;
  // margin-bottom: 20px;

  // background: rgba(142, 227, 212, 0.22);

  // border-spacing: 0;
  // border-radius: 18px;

  // @media screen and (max-width: 425px) {
  //   width: 300px;
  //   margin: auto;
  // }
`;

export const TableHead = styled.thead`
  font-size: 16px;
  line-height: 1.18;

  background-color: #13d4b4;
`;
