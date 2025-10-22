import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import PlantCard from '../Components/PlantCard';

const PlantsCategory = () => {
    const data = useLoaderData();
    console.log(data);
    
    const [plantsCategory, setPlantsCategory] = useState([]);


    useEffect(() => {
        setPlantsCategory(data);
    }, [data])

    return (
        <div>
            {
                plantsCategory.map(plant => <PlantCard key={plant.plantId} plant={plant}/>)
            }
        </div>
    );
};

export default PlantsCategory;