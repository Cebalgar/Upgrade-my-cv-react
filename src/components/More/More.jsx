import React from 'react';
import "./More.css";

const More = ({languages,habilities}) => {
    return (
        <div className='container'>
        <p className='enunciado'>Idiomas</p>
        <div className='card-languages'>
        <p className='language'>🇬🇧 {languages.language}</p>
        <p>Nivel escrito: {languages.wrlevel}</p>
        <p>Nivel hablado: {languages.splevel}</p>
     
        </div>
        <p className='enunciado'>Habilidades</p>
        <div className='card-habilities'>
        {habilities.map((habilitie)=>(
            <p>{habilitie}</p>
        ))}


        </div>
            
        </div>
    )
}

export default More
