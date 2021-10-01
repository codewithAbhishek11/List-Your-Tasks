import React, {useState} from 'react'
import todo from '../image/book.png'
import FontAwesome from 'react-fontawesome'

const Todo = () => {
    const[inputData, setInputData] =  useState('');
    const[item,setItem] = useState([]);

    const addItem = () =>{
        if(inputData !== ""){
            setItem( [...item, inputData]);
            setInputData('');
        }

    }
    const deleteItem = (ind) =>{
        
       const updateditem = item.filter((ele,index)=>{
            if(index !== ind)
            return ele;
        })
        setItem(updateditem);
        
    }

    const deleteAll =() =>{
        setItem([]);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        {<img src={todo} alt="todoimg"></img>}
                        <figcaption>Add Your Task Here</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="Add Items.."
                        value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
                        <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>
                    </div>
                    <div className="showItems">
                        {
                            item.map((ele,index)=> {
                               return( <div className="eachItem" key={index}>
                                    <h3>{ele}</h3>
                                    <i className="fas fa-trash-alt add-btn" title="Delete Item" onClick={()=> deleteItem(index)}>X</i>
                                </div>
                               )
                            })
                        }
                       
                    </div>
                    <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={deleteAll}><span>REMOVE ALL</span></button>
                    </div>
                  
                </div>
            </div>
        </>
    )
}

export default Todo
