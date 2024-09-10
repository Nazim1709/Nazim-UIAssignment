import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomerRewards from './CustomerRewards'
import { fetchTransactions } from './BusinessLogic/utils'


function App() {
  const [transactions, setTransactions] = useState([])
  const [status,setStatus]=useState("loading")

  // to handle error, loading scenario
  const getStatus=(status)=>{
    switch(status){
      case 'loading':
      return <div>Loading transaction...</div>
      case 'error':
      return <div>Error in fetching data...</div>
      case 'success':
      return <div>{transactions && <CustomerRewards transactions={transactions} />}</div>
      default:
        return <div>Some Error occured</div>
  
    }
  }

  // API call
  useEffect(()=>{
    const fetchData=async()=>{
      try{
      const data= await fetchTransactions();
        setTransactions(data)
        setStatus("success")
      }
      catch(error){
        console.log("Error occured in API call")
        setStatus("error");
      }
    }
    fetchData();
  },[])

  return (
  <div>

    <h1>Customer reward Points</h1>
    {getStatus(status)}

  </div>
  )
}

export default App
