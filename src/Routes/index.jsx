import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dasboard.jsx';
import InventoryList from '../Pages/InventoriList';
import ItemDetail from '../Pages/ItemDetail.jsx';
import AddItem from '../Pages/AddItem.jsx';
import { useInventory } from '../Context/InsvetoriContext.jsx';

const AppRoutes = () => {
    const { inventory, searchTerm, setSearchTerm } = useInventory();

    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
                path="/inventory"
                element={
                    <InventoryList
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                }
            />
            <Route path="/inventory/:id" element={<ItemDetail />} />
            <Route path="/add" element={<AddItem />} />
        </Routes>
    );
};

export default AppRoutes;