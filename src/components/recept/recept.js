import React, { Component } from 'react';


const foods = {
    potatis:{
        namn:"potatis",
        kcal:78,
        protein: 2,
        fett: 0,
        carbs: 16,
        prot: 2
    },
    mjölk:{
        namn:"mjölk",
        kcal:40
    },
    fläsk:{
        namn:"fläsk",
        kcal:120
    }
}


const recept = {
    mos: {
        namn: "mos",
        ingredienser: [foods.potatis, foods.mjölk],
        kcal: function() {
            let tot = 0
            this.ingredienser.forEach(element => {
                tot = tot + element.kcal
                });
            return(tot)
        }
    },
    korv: {
        namn: "korv",
        ingredienser: [foods.fläsk],
    }
}


class Recept extends Component {
    render() {
        return (
            <>
            <div className='flex grow justify-center py-10 bg-slate-200'>
                <div className='grow bg-white mx-11 rounded-lg'>
                    hej
                </div>
            </div>
            </>
        )
    }
}

export default Recept;