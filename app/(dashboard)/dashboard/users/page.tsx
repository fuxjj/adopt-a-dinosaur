import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <h1 className='text-3xl text-sky-950'>Users</h1>
    <div>
      <ul>
        <li> <Link href="/dashboard/users/1">User1</Link> </li>
        <li> <Link href="/dashboard/users/2">User2</Link> </li>
        <li> <Link href="/dashboard/users/3">User3</Link> </li>
        <li> <Link href="/dashboard/users/4">User4</Link> </li>
      </ul>
    </div>
    </>
  )
}

export default page