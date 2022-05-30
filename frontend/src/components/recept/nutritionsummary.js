import React from 'react';

const NutritionSummary = ({totKcal, totProt, totCarb, totFat}) => {
    return (
        <>
        <p className='flex  justify-center text-gray-500/80'>kcal: {totKcal}, prot: {totProt}, carb: {totCarb}, fat: {totFat}</p>
        </>
        )
}
        
export default NutritionSummary;