import React, {useState} from 'react';
import axios from 'axios';

function ViewLogistics() {
    const [orderId, setOrderId] = useState('');
    const [logistics, setLogitistics] = useState(null);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response =await axios.get('/api/logistics/${orderId}');
            setLogitistics(response.data);
        } catch(error) {
            console.error('There was an error fetching the logistics status!');
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>View Logistics Status</h2>
                <div>
                    <label>Order ID</label>
                    <input type = "text" value = {orderId} onChange = {(e) =>setOrderId(e.target.value)} />
                </div>
                <button type = "submit">View Status</button>
            </form>
            {logistics &&(
                <div>
                    <h3>Logistics Status</h3>
                    <p>OrderId: {logistics.orderId}</p>
                    <p>Status: {logistics.status}</p>
                </div>
            )}
        </div>
    );
}

export default ViewLogistics;