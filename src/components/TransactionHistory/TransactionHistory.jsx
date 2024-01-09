import PropTypes from "prop-types";

import { TransactionHistoryRow } from "components/TransactionHistory/TransactionHistoryRow/TransactionHistoryRow"

export const TransactionHistory = ({items}) => {
    return (
        <table className="transaction-history">
                <thead>
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