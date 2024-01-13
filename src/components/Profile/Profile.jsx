import PropTypes from 'prop-types';

import {
  Container,
  Card,
  Img,
  Name,
  Tag,
  Location,
  List,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <Card>
        <Img src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Card>

      <List>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </List>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
