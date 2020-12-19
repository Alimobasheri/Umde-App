import {useEffect, useState, useRef} from 'react'
import HEAD from 'next/head'
import {useRouter} from 'next/router'

import {Provider} from 'react-redux'

import storeFactory from '../src/store/store-factory'
import initialState from '../src/store/initial-state'

import '../styles/globals.css'

import Box from '@material-ui/core/Box'
import { Grid, NoSsr } from '@material-ui/core'
import {makeStyles, createMuiTheme, ThemeProvider, fade, StylesProvider, jssPreset} from '@material-ui/core/styles'

import {create} from 'jss'
import rtl from 'jss-rtl'

const jss = create({plugins: [...jssPreset().plugins, rtl()]})

import Nav from '../src/components/nav/nav'
import ResponsiveDrawer from '../src/components/responsive-drawer'

const theme = createMuiTheme({
  direction: "rtl",
  palette: {
    primary:{
      main: "#080809"
    },
    secondary: {
      main: "#BCC2D4"
    },
    text:{
      primary: "#080809",
      secondary: "#5A595D"
    },
    background: {
      default: "#EFF2F7",
      paper: "#FFF"
    }
  }
})

const useStyles = makeStyles(theme => ({
  appContainer: {
    overflowX: 'hidden',
    width: '100vw',
    minHeight: '100vh',
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
    alignItems: "stretch"
  },
  layoutWrapper: {
    flexGrow: '1'
  },
  componentWrapper: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  drawerWrapper: {
    flexGrow: 1,
    alignSelf: "stretch"
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
  useEffect(() => {
    if(openMobileDrawer) {
      setOpenMobileDrawer(false)
    }
  }, [router.pathname])
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <NoSsr>
            <HEAD>
              <link
              rel="manifest"
              href="/manifest.json" />
            </HEAD>
            <Box
            dir="rtl"
            className={classes.appContainer}
            ref={bodyContainer} paddingTop="0">
              <Grid
              container
              className={classes.layoutWrapper}
              justify="flex-start"
              alignItems="stretch">
                <Grid
                item
                className={classes.drawerWrapper}
                xs={0}
                md={2}>
                  <ResponsiveDrawer
                  toggled={openMobileDrawer}
                  toggleDrawer={setOpenMobileDrawer} />
                </Grid>
                <Grid
                item
                xs={12}
                md={10}>
                  <Grid
                  container
                  justify="stretch"
                  alignItems="stretch">
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
          </NoSsr>
        </Provider>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default MyApp
