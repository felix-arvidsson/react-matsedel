import React, { Component } from 'react';
import Logo from './logo.svg'

class Navbar extends Component {
    render() {
        return (
            <nav className="bg-white border-gray-200 shadow-md">
                <div className="container flex flex-wrap justify-between gap-4 items-center mx-auto">
                    <div className="flex justify-between space-x-2">
                    <img
                        src={Logo}
                        style={{ height: 53, width: 36 }}
                        alt="website logo"
                    />
                        <h1 className="text-3xl py-2 font-semibold font-sans">kalorismart </h1>
                    </div>
                    <div className="space-x-5 mb-2 my-2">
                        <button className="bg-green-500 rounded-lg py-2 px-2 shadow-md">Login</button>
                        <button className="bg-green-500 rounded-lg py-2 px-2 shadow-md">Sign up</button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;