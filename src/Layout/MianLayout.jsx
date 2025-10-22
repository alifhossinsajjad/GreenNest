import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import PlantsCategory from '../Pages/PlantsCategory';

const MianLayout = () => {
    return (
        <div className=''>
            <Navbar/>
            <div>
                <Outlet>
                    
                </Outlet>
            </div>
        </div>
    );
};

export default MianLayout;