import { useState } from "react";


export const BotonPersonalizado = ({texto})=>{
    
    return(
        <div>
            <button 
            type="submit" 
            className="btn btn-outline-success mb-3">
            {texto}    
            </button>
        </div>
    )
}