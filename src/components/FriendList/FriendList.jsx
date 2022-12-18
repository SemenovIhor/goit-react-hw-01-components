import PropTypes from "prop-types";
import styles from './FriendList.module.css' 

export const FriendList = ( {friends} ) => {
    return (
        <ul className={styles.items}>
        {friends.map( e => (
            <li className={styles.item} key={e.id}>
                {e.isOnline ? (
                <span className={styles.status_active}></span>
                ) : (
                <span className={styles.status_not_active}></span>
                )}
                <img className="avatar" src={e.avatar} alt="User avatar" width="48" />
                <p className="name">{e.name}</p>
            </li>
        ))}
        </ul>
    )
}

FriendList.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
  }

