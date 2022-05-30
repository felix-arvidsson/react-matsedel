import React, { Component } from 'react';
import Logo from './logo.svg'
import Hamburger from './hamburgermenu.svg'

class NavbarTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
            hideMenuClass: "hidden"
        };
    
        // This binding is necessary to make `this` work in the callback
        this.openMenu = this.openMenu.bind(this);
      }

      openMenu() {
        this.setState(prevState => (
            {isToggleOn: !prevState.isToggleOn}
        ));
      }

    render() {
        return (
                    /*<img
                        src={Logo}
                        style={{ height: 53, width: 36 }}
                        alt="website logo"
                    />*/
            <>
                <nav className="bg-white border-gray-200 shadow-md">
                    <div className="flex items-center justify-evenly px-5">
                        <div className="flex justify-between space-x-2">
                            <img
                                src={Logo}
                                style={{ height: 53, width: 36 }}
                                alt="website logo" />
                            <h1 className="text-3xl py-2 font-semibold font-sans"><span className="text-green-500">kalori</span><span className="text-gray-500">smart</span> </h1>
                        </div>
                        <div className="sm:hidden">
                            <button onClick={this.openMenu} className="block text-gray-500 hover:text-black focus:text-black">
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
                {this.state.isToggleOn ?
                    <>
                    <div className="flex justify-center px-5 sm:flex">
                        <div className="bg-gray rounded-md px-4 py-3 pb-4 sm:flex">
                            <a href="#" className="block text-gray-600 font-semibold rounded px-2 hover:bg-gray-300 hover:text-black">Login</a>
                            <a href="#" className="block text-gray-600 font-semibold rounded px-2 hover:bg-gray-300 hover:text-black">Sign up</a>
                            <a href="#" className="block text-gray-600 font-semibold rounded px-2 hover:bg-gray-300 hover:text-black">Recept</a>
                        </div>
                    </div>
                    </>
                :
                    <>
                    {/* döljer dropdown */}
                    <div className="hidden flex justify-center px-5 sm:flex">
                        <div className="bg-gray rounded-md px-4 py-3 pb-4 sm:flex">
                            <a href="#" className="block text-gray-600 font-semibold rounded px-2 hover:bg-gray-300 hover:text-black">Login</a>
                            <a href="#" className="block text-gray-600 font-semibold rounded px-2 hover:bg-gray-300 hover:text-black">Sign up</a>
                            <a href="#" className="block text-gray-600 font-semibold rounded px-2 hover:bg-gray-300 hover:text-black">Recept</a>
                        </div>
                    </div>
                    </>
                }
                </>
        )
    }
}

export default NavbarTest;