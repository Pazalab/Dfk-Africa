import ContactForm from "./ContactForm"
import contactImg from "../../assets/support.jpg"
const ContactBody = () => {
  return (
    <div className="contact-body">
                 <div className="inner-row">
                           <div className="contact-body-content">
                                     <div className="contact-body-details">
                                             <div className="contact-image">
                                                         <img src={contactImg} alt="" />
                                             </div>
                                             <div className="contact-info-box">
                                                       <h3>Contact Info</h3>
                                                       <p>Feel free to reach out to us and we&apos;ll connect you with the firm and advisors closest to you.</p>

                                                       <h4>Call Us</h4>
                                                       <p>0712345678</p>
                                                       <p>0713485007</p>
                                                       <h4>Email</h4>
                                                       <p>inquiry@dfk-africa.com</p>
                                             </div>
                                     </div>
                                     <ContactForm />
                           </div>
                 </div>
    </div>
  )
}

export default ContactBody