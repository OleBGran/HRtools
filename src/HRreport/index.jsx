import React from "react";
import { FirebaseDatabaseMutation } from "@react-firebase/database";
import {TextArea} from '@adobe/react-spectrum'
import TextField from '@material-ui/core/TextField';
import firebase from "firebase/app";
import get from "lodash/get";
import set from "lodash/set";

const Report = () => {

    const textFieldRef = React.useRef("");
    return (
        <div>
            {/* <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} /> */}
            <TextField multiline label="Beskriv situasjonen din" variant="outlined"
                rows={4} name="description" inputRef={textFieldRef}/><br/>
            
            <FirebaseDatabaseMutation type="push" path={"reports/"}>
                {({ runMutation }) => {
                    return (
                        <div>
                            <button
                                onClick={ async e=> {e.preventDefault();
                                    const text = get(textFieldRef, "current.value", "");
                                    await runMutation({ text: text });
                                    set(textFieldRef, "current.value", "");}}>
                                    Push
                            </button>
                        </div>
                    );
                }}
            </FirebaseDatabaseMutation>
        </div>
    )
}

export default Report;