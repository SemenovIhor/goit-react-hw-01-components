import PropTypes from "prop-types";
import styles from './FriendListItem.module.css'

export const FriendListItem = ( {items} ) => {
    return (
        <><table className={styles.transaction_history}>
            <thead>
                <tr>
                    <th className={styles.table_head}>Type</th>
                    <th className={styles.table_head}>Amount</th>
                    <th className={styles.table_head}>Currency</th>
                </tr>
            </thead>

            <tbody>
            {items.map(e => (
                <tr className={styles.table_body} kay={e.id}>
                    <td  kay={e.id.toString().slice(0, 7)}>{e.type}</td>
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