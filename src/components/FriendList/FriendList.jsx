import PropTypes from "prop-types";


export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(({id, isOnline, avatar, name}) => (
                <li className="item" key={id}>
                    <span className="status">{isOnline}</span>
                    <img className="avatar" src={avatar} alt={name} width="48" />
                    <p className="name">{name}</p>
                </li>
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