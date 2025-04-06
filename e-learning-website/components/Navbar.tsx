'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaArrowLeft, FaSearch, FaMicrophone } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchToggle = () => {
        setSearchVisible(!searchVisible);
    };

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        // Logique de recherche ici
        console.log('Recherche :', searchQuery);
    };

    const handleVoiceSearch = () => {
        // Logique de reconnaissance vocale ici
        console.log('Reconnaissance vocale activée');
    };

    return (
        <nav className="bg-green-800 p-4 flex items-center justify-between text-white">
            <div className="flex items-center">
                {pathname !== '/' && (
                    <button onClick={() => router.back()} className="text-white">
                        <FaArrowLeft size={24} />
                    </button>
                )}
            </div>
            <div className="flex items-center ml-auto">
                {searchVisible ? (
                    <form onSubmit={handleSearch} className="flex items-center">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Rechercher..."
                            className="px-2 py-1 rounded text-black"
                        />
                        <button type="button" onClick={handleVoiceSearch} className="ml-2">
                            <FaMicrophone size={20} />
                        </button>
                    </form>
                ) : (
                    <button onClick={handleSearchToggle}>
                        <FaSearch size={24} />
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
