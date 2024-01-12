import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
`;

export const FriendStatus = styled.span`
  position: absolute;
  right: 0;
  bottom: 20px;
  display: block;

  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${p => (p.status ? '#00FF00' : '#FF0000')};
`;

export const FriendName = styled.p`
  margin-top: 0;
  margin-bottom: 6px;
`;
