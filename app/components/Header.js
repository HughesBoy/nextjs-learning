"use client"

import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className="bg-blue-900 border-b">
      <nav>
        <li className="flex p-1 gap-2">
          <Link href={"/"}>home</Link>
          <Link href={"/portfolio"}>portfolio</Link>
          <Link href={"/pokemon"}>dashboard</Link>
          <Link href={"/dogs"}>dogs</Link>
          <Link href={"/posts"}>posts</Link>
          <Link href={"/todos"}>todos</Link>
        </li>
      </nav>
    </div>
  )
}

export default Header