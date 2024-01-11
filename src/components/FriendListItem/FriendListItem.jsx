import PropTypes from 'prop-types';

import { Item, FriendStatus, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <Item>
      <FriendStatus>{isOnline}</FriendStatus>
      <img src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </Item>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
