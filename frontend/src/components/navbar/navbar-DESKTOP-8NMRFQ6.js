import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="bg-white border-gray-200">
                <div className="container flex flex-wrap justify-between gap-4 items-center mx-auto">
                    <div>
                        <h1 className="text-3xl font-semibold font-sans">🥑 matlistan </h1>
                    </div>
                    <div className="space-x-5 mb-2 my-2">
                        <button className="bg-green-500 rounded-lg py-2 px-2 shadow-md hover:bg-green-700">Login</button>
                        <button className="bg-green-500 rounded-lg py-2 px-2 shadow-md hover:bg-green-700">Sign up</button>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar;