import Link  from 'next/link';

const Header = () => {
    return (

<div>
 <nav className="navbar navbar-expand-lg "  style={{backgroundColor: 'black'}} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <h1 style={{color: 'red'}}> Netflix </h1> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-3 mb-lg-0" >
        <li className="nav-item">
            <Link href='/'>
            <a className="nav-link"><b style={{color:"white"}}>Home</b></a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href='/about'>
            <a className="nav-link"><b  style={{color:"white"}}>About</b></a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href='/contact'>
            <a className="nav-link"><b  style={{color:"white"}}>Contact</b></a>
            </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</div>
    );
};

export default Header;