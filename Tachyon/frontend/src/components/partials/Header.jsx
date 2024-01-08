import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Logo from './../../assets/images/logo.png';
import { Cog6ToothIcon, BellIcon } from '@heroicons/react/24/outline';

export default () => {
  return (
    <header className="fixed w-full">
			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-primary">Tachyon</span>
          </a>
          <div className="flex items-center lg:order-2">
						<BellIcon className="w-10 text-primary me-3"/>
						<Cog6ToothIcon className="w-10 text-primary"/>
          </div>
        </div>
      </nav>
		</header>
  )
}