import PropTypes from "prop-types";
import styles from './FriendList.module.css' 

import { FriendListItem } from './FriendListItem/FriendListItem'; 

export const FriendList = ( {friends} ) => {
    return (
        <ul className={styles.items}>
            {friends.map(({id, ...friend}) => (
                <li className={styles.item} key={id}>
                    <FriendListItem
                        friend={friend}
                    />
                </li> 
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }).isRequired).isRequired
  }

