
//single selection
//multi selection
import { useState } from "react";
import data from "./data";
import './index.css';

export default function Accordian(){

    const [selected, setSelected]= useState(null);
    const [enableMultiSelection, setEnableMulttiSelection] = useState(false);
    const [mutiple,setMultiple] = useState([])

    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...mutiple];
        const findIndexOfCurrentId=cpyMultiple.indexOf(getCurrentId)

        console.log(findIndexOfCurrentId);
        if(findIndexOfCurrentId === -1)cpyMultiple.push(getCurrentId)
       else cpyMultiple.splice(findIndexOfCurrentId , 1)

        setMultiple(cpyMultiple);
        

    }
    console.log(selected, mutiple);
    return<div className="wrapper">
        <button onClick ={()=> setEnableMulttiSelection(!enableMultiSelection)}>Enable multi-selection</button>
        <div className="accordion">
            { data && data.length > 0 ?
            data.map (dataItem => <div className="item">
                <div onClick={ enableMultiSelection ? ()=> handleMultiSelection(dataItem.id) :()=>  handleSingleSelection(dataItem.id)}  className="title">
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                </div>
                {selected === dataItem.id || mutiple.indexOf(dataItem.id)!== -1 ? ( 
                <div className="content">{dataItem.answer}</div>

                ): null}
            </div>
            )
            : <div>No data found!</div>
            }
        </div>
    </div>;
}

