import React, { useState } from 'react';
import '../App.css';

export default function Dynamiccom() {
  const [cat, setCat] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const phoneRegex = /^(?:\+1)?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneRegex.test(phoneNumber)) {
      setError("Incorrect Phone Number");
    } else {
      setError("");
      console.log({ name, password, email, phoneNumber, cat });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter seller's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Enter company's name"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Enter product name'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Enter Your Phone Number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        {error && <span style={{ color: "red" }}> {error} </span>}

        <select 
          value={cat}
          onChange={(e) => setCat(e.target.value)}
        >
          <option hidden> Category </option>
          <option value="clothes"> Clothes </option>
          <option value="shoes"> Shoes </option>
          <option value="books"> Books </option>
          <option value="electronics"> Electronics </option>
        </select>

        {/* Conditional input based on category */}
        {cat === "clothes" && (
          <>
            <input type="text" placeholder='Enter clothes price' />
            <input type="text" placeholder='Enter order Details' />
            <input type="text" placeholder='Enter Return Details' />
          </>
        )}

        {cat === "shoes" && (
          <>
            <input type="text" placeholder='Enter shoes price' />
            <input type="text" placeholder='Enter order Details' />
            <input type="text" placeholder='Enter Return Details' />
          </>
        )}

        {cat === "electronics" && (
          <>
            <input type="text" placeholder='Enter product price' />
            <input type="text" placeholder='Enter order Details' />
            <input type="text" placeholder='Enter Return Details' />
          </>
        )}

        {cat === "books" && (
          <>
            <input type="text" placeholder='Enter book price' />
            <input type="text" placeholder='Enter order Details' />
            <input type="text" placeholder='Enter Return Details' />
          </>
        )}
      
        <button type='submit' className='button'> Submit </button>
      </form>
    </div>
  );
}
