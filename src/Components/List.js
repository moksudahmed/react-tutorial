import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Todos =[
    {
        id: uuidv4(),
        title : "Todo 1",
        desc: "todo description 1"
    },
    {
        id: uuidv4(),
        title : "Todo 2",
        desc: "todo description 2"
    },
    {
        id: uuidv4(),
        title : "Todo 3",
        desc: "todo description 3"
    },
];

const List = () =>{
    return (
        <div>
            {
                Todos.map((item) =>{
                    const {id, title, desc} = item;
                    return (
                        <div key={id}>                            
                            <h1>{title}</h1>
                            <p>{desc}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default List;