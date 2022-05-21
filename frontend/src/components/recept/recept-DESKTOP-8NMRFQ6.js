import { list } from 'postcss';
import React, { Component } from 'react';

const KcalTot = function(ingredienser) {
    let tot = 0
    ingredienser.forEach(element => {
        tot = tot + element.kcal
    });
    return(tot)
}


const fooditems = {
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

const recipe = {
    mos: {
        namn: "mos",
        ingredienser: [fooditems.potatis, fooditems.mjölk],
    },
    korv: {
        namn: "korv",
        ingredienser: [fooditems.fläsk],
    }
}

const meal = {
    user1: {
        dag: "Måndag",
        mealtype: "frukost",
        mealitems: [fooditems.potatis, fooditems.mjölk]
    }
}



class Recept extends Component {
    render() {
        return (
            <>
            <div className='flex grow justify-center py-10 bg-slate-200'>
                <div className='grow bg-white mx-11 rounded-lg'>
                    {meal.user1.dag} <br/>
                    {meal.user1.mealtype} <br/>
                    {KcalTot(meal.user1.mealitems)} <br/>
                </div>
            </div>
            </>
        )
    }
}

export default Recept;