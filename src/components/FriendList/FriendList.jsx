// import PropTypes from "prop-types";

export const FriendList = ( {friends} ) => {
    return (
        <ul>
        {friends.map( e => (
            <li className="item" key={e.id}>
                <span className="status"></span>
                <img className="avatar" src={e.avatar} alt="User avatar" width="48" />
                <p className="name">{e.name}</p>
            </li>
        ))}
        </ul>
    )
}

// FriendList.propTypes = {
//     id: PropTypes.number.isRequired,
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired
//   }

