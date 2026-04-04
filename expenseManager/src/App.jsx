import './App.css'
import Add from './Add.jsx'
import View from './View.jsx'
import { useState } from 'react'

function App() {
    const [expenseList,setExpenseList] = useState([])
  return <div className='flex items-center flex-col justify-center h-screen'>
    <Add list={expenseList} changeList={setExpenseList} />
    {console.log(expenseList)}
    <View list={expenseList} changeList={setExpenseList}/>
  </div>
}

export default App
