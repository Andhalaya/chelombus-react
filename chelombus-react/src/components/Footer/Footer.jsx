import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <ul>
        <li>
          <a href="#">
            <FaFacebookF className='icon2' />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter className='icon2' />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedinIn className='icon2' />
          </a>
        </li>
        <li>
          <a href="#">
            <FaGooglePlusG className='icon2' />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
