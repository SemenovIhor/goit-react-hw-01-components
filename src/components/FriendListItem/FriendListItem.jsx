// import PropTypes from "prop-types";

export const FriendListItem = ( {items} ) => {
    return (
        <><table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
            {items.map(e => (
                <tr kay={e.id}>
                    <td>{e.type}</td>
                    <td>{e.amount}</td>
                    <td>{e.currency}</td>
                </tr>
            ))}    
            </tbody>
        </table></>
    )
}

// FriendListItem.propTypes = {
//     id: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     amount: PropTypes.string.isRequired,
//     currency: PropTypes.string.isRequired
//   }