import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CartContext } from '../contexts/cartContext'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { appConfig } from '../services/config'

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  tableContainer: {
    marginTop: "30px"
  },
  delete: {
    color: "black"
  },
  avatar: {
    display: "block",
    maxHeight: "120px",
    maxWidth: "120px",
    width: "auto",
    height: "auto",
  },
  avatarCol: {
    maxWidth: "20px"
  },
  button: {
    marginTop: "25px"
  }

});

export default function CartDetails() {
  const { cart, removeFromCart } = useContext(CartContext);
  const classes = useStyles()
  const { items = [], cartTotal = 0 } = cart;
  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

  return (
    <div>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Sum</TableCell>
              <TableCell ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.name}>
                <TableCell className={classes.avatarCol}>
                  <Avatar variant="rounded" alt={item.name} src={`${appConfig.apiURL}${item.photo.url}`} className={classes.avatar} />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">{item.qty}</TableCell>
                <TableCell align="right">{ccyFormat(item.qty * item.price)}€</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => { removeFromCart(item) }} aria-label="show cart" color="inherit">
                    <Badge className={classes.delete}>
                      <DeleteIcon />
                    </Badge>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell align="right" colSpan={3}>Total</TableCell>
              <TableCell align="right">{ccyFormat(cartTotal)}€</TableCell>
              <TableCell ></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
