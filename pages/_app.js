import {useEffect, useState, useRef} from 'react'
import HEAD from 'next/head'
import {useRouter} from 'next/router'

import {Provider} from 'react-redux'

import storeFactory from '../src/store/store-factory'
import initialState from '../src/store/initial-state'

import '../styles/globals.css'

import Box from '@material-ui/core/Box'
import { Grid } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import Nav from '../src/components/nav/nav'
import ResponsiveDrawer from '../src/components/responsive-drawer'

const useStyles = makeStyles(theme => ({
  appContainer: {
    overflowX: 'hidden',
    width: '100vw'
  },
  componentWrapper: {
    padding: `${theme.spacing(1)} 0`,
    flexGrow: 0
  }
}))

function MyApp({ Component, pageProps }) {
  const [store, setStore] = useState(storeFactory())
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false)
  const router = useRouter()
  const bodyContainer = useRef()
  const classes = useStyles()
  useEffect(() => {
    if(typeof window !== 'undefined') {
      setStore(storeFactory())
    }
  }, [router.pathname])
  return (
    <Provider store={store}>
      <HEAD>
        <link
        rel="manifest"
        href="/manifest.json" />
      </HEAD>
      <Box
      ref={bodyContainer} paddingTop="0">
        <Grid
        container
        justify="space-evenly"
        alignItems="center">
          <Grid
          item
          xs={0}
          md={2}>
            <ResponsiveDrawer
            toggled={openMobileDrawer}
            toggleDrawer={setOpenMobileDrawer} />
          </Grid>
          <Grid
          item
          xs={12}
          md={10}
          spacing={1}>
            <Grid
            container
            justify="space-between"
            alignItems="center">
              <Grid
              item
              xs={12}>
                <Nav
                toggled={openMobileDrawer}
                togglleDrawer={setOpenMobileDrawer} 
                container={bodyContainer.current}/>
              </Grid>
              <Grid
              item
              className={classes.componentWrapper}
              xs={12}>
                <Component {...pageProps} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Provider>
  )
}

export default MyApp
