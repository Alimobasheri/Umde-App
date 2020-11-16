import Link from 'next/link'

import {makeStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import ListIcon from '@material-ui/icons/List'
import ContactsIcon from '@material-ui/icons/Contacts'
import DashboardIcon from '@material-ui/icons/Dashboard'

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: '16.6vw',
            flexShrink: 0,
        }
    },
    drawerPaper: {
        width: '16.6vw'
    }
}))

export default function ResponsiveDrawer({toggled, toggleDrawer}) {
    const classes = useStyles()

    const menu = (
        <div>
            <div
            className={classes.toolbar} />
            <Divider />
            <List
            component="nav">
                <Link
                href="/">
                    <ListItem button>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText
                        primary="داشبورد" />
                    </ListItem>
                </Link>
                <Link
                href="/items">
                    <ListItem button>
                        <ListItemIcon>
                            <ListIcon />
                        </ListItemIcon>
                        <ListItemText
                        primary="لیست انبار" />
                    </ListItem>
                </Link>
            </List>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <MonetizationOnIcon />
                    </ListItemIcon>
                    <ListItemText
                    primary="حسابهای تجاری" />
                </ListItem>
            </List>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <ContactsIcon />
                    </ListItemIcon>
                    <ListItemText
                    primary="مخاطبان" />
                </ListItem>
            </List>
        </div>
    )

    return (
        <div
        className={classes.drawer}>
            <Hidden
            mdUp
            implementation="js">
                <Drawer
                variant="primary"
                anchor="rtl"
                open={toggled}
                onClose={() => toggleDrawer(!toggled)}
                ModalProps= {{
                    keepMounted: true
                }}
                classes={{
                    paper: classes.drawerPaper
                }}
                >
                    {menu}
                </Drawer>
            </Hidden>
            <Hidden
            smDown
            implementation="js">
                <Drawer
                variant="persistent"
                anchor="rtl"
                open
                classes= {{
                    paper: classes.drawerPaper
                }}>
                    {menu}
                </Drawer>
            </Hidden>
        </div>
    )
}