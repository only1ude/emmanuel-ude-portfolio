import React, { useState } from "react";
import '../Styles/contact.css';

function Contact() {
    const [formData, setFormData] = 
    useState({ 
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted', formData);
    };

    return (
        <section id="constact" className="contact">
            <h2>Contact</h2>
            <div className="contact-info">
                <p>Email: only1ude@gmail.com</p>
                <p>Phone: 09095848679</p>
                <p>Address: 33 Adeshina, NGN</p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;