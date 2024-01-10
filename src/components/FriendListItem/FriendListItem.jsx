import PropTypes from "prop-types";

import css from './FriendListItem.module.css'

export const FriendListItem = ({ isOnline, avatar, name}) => {
    return (
        <li className={css.item}>
            <span className={css.status}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}