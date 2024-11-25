import React, { useState } from 'react'

export default function Component() {
    const [filtered, setFiltered] = useState("All");
    const [searchTerm, setSearchTerm] =useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const data =[
        {id:1 , name: "Apple", category:"Fruit", Price: 5 },
        {id:2 , name: "Carrot", category:"Vegetable", Price: 4 },
        {id:3 , name: "Banana", category:"Fruit", Price: 1.5 },
        {id:4 , name: "Brocoli", category:"Vegetable", Price: 1 },
        {id:5 , name: "Mango", category:"Fruit", Price: 7 },
    ];

    // For Filter
    const filterData = 
    filtered == "All" ? data : data.filter((item) => item.category == filtered);

    // For Search
    const SearchData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //For asc des
    const sortedData = [...data].sort((a,b) =>
        sortOrder === "asc" ? a.Price - b.Price : b.Price - a.Price
    );
  return (
    <div>
        <h1> Filtering, Searching and Sorting </h1>
        <h2> Filter by Category </h2>
        <select onChange={(e) => setFiltered(e.target.value)}>
            <option value="ALL"> ALL </option>
            <option value="Fruit"> Fruit </option>
            <option value="Vegetable"> Vegetable </option>
        </select>

        <ul>
            {filterData.map((item) => (
                <li key={item.id}>
                    {item.name} - {item.category} - ${item.Price}
                     </li>
            ))}
        </ul>

        <h2>Search by Name</h2>
         <input type="text" 
         placeholder="Search..."
         value={searchTerm}
            onChange={(e) => setSearchTerm (e.target.value)}
         />


         <ul>
            {SearchData.map((item) =>(
            <li key={item.id}>
                {item.name} - {item.category} - {item.Price}
            </li>
           ))}
         </ul>

        <h2> Sort by Price </h2>
        <button onClick={() => setSortOrder("asc")}> Sort Ascending </button>
        <button onClick={() => setSortOrder("desc")}> Sort Descending</button>
        
        <ul>
            {sortedData.map((item) => (
                <li key={item.id}> 
                    {item.name} - {item.category} - {item.Price}
                </li>
            ))}
        </ul>
    </div>
  )
}
