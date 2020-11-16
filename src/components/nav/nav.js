import {useState} from 'react'

import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {makeStyles, useTheme} from '@material-ui/core/styles'

import ResponsiveDrawer from '../responsive-drawer/index'
import Drawer from '@material-ui/core/Drawer'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        display: 'flex'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    menuButton: {
        marginRight: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}))
export default function Nav({toggled, togglleDrawer}) {
    const classes = useStyles()
    const theme = useTheme()
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        togglleDrawer(!toggled)
    }

    return (
        <div
        className={classes.root}>
            <CssBaseline />
            <AppBar
            position="sticky">
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                    variant="h6"
                    noWrap>
                        اپلیکیشن مدیریت انبار عامده
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}