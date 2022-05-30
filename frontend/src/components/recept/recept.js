import React, { Component } from 'react';
import Receptcard from './receptcard';
import Nutritionsummary from './nutritionsummary';
import { ReactComponent as Picture } from './food.svg'

class Recept extends Component {
    constructor() {
        super()
        this.state =  {
        receptnamn: '',
        portioner: 0,
        livsmedelObjs: []
      }
    }
    
    async componentDidMount() {
        var livsmedelList = []
        await fetch('http://192.168.1.129:8000/recept/4/')
        .then(res => res.json())
        .then(recept => {
            this.setState({
            receptnamn: recept.namn,
            portioner: recept.portioner
        })
            recept.livsmedel.map(url => 
                fetch(url)
                .then(res => res.json())
                .then(livsmedel => this.setState({
                    livsmedelObjs: [this.state.livsmedelObjs, livsmedel]
                }))
            )})
        }
        render() {
        var totKcal = 0
        var totProt = 0
        var totCarb = 0
        var totFat = 0

            return (
                <>
            <div className='flex grow justify-center py-10 bg-slate-200'>
                <div className='py-5 px-5 justify-between shrink bg-white mx-11 rounded-lg'>
                    <div className="flex justify-between">
                        <p className='text-sm text-gray-500/50'>Lunch</p>
                        <p className='text-sm text-gray-500/50'>Mån 05-29</p>
                    </div>
                <Picture />
                <h1 className='flex justify-center text-lg font-semibold'>{this.state.receptnamn}</h1>
                {this.state.livsmedelObjs.map(recept=> console.log(recept.namn, recept.))}
                    <Nutritionsummary 
                        totKcal={totKcal}
                        totProt={totProt}
                        totCarb={totCarb}
                        totFat={totFat}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default Recept;