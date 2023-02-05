import { useState } from "react";

function AddTask({ tasks, setTasks }){

    const [value, setValue] = useState('');

    
    function handlerAddTask(){

        if (value !== ''){

            setTasks([...tasks,
                {
                    id: tasks.length,
                    text: value, 
                    checked: false
                }
                
            ]);
        }

        setValue(''); 
    };

    function handlerKeyPress(e){

        if (e.key === 'Enter'){
            handlerAddTask();
        }
    }

    return(

        <div>

            <div className="addTask">
                <button 
                    onClick={handlerAddTask}
                    className="btn_add"
                >
                    <img src="./img/plus.svg" className="btn_icon"/>
                </button>
                <input 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handlerKeyPress}
                    type="text" placeholder="Добавьте задачу"
                    className="todo_input"
                />
            </div>
           
        </div>
    );
}

export default AddTask;