import React from "react";
import { FirebaseDatabaseNode } from "@react-firebase/database";

const Admin = () => {
    return (
        <div>
            <FirebaseDatabaseNode path="reports/">
                {d => {
                    return(
                        <div>
                            {d.loading || !d.value ? <div> Loading... </div> : <div> {d.value.map(p => (<div key={p.id}> {p.text} </div>))}</div>}
                        </div>
                        )
                    }
                }
            </FirebaseDatabaseNode>
        </div>
    )
}




export default Admin;