import {useRef} from "react";



const Add = ({list,changeList})=>{

    const descriptionRef = useRef("")
    const amountRef = useRef("")
    const categoryRef = useRef("")

    return <form className="flex flex-col items-center " onSubmit={
        (event) => {
            event.preventDefault()
            if (descriptionRef.current.value)
                changeList([...list,{
                    description: descriptionRef.current.value,
                    amount: Number(amountRef.current.value),
                    category: categoryRef.current.value
                }])
            descriptionRef.current.value ="";
            amountRef.current.value="";
            categoryRef.current.value="";
        }
    }>
        <div className="mb-3 flex flex-col ">
            <label className="mb-2 font-bold text-xl" htmlFor="description">
                Description
            </label>
            <input
                ref={descriptionRef}
                name="description"
                id="description"
                type="text"
                className="border w-90 outline-0 pl-3 h-9 rounded-md border-gray-400"
                required
                minLength={3}
            />
        </div>
        <div className="mb-3 flex flex-col text-xl">
            <label className="mb-2 font-bold" htmlFor="amount">
                Amount
            </label>
            <input
                ref={amountRef}
                id="amount"
                name="amount"
                type="number"
                className="border w-90 outline-0 pl-3 h-9 rounded-md border-gray-400"
                min={1}
                required
            />
        </div>
        <div className="mb-3 flex flex-col">
            <label className="mb-2 font-bold text-xl" htmlFor="category">
                Category
            </label>
            <select
                id="category"
                className="border w-90 outline-0 pl-3 h-9 rounded-md border-gray-400"
                name="category"
                ref={categoryRef}
                required
            >
                <option value=""></option>
                <option value="groceries">Groceries</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
            </select>
        </div>
        <button className="bg-blue-600 text-white rounded-xl py-2 px-8" type="submit">
            Submit
        </button>
        
    </form>
 }

 export default Add