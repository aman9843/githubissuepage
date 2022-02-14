import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';




const Contact = () => {
  return (
    
<>
<NavLink to="/"><HomeIcon/></NavLink>
<NavLink style={{marginLeft:"95%"}}to="/table"><SkipPreviousIcon/></NavLink>
<h2 style={{textAlign:"center",color:"white"}}>You Can Contact Me here!</h2>
<div className="container cc" style={{borderRadius:"5px",backgroundColor:"#f2f2f2",padding:"20px",marginTop:"3%"}}>
  <form action="action_page.php">

    <label htmlFor="fname">First Name</label>
    <input type="text" className='it' id="fname" name="firstname" placeholder="Your name.."/>

    <label htmlFor="lname">Last Name</label>
    <input type="text"  className='it'id="lname" name="lastname" placeholder="Your last name.."/>

    <label htmlFor="country">Country</label>
    <select id="country" name="country">
      <option value="australia">India</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
      <option value="usa">Australia</option>
    </select>

    <label htmlFor="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

    <NavLink to='/' className="btn btn-primary" style={{marginLeft:"45%"}}
      onClick={() => window.location = 'mailto:amanprasad9843@gmail.com'} >
    Submit
    </NavLink>

  </form>
</div>
    </>
  )
}

export default Contact