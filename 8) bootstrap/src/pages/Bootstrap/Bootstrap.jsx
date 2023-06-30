function Bootstrap() {
  return (
    <>
      <div className="row m-2">
        <div className="col-11 col-sm-6 col-md-1 bg-primary d-flex justify-content-center p-3">1</div>
        <div className="col-1 col-sm-6 col-md-11 bg-danger d-flex justify-content-center p-3">11</div>
      </div>
      <div className="row m-2">
        <div className="col-12 col-md-10 bg-primary d-flex justify-content-center p-3">10</div>
        <div className="d-none d-sm-flex col-md-2 bg-info justify-content-center p-3">2</div>
      </div>
      <div className="row m-2">
        <div className="col-md-6 bg-warning d-flex justify-content-center p-3">6</div>
        <div className="col-md-6 bg-info d-flex justify-content-center p-3">6</div>
      </div>
      <div className="row m-2">
        <div className="col-sm-6 col-md-3 bg-primary d-flex">3</div>
        <div className="col-sm-6 col-md-4 bg-secondary d-flex">4</div>
        <div className="col-sm-1 col-md-5 bg-danger d-flex">5</div>
      </div>
      <button className="btn btn-primary">Click me</button>
    </>
  );
}

export default Bootstrap;
