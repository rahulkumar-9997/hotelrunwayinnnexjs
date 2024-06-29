'use client'
import React,{useState} from 'react'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('https://www.hotelrunwayinn.com/send-mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                const result = await response.json();
                if (result.success) {
                    console.log('Email sent successfully');
                    // Reset form fields
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: ''
                    });
                    // Add any success message or redirection logic here
                } else {
                    console.error('Failed to send email');
                    // Handle failure scenario
                }
            } else {
                console.error('Failed to send email');
                // Handle failure scenario
            }
        } catch (error) {
            console.error('Error sending email:', error);
            // Handle error scenario
        }
    };
  return (
    <div className="col-md-5 mb-30 offset-md-1">
                            <h3>Get in touch</h3>
                            <form method="post" className="contact__form" action="./send-email.php" onSubmit={handleSubmit}>
                                {/* form message */}
                                <div className="row">
                                    <div className="col-12">
                                        <div
                                            className="alert alert-success contact__msg"
                                            style={{ display: "none" }}
                                            role="alert"
                                        >
                                            {" "}
                                            Your message was sent successfully.{" "}
                                        </div>
                                    </div>
                                </div>
                                {/* form elements */}
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="Your Name *"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Your Email *"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            name="phone"
                                            type="text"
                                            placeholder="Your Number *"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            name="subject"
                                            type="text"
                                            placeholder="Subject *"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols={30}
                                            rows={4}
                                            placeholder="Message *"
                                            required=""
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" className="butn-dark2">
                                            <span>Send Message</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
  )
}

export default ContactForm
