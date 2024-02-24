import { Link } from 'react-router-dom';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import Select from '../../components/Select/Select.jsx';
import Container from '../../components/Container/Container.js';
import Logo from '../../components/Logo/Logo.jsx';
import MobileNavBar from '../../components/MobileNavBar/MobileNavBar.jsx';
import './NavBar.css';

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className='navBar'>
      <ul className='row'>
        <li className='col-2 d-md-none'>
          <MobileNavBar/>
        </li>
        <li className='col-8 col-md-2'>
          <Link className='nav-link' to={ '/' }>
            <div className='logoContainer'>
              <Logo/>
            </div>
          </Link>
        </li>
        <li className='d-none d-md-block col-md-2'>
          <Link className="nav-link" to="/register">
            { t('navBar.register') }
          </Link>
        </li>
        <li className='d-none d-md-block col-md-2'>
          <Link className="nav-link" to="/login">
            { t('navBar.login') }
          </Link>
        </li>
        <li className='d-none d-md-block col-md-2'>
          <Link className="nav-link" to="/booking">
            { t('navBar.booking') }
          </Link>
        </li>
        <li className='d-none d-md-block col-md-2'>
          <Link className="nav-link" to="/profile">
            { t('navBar.profile') }
          </Link>
        </li>
        <li className='col-2'>
          <Container>
            <Select
              colors={ {
                primary: 'var(--primaryColor)',
                secondary: 'var(--secondaryColor)',
                background: 'transparent'
              } }
              selectedKey={ i18n.language }
              data={
                Object.keys(i18n.options.resources)
                  .map(key => ({ key, value: t(`languages.${key}`) }))
              }
              onChangeHandler={(language) => {
                i18n.changeLanguage(language.key);
              }}
            />
          </Container>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
