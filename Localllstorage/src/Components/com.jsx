import React, { useEffect, useState } from 'react';

export default function LocalStorage() {
    const [name, setName] = useState("");
    const [sub, setSub] = useState("");
    const [city, setCity] = useState("");
    const [gender, setGender] = useState(""); // Added gender state
    const [hobby, setHobby] = useState(""); // Added hobby state
    const [record, setRecord] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [error, setError] = useState(""); 

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Students")) || [];
        setRecord(data);
    }, []);

    const handleSubmit = () => {
        if (!name || !sub || !city || !gender || !hobby) {
            setError("All fields are required!");
            return;
        }
        if (editIndex === null) {
            const newRecord = {
                id: Date.now(),
                name,
                sub,
                city,
                gender,
                hobby,
            };
            const updatedRecord = [...record, newRecord];
            setRecord(updatedRecord);
            localStorage.setItem("Students", JSON.stringify(updatedRecord));
        } else {
            let singleData = record.find((item) => item.id === editIndex);
            singleData.id = editIndex;
            singleData.sub = sub;
            singleData.city = city;
            singleData.gender = gender;
            singleData.hobby = hobby;
            localStorage.setItem("Students", JSON.stringify(record));
        }
        setName("");
        setSub("");
        setCity("");
        setGender("");  // Reset gender
        setHobby("");   // Reset hobby
        setEditIndex(null);
    };

    const handleDelete = (i) => {
        let updatedRecord = record.filter((item) => item.id !== i);
        setRecord(updatedRecord);
        localStorage.setItem("Students", JSON.stringify(updatedRecord));
    };

    const handleEdit = (i) => {
        let singleData = record.find((item) => item.id === i);
        setName(singleData.name);
        setSub(singleData.sub);
        setCity(singleData.city);
        setGender(singleData.gender);
        setHobby(singleData.hobby);
        setEditIndex(i);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>CRUD with Local Storage</h1>
            <div style={styles.form}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Enter your subject"
                    value={sub}
                    onChange={(e) => setSub(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Enter your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={styles.input}
                />
                <div style={styles.radioGroup}>
                    <label>
                        <input
                            type="radio"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                    </label>
                </div>
                <select
                    value={hobby}
                    onChange={(e) => setHobby(e.target.value)}
                    style={styles.input}
                >
                    <option value="">Select Hobby</option>
                    <option value="Reading">Reading</option>
                    <option value="Traveling">Traveling</option>
                    <option value="Sports">Sports</option>
                    <option value="Music">Music</option>
                </select>
                <button onClick={handleSubmit} style={styles.button}>
                    {editIndex === null ? "Submit" : "Update"}
                </button>
                {error && <p style={styles.error}>{error}</p>}
            </div>
            <hr />
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.tableHeader}>Id</th>
                        <th style={styles.tableHeader}>Name</th>
                        <th style={styles.tableHeader}>Subject</th>
                        <th style={styles.tableHeader}>City</th>
                        <th style={styles.tableHeader}>Gender</th>
                        <th style={styles.tableHeader}>Hobby</th>
                        <th colSpan={2} style={styles.tableHeader}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.length > 0 ? (
                            record.map((e, i) => (
                                <tr key={e.id}>
                                    <td style={styles.tableCell}>{i + 1}</td>
                                    <td style={styles.tableCell}>{e.name}</td>
                                    <td style={styles.tableCell}>{e.sub}</td>
                                    <td style={styles.tableCell}>{e.city}</td>
                                    <td style={styles.tableCell}>{e.gender}</td>
                                    <td style={styles.tableCell}>{e.hobby}</td>
                                    <td style={styles.tableCell}>
                                        <button style={styles.editButton} onClick={() => handleEdit(e.id)}>Edit</button>
                                    </td>
                                    <td style={styles.tableCell}>
                                        <button style={styles.deleteButton} onClick={() => handleDelete(e.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={8} style={styles.tableCell}>No records found</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

const styles = {
    container: {
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'black',
        color: '#e0e0e0',
        borderRadius: '10px',
        maxWidth: '800px',
        margin: 'auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    },
    header: {
        textAlign: 'center',
        color: '#ffffff',
        marginBottom: '20px',
        fontSize: '24px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '20px',
    },
    input: {
        padding: '12px',
        borderRadius: '5px',
        border: '1px solid #444',
        fontSize: '16px',
        backgroundColor: '#2a2a3a',
        color: '#e0e0e0',
    },
    button: {
        padding: '12px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#5c6bc0',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    },
    radioGroup: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
    },
    separator: {
        border: '1px solid #444',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
        color: '#e0e0e0',
    },
    tableHeader: {
        backgroundColor: '#333',
        padding: '12px',
        textAlign: 'left',
        color: '#ffffff',
    },
    tableCell: {
        padding: '12px',
        border: '1px solid #444',
        color: '#ffffff',
        textAlign: 'center',
    },
    editButton: {
        padding: '6px 10px',
        borderRadius: '5px',
        border: '1px solid #4caf50',
        backgroundColor: '#4caf50',
        color: 'white',
        cursor: 'pointer',
        fontSize: '14px',
    },
    deleteButton: {
        padding: '6px 10px',
        borderRadius: '5px',
        border: '1px solid #e53935',
        backgroundColor: '#e53935',
        color: 'white',
        cursor: 'pointer',
        fontSize: '14px',
    },
    error: {
        color: 'tomato',
        fontSize: '14px',
        textAlign: 'center',
    },
};