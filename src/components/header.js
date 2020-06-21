import PropTypes from "prop-types"
import React from "react"
import Toplogo from "../images/SpaceX-Logo-White.svg"
import { Link } from "gatsby"

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scroll: false,
      showmenu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      this.setState(state => ({
        scroll: (window.pageYOffset == 0) ? false : true
      }));
    });
  }

  toggleMenu() {
    this.setState(state => ({
      showmenu: !state.showmenu
    }));
  }

  render() {
    return (
      <header className={this.state.scroll ? 'headersticky' : ''}>
        <nav className="navbar navbar-expand-lg navbar-light extra-space ">
          <Link className="navbar-brand" to="/"><img src={Toplogo} alt="" /></Link>
          <button onClick={this.toggleMenu} className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${this.state.showmenu ? 'showmenu' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/">VISION & MISSION</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/">PROJETS</Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link" to="/">EQUIPE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">CONTACT</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
