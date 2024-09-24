'use client'

import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import Image from 'next/image';
import Logo from '@/public/Logo.png';
import user from '@/public/user.png';
import { HiMenu, HiX } from 'react-icons/hi';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex justify-between items-center h-16 px-8 md:px-28 py-12 text-white">
            <div className="flex-shrink-0 w-1/4 flex justify-start">
                <Image
                    src={Logo}
                    className='w-48 h-auto'
                    alt='logo da empresa - circulo vermelho com um tv no centro'
                />
            </div>

            <div className="hidden md:flex w-2/4 justify-center">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder='what do you want to watch'
                        className="w-full px-4 py-2 pr-10 rounded-lg bg-transparent text-white placeholder-white focus:outline-none border border-white"
                    />
                    <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
                </div>
            </div>

            <div className="w-1/4 flex justify-end items-center">
                <div className="hidden md:flex items-center gap-2">
                    <Image
                        src={user}
                        className='w-8 h-8 rounded-full'
                        alt='imagem e nome do usuário'
                    />
                    <span>
                        Cocota
                    </span>
                </div>

                <button
                    className="md:hidden flex items-center focus:outline-none"
                    onClick={toggleMenu}
                >
                    {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </div>

            {menuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-gray-100 p-4 md:hidden shadow-lg">
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder='Buscar'
                            className="w-full px-4 py-2 rounded bg-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none border border-gray-300"
                        />
                        <div className="flex items-center gap-4">
                            <Image
                                src={user}
                                className='w-8 h-8 rounded-full'
                                alt='imagem e nome do usuário'
                            />
                            <span>
                                Cocota
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
