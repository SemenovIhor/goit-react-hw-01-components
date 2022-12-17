import PropTypes from "prop-types";

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
                    <td kay={e.id.toString().slice(0, 7)}>{e.type}</td>
                    <td kay={e.id.toString().slice(9, 12)}>{e.amount}</td>
                    <td kay={e.id.toString().slice(14, 17)}>{e.currency}</td>
                </tr>
            ))}    
            </tbody>
        </table></>
    )
}

FriendListItem.propTypes = {
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
  }