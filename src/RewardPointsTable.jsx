
// eslint-disable-next-line react/prop-types
const RewardPointsTable=({rewards})=>{

    return <div>
    {Object.entries(rewards).map(([customerId,{monthly,total}])=>(
        <div key={customerId}>
            <h2>Customer ID: {customerId}</h2>
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                {Object.entries(monthly).map(([month,points])=>(
                <tr key={month}>
                    <td>{month}</td>
                    <td>{points}</td>

                    </tr>
            ))}
            <tr>
            <td>Total</td>
            <td>{total}</td>
            </tr>
                </tbody>
            </table>
        </div>
    ))}

</div>
}

export default RewardPointsTable