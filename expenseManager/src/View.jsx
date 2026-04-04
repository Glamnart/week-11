import { useState} from "react";

const Dropdown = ({setChoice})=>{
    return<select
        className="border border-e-gray-400 mb-5 px-6 py-2 rounded-md text-xl"
        onChange={(e) => setChoice(e.target.value)}
    >
        <option value="all">All categories</option>
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
    </select>
}

const remove= (prop,changeList,list)=>{
    let tempList = list.filter((item) => item != prop)
    changeList(tempList);
}

const Table = ({list,show,changeList})=>{

    const total = (list,show) =>{
        let newList;
        switch(show)
        {
            case "groceries": 
                newList = list.filter(({category})=>category==="groceries");
                break;
            case "utilities":
                newList = list.filter(({category})=>category==="utilities");
                break;
            case "entertainment":
                newList = list.filter(({category})=>category==="entertainment")
                break;
            default:
                newList = list;
        }
        
        let total = newList.reduce((total,{amount})=> total + amount,0)

        return total;
    }

    const rows = (list,show) =>{
        let newList;
        switch(show)
        {
            case "groceries": 
                newList = list.filter(({category})=>category==="groceries");
                break;
            case "utilities":
                newList = list.filter(({category})=>category==="utilities");
                break;
            case "entertainment":
                newList = list.filter(({category})=>category==="entertainment")
                break;
            default:
                newList = list
        }

        let rows = newList.map(({description,amount,category},rowNo)=>{
            return <tr key={rowNo}>
                <td>{String(description).charAt(0).toUpperCase() + String(description).slice(1)}</td>
                <td>{`$${amount}.00`}</td>
                <td>{String(category).charAt(0).toUpperCase() + String(category).slice(1)}</td>
                <td><button onClick={()=>{remove(newList[rowNo],changeList,list)}} className="border border-red-800 rounded-lg w-20 text-red-800 text-xl hover:bg-red-800 hover:text-white p-2">Delete</button></td>
            </tr>
        })
        return rows
    }

    return<table className="">
        <thead className="">
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th >Category</th>
                <th></th>
            </tr>
            </thead>
        <tbody>
            {rows(list,show)}
            <tr className="border-t-2">
                <td>Total</td>
                <td className="text-center"colSpan={2}>{`$${total(list,show)}.00`}</td>
            </tr>
        </tbody>
    </table>
}

const View = ({list,changeList})=>{
    const[filter,setFilter] = useState("all")
    return<div className="flex flex-col items-center mt-10">
        <Dropdown setChoice={setFilter}/>
        <Table list={list} show={filter} changeList={changeList}/>
    </div> 
}

export default View