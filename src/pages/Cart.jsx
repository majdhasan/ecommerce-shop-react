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
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
    tableContainer: {
        marginTop: "30px"
    },
    delete:{
        color: "black"
    }
});

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

export default function Cart() {
    const { cart } = useContext(CartContext);
    const { items = [], cartTotal = 0 } = cart;
    const classes = useStyles();

    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Qty.</TableCell>
                        <TableCell align="right">Sum</TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.name}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell align="right">{item.qty}</TableCell>
                            <TableCell align="right">{ccyFormat(item.price)}</TableCell>
                            <TableCell align="right">
                                <Link to='/cart' className={classes.link}>
                                    <IconButton aria-label="show cart" color="inherit">
                                        <Badge className={classes.delete}>
                                            <DeleteIcon />
                                        </Badge>
                                    </IconButton>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}

                    <br />
                    <TableRow>
                        <TableCell align="right" colSpan={2}>Total</TableCell>
                        <TableCell align="right">{ccyFormat(cartTotal)}</TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
