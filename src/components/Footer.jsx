import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="tittle">
          <h1>SIMRAN's</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail"/>
            <button>Subscribe</button>
          </div>
          <p> Sign up with your E-mail address to receive news and updates!</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer