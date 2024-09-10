// Function to calculate the reward points
export const pointsCalculater=(amount)=>{
    let points=0;
    if(amount>100){
        points+= 2*(amount-100);
        points+=50 // for amount between 50 and 100
    }else if(amount>50){
        points+=(amount-50)
    }
    return points
}

// Function to get Month from transaction date
export const getMonthYear=(dateString)=>{
    const d=new Date(dateString)
    return d.toLocaleString('default',{month:'long',year:'numeric'})
}

// simulating API call to fetch transactions
export const fetchTransactions=()=>{

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([
              {customerId:1, transactionDate:'2024-01-15',amount:120},
              {customerId:1, transactionDate:'2024-02-20',amount:80},
              {customerId:2, transactionDate:'2024-01-10',amount:160},
              {customerId:2, transactionDate:'2024-02-12',amount:60},
              {customerId:2, transactionDate:'2024-03-05',amount:45},
              {customerId:3, transactionDate:'2024-03-22',amount:220},
            ])
          },1000)
    })
}