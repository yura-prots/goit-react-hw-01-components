import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  margin-top: 50px;
  width: min-content;

  background: linear-gradient(
    180deg,
    transparent 50%,
    rgba(142, 227, 212, 0.22) 50%
  );
  border-radius: 18px;
`;

export const ProfileCard = styled.div`
  position: relative;
  text-align: center;

  width: 100%;
  padding: 16px;

  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(89, 213, 189, 0.45);
`;

export const ProfileImg = styled.img`
  position: absolute;
  transform: translate(-50px, -60px);

  max-height: 92px;
  border-radius: 50%;
  background: #d9d9d9;
  border: 6px solid #ffffff;
`;

export const ProfileName = styled.p`
  font-weight: 700;
  line-height: 1.187;

  margin-top: 49px;
  margin-bottom: 0;
  color: #000000;
`;

export const ProfileTag = styled.p`
  font-size: 12px;

  margin-top: 6px;
  margin-bottom: 0;
  color: #969696;
`;

export const ProfileLocation = styled.p`
  font-weight: 700;
  font-size: 12px;

  margin-top: 6px;
  margin-bottom: 0;
  color: #000000;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  padding: 12px;
  margin: 0;
`;

export const StatsItem = styled.li`
  display: grid;
  width: 80px;
  justify-items: center;
  :not(:last-child) {
    border-right: 1px solid #999999;
  }
  @media screen and (min-width: 768px) {
    width: 128px;
  }
`;

export const StatsLabel = styled.span`
  font-weight: 400;
  font-size: 12px;

  margin-bottom: 6px;
  color: #999999;
`;

export const StatsQuantity = styled.span`
  font-weight: 700;
  font-size: 24px;

  color: #000000;
`;
