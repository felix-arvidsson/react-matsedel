import React, { Component } from 'react';
import Logo from '../../test.js';

class Welcome extends Component {
    render() {
        return (
            <>
            <div className="flex justify-center mt-4">
                <h1 className="text-3xl font-sans">
                    Diet + Planering = ❤️!
                </h1>
            </div><div className="flex justify-center py-2">
                    <span>
                        <span>
                            Vem har sagt att planera dieten behöver vara svårt?<br />
                            Glöm bekymret med att planera veckans mat eller räkna ut kalorier.<br />
                        </span>
                        <span className='text-2xl py-2'>
                            vi fixar det åt dig!
                        </span>
                    </span>
                </div><div className="flex justify-center bg-gray-200 py-2">
                    <div className='container bg-white rounded-lg shadow-md'>
                        <span className="">
                            <Logo />
                            <p className='align-middle'> Hej!</p>
                        </span>
                    </div>
                </div>
                </>
        )
    }
}

export default Welcome;