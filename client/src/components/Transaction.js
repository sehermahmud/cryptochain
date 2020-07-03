import React from 'react'
import '../index.css';

const Transaction = ({ transaction }) => {
    const { input, outputMap } = transaction;
    const recipient = Object.keys(outputMap);

    return (
        <div className="Transaction">
            <div>From: {`${input.address.substring(0, 20)}...`} | Balance: {input.amount}</div>
            {
                recipient.map(recipient => (
                    <div key={recipient}>
                        To: {`${recipient.substring(0, 20)}`} | Sent: {outputMap[recipient]}
                    </div>
                ))
            }
        </div>
    )
}

export default Transaction;
