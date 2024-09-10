import RewardPointsTable from "./RewardPointsTable";

import { pointsCalculater } from "./BusinessLogic/utils";
import { getMonthYear } from "./BusinessLogic/utils";


// function to group the transaction by customerId and month
const groupByCustomerAndMonth=(transactions)=>{
    const rewards={};

    transactions.forEach(({customerId,transactionDate,amount}) => {
        const monthYear=getMonthYear(transactionDate)

        // initialize customer's data if not present already
        if (!rewards[customerId]){
            rewards[customerId]={monthly:{},total:0}
        }

        const points=pointsCalculater(amount)
        if(!rewards[customerId].monthly[monthYear]){
            rewards[customerId].monthly[monthYear]=0
        }
        // add points for current month
        rewards[customerId].monthly[monthYear]+=points;
        // add total points for the customer
        rewards[customerId].total+=points;
    });

  return rewards  
}

const CustomerRewards=(props)=>{
    // eslint-disable-next-line react/prop-types
    const {transactions}=props;
    
    const rewards=groupByCustomerAndMonth(transactions);

    // For debugging
    console.log(transactions)
    console.log(rewards)
    
    return(
        <div>
            {Object.keys(rewards).length ==0 ?
                  (<div> No rewards available</div>)
                : (
                    <RewardPointsTable rewards={rewards}/>
                  )           

            }         
        </div>
    )
}

export default CustomerRewards;