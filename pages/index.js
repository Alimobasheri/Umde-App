import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import Nav from '../src/components/nav/nav'

import Items from "../src/containers/items/items";
import NewItemForm from '../src/containers/new-item-form/new-item-form';

export default function App() {
  return (
    <Box p={2} marginY={3}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={9}>
          <Items />
        </Grid>
        <Grid item xs={12} md={3}>
          <NewItemForm/>
        </Grid>
      </Grid>
    </Box>
  )
}
