import styled from '@emotion/styled';

export const Wrapper = styled.section`
  margin: 24px auto;
  padding: 12px;

  background: rgba(142, 227, 212, 0.22);
  border-radius: 18px;
  @media screen and (max-width: 768px) {
    width: fit-content;
  }
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
  display: grid;
  justify-items: center;

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
