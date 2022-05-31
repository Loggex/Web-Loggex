import React from "react"

import InputMask from "react-input-mask"


const MaskedInput = ({value, onChange})=>{
    return(
        <InputMask mask="(99) 99999-9999" value={value} onChange={onChange}/>
    )
}  



export default MaskedInput