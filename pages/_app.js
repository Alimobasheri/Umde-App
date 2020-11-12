import {useEffect, useState} from 'react'

import {Provider} from 'react-redux'

import storeFactory from '../src/store/store-factory'
import initialState from '../src/store/initial-state'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [store, setStore] = useState(storeFactory())
  useEffect(() => {
    if(typeof window !== 'undefined') {
      setStore(storeFactory())
    }
  }, [])
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
