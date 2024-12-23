import React, { useState } from 'react';

const EventForm = () => {
    const [eventData, setEventData] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Event Submitted:', eventData); // Process the event input
        setEventData({ title: '', description: '', date: '', location: '' }); // Clear inputs
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={eventData.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    name="description"
                    value={eventData.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                    type="date"
                    name="date"
                    value={eventData.date}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Location:</label>
                <input
                    type="text"
                    name="location"
                    value={eventData.location}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default EventForm;
