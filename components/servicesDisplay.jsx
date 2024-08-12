function ServicesDisplay() {
    return (
      <>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5"><a className="link-opacity-100-hover" href="#">Fintech APIs</a></h2>
              <p className="lead">Make payments even in remote villages</p>
              <p className="lead">
                View and participate in live trading when you're out of data
              </p>
  
              <div className="bg-body-tertiary shadow-sm mx-auto width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
            </div>
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5"><a className="link-opacity-100-hover" href="#">E-commerce APIs</a></h2>
              <p className="lead">View products offline</p>
              <p className="lead">
                Place and/or Cancel orders at top speed even when the network
                connection is slow
              </p>
            </div>
            <div className="bg-dark shadow-sm mx-auto width:80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
          </div>
        </div>
        <div className="d-flex gap-3 justify-content-center lead fw-normal">
          <a className="icon-link icon-link-hover" href="#">
            Find more APIs for your Application
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </a>
        </div>
      </>
    );
  }
  
  export default ServicesDisplay;
  