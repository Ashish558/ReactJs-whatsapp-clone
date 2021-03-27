
import React from 'react'
import SinglePerson from './SinglePerson'
import {useGlobalContext} from './context'


const People =()=>{
 const {people} = useGlobalContext()

   return(
    <div>
     {people.map((singlePerson)=>{
        return <SinglePerson key={singlePerson.id} singlePerson={singlePerson}/>
     })}
    </div>
     )
}

export default People