import './Form.css'
import { useState} from 'react'
function Form(){
    function somar(evento){
        evento.preventDefault()
       let soma = Number(valor1)+ Number(valor2)
       console.log(soma)

    }
    let[valor1,setValor1] = useState()
    let[valor2,setValor2] = useState()
    return(
        <div className="div">
            <h1 className ="h1">Aula sobre eventos</h1>
            <form className='form' onSubmit ={somar}>
                <label className='label'>Primeiro Valor:</label>
                <input className='input' type ='text' 
                onChange={(evento)=> setValor1(evento.target.value)}></input>
                <label className='label'>Segundo Valor:</label>
                <input className='input' type='text' 
                onChange={(evento)=> setValor2(evento.target.value)}></input>
                <button className='button' type='submit'>Enviar</button>
            </form>
        </div>
 

    )
    
    };


export default Form;