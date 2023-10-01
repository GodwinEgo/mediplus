import {Link} from "react-router-dom";
import '../themify-icons/css/themify-icons.css'

const PreHeader = () => {
    return (<div>
        <nav className="PreHeader__nav">
            <ul>
                <li>
                    <Link to='/'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Doctors
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        FAQs
                    </Link>
                </li>
            </ul>
            <div className="contact">
                <Link to="callto:08101215372">
                    <i className="ti-mobile"></i>
                    <p>+234(8101215372)</p>
                </Link>
                <Link to="mailto:godwinehile04@gmail.com">
                    <i className="ti-email"></i>
                    <p>godwinehile04@gmail.com</p>
                </Link>
            </div>
        </nav>
    </div>)
}
export default PreHeader