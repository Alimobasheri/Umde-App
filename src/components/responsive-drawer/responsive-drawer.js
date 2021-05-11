import Link from "next/link";
import { useRouter } from "next/router";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";

import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ListIcon from "@material-ui/icons/List";
import ContactsIcon from "@material-ui/icons/Contacts";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CloseIcon from "@material-ui/icons/Close";
import { Button, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  drawer: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignSelf: "stretch",
    minHeight: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexShrink: 0,
      maxWidth: "240px",
    },
  },
  root: {
    width: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    alignSelf: "flex-start",
    position: "relative",
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: theme.spacing(3),
  },
  toolbar: {
    ...theme.mixins.toolbar,
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    alignSelf: "stretch",
    padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
  },
  listItem: {
    borderRadius: 8,
    marginBottom: theme.spacing(1),
    transition: "background-color 0.2s ease-in",
  },
  listItemActive: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    pointerEvents: "none",
  },
  persistentDrawer: {
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "240px",
    },
  },
  drawerPaper: {
    width: "100%",
    position: "relative",
    display: "block",
    alignSelf: "center",
  },
}));

export default function ResponsiveDrawer({ toggled, toggleDrawer }) {
  const classes = useStyles();

  const router = useRouter();
  const path = router.pathname;

  const theme = useTheme();
  const menu = (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <Hidden mdUp>
          <IconButton
            className={classes.closeMenuButton}
            onClick={(e) => toggleDrawer(false)}
          >
            <CloseIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6">اپلیکیشن مدیریت انبار عامده</Typography>
      </div>
      <Divider />
      <List component="nav">
        <Link href="/">
          <ListItem
            className={`${classes.listItem} ${
              path === "/" && classes.listItemActive
            }`}
            button
          >
            <ListItemIcon>
              <DashboardIcon
                htmlColor={path === "/" && theme.palette.primary.contrastText}
              />
            </ListItemIcon>
            <ListItemText primary="داشبورد" />
          </ListItem>
        </Link>
        <Link href="/items">
          <ListItem
            className={`${classes.listItem} ${
              path === "/items" && classes.listItemActive
            }`}
            button
          >
            <ListItemIcon>
              <ListIcon
                htmlColor={
                  path === "/items" && theme.palette.primary.contrastText
                }
              />
            </ListItemIcon>
            <ListItemText primary="لیست انبار" />
          </ListItem>
        </Link>
        <Link href="/trades">
          <ListItem
            className={`${classes.listItem} ${
              path === "/trades" && classes.listItemActive
            }`}
            button
          >
            <ListItemIcon>
              <MonetizationOnIcon
                htmlColor={
                  path === "/trades" && theme.palette.primary.contrastText
                }
              />
            </ListItemIcon>
            <ListItemText primary="معاملات" />
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <ListItemText primary="مخاطبان" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.drawer}>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="primary"
          anchor="rtl"
          open={toggled}
          onClose={() => toggleDrawer(!toggled)}
          ModalProps={{
            keepMounted: true,
          }}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {menu}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="js">
        <Drawer
          variant="persistent"
          anchor="rtl"
          open
          className={classes.persistentDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {menu}
        </Drawer>
      </Hidden>
    </div>
  );
}
