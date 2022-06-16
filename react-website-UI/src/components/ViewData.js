import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import SideBar from './SideBar';

const columns = [
    { id: 'pid', label: 'pid', minWidth: 70 },
    { id: 'pname', label: 'pname', minWidth: 70 },
    {
        id: 'cname',
        label: 'cname',
        minWidth: 70,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'location',
        label: 'location',
        minWidth: 70,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'metro',
        label: 'metro',
        minWidth: 70,
        align: 'right',
        //format: (value) => value.toFixed(2),
    },
    {
        id: 'summary',
        label: 'summary',
        minWidth: 470,
        //maxWidth: 170,
    },
    {
        id: 'p_description',
        label: 'p_description',
        minWidth: 470,
        //maxWidth: 170,
    },
    {
        id: 'imlogo',
        label: 'imlogo',
        //minWidth: 70,
        //maxWidth: 70,
    },
    {
        id: 'img1',
        label: 'img1',
        //minWidth: 70,
        maxWidth: 70,
    },
    {
        id: 'img2',
        label: 'img2',
        //minWidth: 70,
        maxWidth: 70,
    },
    {
        id: 'img3',
        label: 'img3',
        //minWidth: 70,
        maxWidth: 70,
    },

];

let rows = [];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 600,
    },
});

export default function ViewData() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    axios.get('http://localhost:3000/destination/findAll').then(response => {
        //console.log(response.data);
        rows = response.data;
        console.log(rows);
    })

    return (
        <>
            <SideBar />
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}