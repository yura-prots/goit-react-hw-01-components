import PropTypes from 'prop-types';
import { getRandomColor } from 'utils/getRandomColor';

import {
  Wrapper,
  Title,
  List,
  Item,
  ItemLabel,
  ItemPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} randomColor={getRandomColor()}>
            <ItemLabel>{label}</ItemLabel>
            <ItemPercentage>{percentage}%</ItemPercentage>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
