import PropTypes from "prop-types";
import styles from './TransactionHistory.module.css'

export const TransactionHistory = ( {items} ) => {
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
            {items.map(stat => (
                <tr className={styles.table_body} key={stat.id}>
                    <td>{stat.type}</td>
                    <td>{stat.amount}</td>
                    <td>{stat.currency}</td>
                </tr>
            ))}    
            </tbody>
        </table></>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}