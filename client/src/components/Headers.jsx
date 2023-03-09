import logo from './assets/logo.svg'

export default function Headers() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="logo" className='mr-2' style={{width: '12%'}}></img>
            <div>Graphql</div>
          </div>
        </a>
      </div>
    </nav>
  )
}
