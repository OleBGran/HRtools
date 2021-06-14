import React from "react";

const Report = () => {

    const [inputText, setInputText] = React.useState("");
    return (
        <div>
            <input type="text" value={inputText} onChange={e=>setInputText(e.target.value)}/>
            <button type="button" onClick={()=> console.log(inputText)}> Click Me!</button>
        </div>
    )
}

export default Report;