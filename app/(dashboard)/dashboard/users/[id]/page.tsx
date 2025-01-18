import React from 'react'

const page = ({ params }: { params : { id: string }}) => {
    const { id } = params;

  return (
    <>
    <div>USER DETAILS</div>
    <h1>User Profile: {id} </h1>
    </>
  )
}

export default page