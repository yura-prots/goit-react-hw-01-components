import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: rgba(89, 213, 189, 0.45);
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${p => (p.status ? '#00FF00' : '#FF0000')};
`;

export const Name = styled.p`
  margin-left: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 22px;
  // color: #333;
`;
