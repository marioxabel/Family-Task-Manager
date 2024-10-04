import React from 'react'
import {
    retrieveChores,
    retrieveChore,
    addChore,
    updateChore,
    deleteChore,
    registerParent,
    registerChild,
    retrieveParents,
    retrieveParentById,
    updateParent,
    deleteParent,
    retrieveChildrenByParentId,
    retrieveChildById,
    updateChild,
    deleteChild,
    loginUser
} from '../../api/API'



export default function TestPage() {
  const handleClick = async () => {
    const response = await //API FUNCTION HERE
    console.log(response)
  }
  return (
    <>
    <h1>testpage</h1>
    <button onClick={handleClick}>click to test</button>
    </>
  )
}
