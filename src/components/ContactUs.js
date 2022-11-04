import React from 'react'

function ContactUs() {
  return (
    <div>
        <form className='form'>
            <div className='container'>
                <h2>Send Us a Message</h2>
                <hr></hr>

                <label for="fullname"><b>Full Name</b></label>
                <input type="text" name="fullname" placeholder="Enter Full Name" required/>

                <label for="email"><b>Email</b></label>
                <input type="email" name="email" placeholder="Enter Email" required/>

                <label className="form-label" htmlFor="message"><b>Message</b></label>
                <textarea className="form-control" id="message" required />

                <div className='clearfix'>
                    <button type='button' className='cancelbtn btn1'>Cancel</button>
                    <button type='submit' className='signupbtn btn1'>Send Message</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ContactUs