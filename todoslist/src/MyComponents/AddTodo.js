import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {

    const [title,setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or description cannot be blank")
        }
        else{
        addTodo(title, desc);
        setTitle("");
        setDesc("");
        }
    }

  return (
    <div className="container MY-3">
        <h3 className="text-center">ADD A TODO</h3>
        <form onSubmit={submit}>
            <div className="mb-3">  
                <label htmlFor="title" className="form-label">TODO TITLE</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">TODO DESCRIPTION</label>
                <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
            </div>
            <button type="submit" className="btn btn-sm btn-success">ADD TODO</button>
        </form>
    </div>
  )
}
