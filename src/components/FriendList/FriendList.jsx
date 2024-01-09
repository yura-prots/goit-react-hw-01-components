import PropTypes from "prop-types";

import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(({id, isOnline, avatar, name}) => (
                <FriendListItem 
                    key={id} 
                    isOnline={isOnline} 
                    avatar={avatar} 
                    name={name} 
                />
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }))
}