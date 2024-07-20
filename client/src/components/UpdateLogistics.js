import React, {useState} from 'react';
import axios from 'axios';

function UpdateLogistics(){
    const [orderId, setOrderId] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.put('/api/logistics/${orderId}',{status});
            alert(response.data);
        } catch (error) {
            console.error('There was an error updating the logistics status!', error);
        }
    };

    return (
        <form onSubmit = {handleSubmit}>
            <h2>Update Logistics Stautus</h2>
            <div>
                <label>Order ID</label>
                <input type = "text" value = {orderId} onChange = {(e) =>setOrderId(e.target.value)}/>
            </div>
            <div>
                <label>Status</label>
                <input type = "text" value = {status} onChange = {(e) =>setStatus(e.target.value)} />
            </div>
            <button type = "submit">Update Status</button>
        </form>
    );
}

export default UpdateLogistics;