const LoginCard = ({logo ,title, excerpt, children}) => {
  return (
    <div className='login-card card'>
        <img className="logo" src={logo} alt="logo" />
        <h1 className='page-title'>{title}</h1>
        <p className="excerpt">{excerpt}</p>
        {children}
    </div>
  )
}

export default LoginCard