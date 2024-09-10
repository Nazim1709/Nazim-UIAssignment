import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomerRewards from './CustomerRewards'
import { fetchTransactions } from './BusinessLogic/utils'

function App() {
  const [transactions, setTransactions] = useState([])
  const [loading,setLoading]=useState(true)

  // API call
  useEffect(()=>{
    const fetchData=async()=>{
      try{
      const data= await fetchTransactions();
        setTransactions(data)
        setLoading(false)
      }
      catch(error){
        console.log("Error occured in API call")
      }
    }
    fetchData();
  },[])

  return (
  <div>

    <h1>Customer reward Points</h1>

    { loading ? <div>Loading transaction...</div>
    :  
      (transactions &&
      <CustomerRewards transactions={transactions} />)
    }

  </div>
  )
}

export default App
