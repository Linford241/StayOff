

function WelcomeBar () {

        return (
          <>
            <nav className="navbar navbar-expand-lg bg-body-secondary text-bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand text-dark" href="#">
                  StayOff
                </a>
                <ul className="nav justify-content-end">
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-outline-secondary text-dark"
                      
                      
                    >
                      Sign Up
                    </button>
      
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-outline-secondary text-dark"
                    
                    >
                      Log In
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </>
        );
      };







export default WelcomeBar;
