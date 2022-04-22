/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.css'
import avatar from '../../assets/avatar.png'

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden='true'></i>
            </div>

            <div className='navbar__left'>
                <a href='#'>Produtos</a>
                <a href='#'>Usuários</a>
                <a href='#' className='active_link'>Admin</a>
            </div>

            <div className='navbar__right'>
                <a href='#'>
                    <i className="fa fa-search" />
                </a>
                <a href='#'>
                    <i className="fa fa-clock" />
                </a>
                <a href='#'>
                    <img width='30' src={avatar} alt='avatar' />
                </a>

            </div>
        </nav>
    )

}

export default Navbar