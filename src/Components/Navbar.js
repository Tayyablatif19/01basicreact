import React from 'react'


// we have created a navbar component so our main js or App js file remains clean and we can use this navbar component in any other file as well.



export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>

      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.newHome}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
      
          </ul>

          <div className={`form-check form-switch text-${props.mode=== 'light' ? 'dark' : 'light'  }`}>

      <input
        className="form-check-input "
        type="checkbox"
        role="switch"
        id="switchCheckDefault"
        onClick={props.toggleMode}
      />
      <label  className="form-check-label" htmlFor="switchCheckDefault">
      </label>
      <label class="form-check-label" for="switchCheckDefault">Enable Dark Mode</label>
    </div>




        </div>
      </div>
    </nav>

     

    </div>
  )
}


// basically we can set up that what my input type will be.

// .string.isrequired means that this prop is required and it should be a string. if we dont enter any value, it will give an error in console.



// Navbar.propTypes = {
//     title: PropTypes.string,
//     newHome: PropTypes.string
// }

// above were the values of props. but i can also create default props that if i dont enter any value, they will be used as default props. Navbar.defaultProps = {...}

