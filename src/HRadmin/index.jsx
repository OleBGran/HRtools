import React from "react";
import { FirebaseDatabaseNode } from "@react-firebase/database";

const Admin = () => {
    return (
        <div>
            <FirebaseDatabaseNode path="reports/">
                {d => {
                    return(
                        <div>
                            {d.loading || !d.value ? <div> Loading... </div> : <div> {Object.keys(d.value).map(key => (<div key={key}> {d.value[key].text} </div>))}</div>}
                        </div>
                        )
                    }
                }
            </FirebaseDatabaseNode>
        </div>
    )
}




export default Admin;