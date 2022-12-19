import PropTypes from "prop-types";
import styles from '../FriendList.module.css' 

export const FriendListItem = ( {friend} ) => {
    return (
        <>
            {friend.isOnline ? (
            <span className={styles.status_active}></span>
            ) : (
            <span className={styles.status_not_active}></span>
            )}
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
        </>
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }).isRequired
  }
