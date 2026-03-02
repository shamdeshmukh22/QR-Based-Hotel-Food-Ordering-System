export default function NavBar(){
    return(
    <>
    <div className="container-fluid p-2  m-0 ">
        <div className="row">
            <div className="col-md-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Savpatrang Hotel</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link ml-4 " href="/">Home <span class="sr-only">(current)</span></a>
      </li>
     
       <li class="nav-item">
        <a class="nav-link ml-4 " href="/shop">shop</a>
      </li>
       <li class="nav-item">
        <a class="nav-link ml-4 " href="/about">about</a>
      </li>
       <li class="nav-item">
        <a class="nav-link ml-4 " href="/service">service</a>
      </li>
      <li class="nav-item">
        <a class="nav-link ml-4 " href="/contact">contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link ml-4 " href="/card">card</a>
      </li>
       <li class="nav-item">
        <a class="nav-link ml-4 " href="/feedback">feedback</a>
      </li>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    
  </div>
</nav>
            </div>
        </div>
    </div>
    </>
    )
}