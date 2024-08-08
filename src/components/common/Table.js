import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import FindInPageIcon from '@mui/icons-material/FindInPage';

const columns = [
  { id: 'nombre', 
    label: 'Nombre', 
    minWidth: 100,
    align: 'center'
  },
  { id: 'descripcion', 
    label: 'Descripcion', 
    minWidth: 100 ,
    align: 'center'
  },
  {
    id: 'tipoEleccion',
    label: 'Tipo Eleccion',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'stock',
    label: 'Stock (u)',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'precio',
    label: 'Precio ($)',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'descuento',
    label: 'Descuento (%)',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'categoria',
    label: 'Categoria',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'estado',
    label: 'Estado',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'imagenes',
    label: 'Imagenes',
    minWidth: 100,
    align: 'center'
  },
  {
    id: 'ver',
    label: '.ver',
    minWidth: 100,
    align: 'center'
  },
];

function createData(nombre, descripcion, tipoEleccion, stock, precio, descuento, categoria, estado, imagenes, ver) {
  return { nombre, descripcion, tipoEleccion, stock, precio, descuento, categoria, estado, imagenes, ver };
}

const rows = [
  createData('GOTIC', 'Zapatos góticos ficticios de cuero sintético negro,  con hebillas plateadas, punta puntiaguda y tacón  grueso, ideales para un estilo oscuro y distintivo.', 'Color: [Negro]; Talle: [35, 36, 37]', 10, 45000, 0, 'Botas Bajas', 'Activo', 'botas.jpg', <FindInPageIcon />),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor: 'chocolate', border: '1px solid #000', fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{border: '1px solid #000'}}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
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
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
