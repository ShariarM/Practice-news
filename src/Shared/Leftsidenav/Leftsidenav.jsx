import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Leftsidenav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map(category =><Link className="block ml-4 mb-4 text-xl" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default Leftsidenav;