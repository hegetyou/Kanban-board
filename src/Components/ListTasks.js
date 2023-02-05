import { useState } from "react";


function ListTasks({ tasks, setTasks }){

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');


    const handlerChange = (event) => { // Функция изменения статуса задачи

        const newTasks = [...tasks].map(item => {

            if(item.id.toString() === event.target.dataset.id){
                item.checked = event.target.checked
            }

            return item;
        });

        setTasks(newTasks);
    }

   const handlerDelTask = (id) =>{ // Функция изменения статуса задачи

        const newDeltasks = [...tasks].filter(item => item.id !== id);

        setTasks(newDeltasks);
   }

   const handlerEditTask = (id, text) => { // Функция редактирования  задачи

        setEdit(id);  
        setValue(text);    
   }


   const handlerSaveTask = (id) => { // Функция сохранения отредавктированной задачи задачи

        const newEditTasks = [...tasks].map((item) => {

            if (item.id === id){
                item.text = value;
            }

            return item;
        });

        setTasks(newEditTasks);
        setEdit(null);
   }


    return(

        <div className="intro_inner">

            {
                tasks.map((item) => (
                    <div key={item.id} className="task1"> 

                    {
                        edit === item.id ? 
                            <>

                                <input  type="text"  
                                    value={value} 
                                    onChange={(e) => setValue(e.target.value)}
                                />  
                                <button onClick={() => handlerSaveTask(item.id)}> Сохранить</button>
                            </> :

                            
                        <div  className="task"> 
                        
                            <div className="task_checkbox">
                                <input 
                                    type="checkbox"
                                    data-id={item.id}
                                    onChange={(e) => handlerChange(e)}   
                                />

                                <span
                                    className={item.checked ? "done" : ""}
                                >
                                    {item.text}
                                </span>
                            </div>

                            <div className="btn_edit_del"> 
                                <button 
                                    onClick={() => handlerDelTask(item.id)}
                                    className="btn"
                                > 
                                <img src="./img/del.svg" className="btn_icon"/>
                                </button>
                                <button 
                                    onClick={() => handlerEditTask(item.id, item.text)}
                                    className="btn"
                                > <img src="./img/edit.svg" 
                                    className="btn_icon" />
                                </button>
                            </div>
                        </div>
                           
                    }

                       
                        
                    </div>
                ))
            }
            
        </div>
    );
}

export default ListTasks;