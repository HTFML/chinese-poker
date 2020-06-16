import React, { useState, useEffect } from 'react';
import firebase from './src/utils/firebaseConfig';
import '@firebase/firestore';
import { decode, encode } from 'base-64'
import PostAuthStack from './src/navigation/PostAuthStack'
import PreAuthStack from './src/navigation/PreAuthStack'
import LoadingScreen from './src/screens/LoadingScreen'
import 'firebase/auth'

if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const App = () => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
      if (loading) setLoading(false)
    })
  })

  if (loading) return <LoadingScreen />

  return user ? (
    <PostAuthStack />
  ) : (
    <PreAuthStack />
  )
}

export default App;