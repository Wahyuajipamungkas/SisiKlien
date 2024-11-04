import React from 'react';
import { Link } from 'react-router-dom';
import { PackageOpen, LayoutDashboard, PackagePlus } from 'lucide-react';

const Sidebar = () => (
    <div className="bg-gray-800 text-white fixed left-0 top-0 h-screen w-64 p-4">
        <div className="text-2xl font-bold mb-8 text-center">Inventory App</div>
        <nav>
            <Link to="/" className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded-lg mb-2">
                <LayoutDashboard size={20} />
                Dashboard
            </Link>
            <Link to="/inventory" className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded-lg mb-2">
                <PackageOpen size={20} />
                Daftar Barang
            </Link>
            <Link to="/add" className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded-lg mb-2">
                <PackagePlus size={20} />
                Tambah Barang
            </Link>
        </nav>
    </div>
);

export default Sidebar;