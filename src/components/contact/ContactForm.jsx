
const ContactForm = () => {
  return (
    <div className="contact-form">
              <h2>Contact Us</h2>
              <form action="">
                       <div className="form-row split">
                                 <div className="form-column">
                                           <label htmlFor="name">Name <span className="error">*</span></label>
                                           <input type="text" className="input-control" placeholder="Your name" />
                                 </div>
                                 <div className="form-column">
                                           <label htmlFor="company name">Company</label>
                                           <input type="text" className="input-control" placeholder="Your company name" />
                                 </div>
                       </div>
                        <div className="form-row split">
                                  <div className="form-column">
                                            <label htmlFor="email">Email <span className="error">*</span></label>
                                            <input type="email" className="input-control" placeholder="Your company email address" />
                                  </div>
                                  <div className="form-column">
                                            <label htmlFor="location">Location</label>
                                            <input type="text" placeholder="City, Country" className="input-control"/>
                                  </div>
                        </div>
                        <div className="form-row">
                                  <label htmlFor="phone">Contact Phone</label>
                                  <input type="number" className="input-control" pattern="+[0,9]"  placeholder="Your phone number"/>
                        </div>
                        <div className="form-row">
                                  <label htmlFor="extra">How can we help you?</label>
                                 <textarea className="text-control" placeholder="Write us your enquiry"></textarea>
                        </div>
                        <div className="form-btn">
                                   <button>Submit</button>
                        </div>
              </form>
    </div>
  )
}

export default ContactForm