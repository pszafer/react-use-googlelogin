import React from 'react'
import { NextPage } from 'next'

import { useGoogleAuth } from '../components/GoogleAuthProvider'

const IndexPage: NextPage = () => {
  const {
    signInWithTokens,
    signOut,
    googleUser,
    isSignedIn,
    fetchWithRefresh,
  } = useGoogleAuth()

  const handleRequest = async () => {
    await fetchWithRefresh('/')
  }

  return (
    <div
      style={{
        padding: '1rem',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gap: '1rem',
          justifyContent: 'start',
        }}
      >
        <button onClick={signInWithTokens}>Sign in</button>
        <button onClick={signOut}>Sign Out</button>
        <button onClick={handleRequest}>Auto token fetch</button>
      </div>

      {isSignedIn && (
        <div>
          <h1>{googleUser!.profileObj!.name}</h1>
          <img src={googleUser!.profileObj!.imageUrl} alt="Avatar." />
        </div>
      )}
    </div>
  )
}

export default IndexPage
