import React, { useRef, useState } from 'react'

export default function Uncontrolledcom() {

    const [data,setData] = useState ([]);
    const nameref = useRef();
    const ageref = useRef();
    const idref = useRef();

    const handlesubmit = (e) =>{
        e.preventDefault();
        setData([...data, nameref.current.value, ageref.current.value, idref.current.value]);
        console.log(nameref.current.value);
        console.log(ageref.current.value);
        console.log(idref.current.value);

        nameref.current.value='';
        ageref.current.value='';
        idref.current.value='';
    }
   
  return (
    <div>
        <h1>Uncontrolledcom</h1>
        <form onSubmit={(e) => handlesubmit(e)} >
            <input type="text" placeholder='Enter Your Name' ref={nameref}/>
            <input type="text" placeholder='Enter Your Age' ref={ageref}/>
            <input type="text" placeholder='Enter Your ID'ref={idref}/>
            <button type='submit'> Submit </button>
        </form>

        {data.map((e, i) => (
                <div key={i}>
                    <p>{e}</p>
                </div>
            ))}
    </div>
  )
}
