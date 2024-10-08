
const DropDown = () => {
    return (
      <>
        <main className="form-signin w-100 m-auto">
          <form>
            <h1 className="h3 mb-3 fw-normal">Please log in</h1>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput"
              placeholder="username@email.com" />
              <label htmlFor="floatingInput">Email address</label>
                  
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword"
              placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Log In</button>
            <p className="mt-5 mb-3 text-body-secondary">StayOff Technologies © 2024</p>
          </form>
        </main>   
          
          
          
      </>
    );
  };
  
  export default DropDown;
  