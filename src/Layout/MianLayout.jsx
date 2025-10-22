import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Carosul from '../Pages/carosul';


const MianLayout = () => {
    return (
        <div className=''>
            <Navbar />
            <div>

                <Outlet>

                </Outlet>

            </div>
        </div>
    );
};

export default MianLayout;