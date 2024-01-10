import PropTypes from "prop-types";

import { TransactionHistoryRow } from "components/TransactionHistoryRow/TransactionHistoryRow"
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.transactions}>
                <thead className={css.transactions__head}>
                    <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
                </thead>
                
            <tbody>
                {items.map(({id, type, amount, currency}) => (
                <TransactionHistoryRow
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency}
                />
                ))}                
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}