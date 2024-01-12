import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  margin-top: 50px;
  width: min-content;

  border-radius: 18px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-bottom: 18px;
  color: #000000;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 6px;

  background-color: ${p => p.randomColor};

  :first-of-type {
    border-radius: 12px 0 0 12px;
  }
  :last-child {
    border-radius: 0 12px 12px 0;
  }
  @media screen and (min-width: 768px) {
    width: 128px;
  }
`;

export const ItemLabel = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #000000;
`;
export const ItemPercentage = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: #000000;
`;
