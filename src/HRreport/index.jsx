import React from "react";

const Report = () => {

    const [inputText, setInputText] = React.useState("");
    return (
        <div>
            {/*<input type="text" value={inputText} onChange={e => setInputText(e.target.value)} />*/}
            <textarea rows="10" cols="25" name="description" onChange={e => setInputText(e.target.value)}></textarea><br/>
            
            <button type="button" onClick={() => console.log(inputText)}> Submit</button><br/>
            <br/><button onClick={() => console.log("Done")}>Done</button>
        </div>
    )
}

export default Report;