import React, {useContext} from 'react'
import Head from 'next/head'
import styled, {css} from 'styled-components'
import tw from 'twin.macro'
import {GlobalContext} from '../context/global'

export default function Home() {

  const c = useContext(GlobalContext)
  const players = c.players
  return (
  <div>{players.map(p => {
    return (
      <div >
        <span>{p.name} |</span>
        <span> {p.score} | </span>
        <button onClick={() => {c.incPlayerScore(p.id)}}> increment </button>
      </div>
    )
  })}</div>
  )

}



  
  // <a
  //   href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //   target="_blank"
  //   rel="noopener noreferrer"
  // >
  //   Powered by{' '}
  //   <img src="/vercel.svg" alt="Vercel Logo"/>
  // </a>
  