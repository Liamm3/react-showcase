import { DataGrid } from '@mui/x-data-grid'

export default function UserDataGrid({ users }) {
  const columns = [
    { field: 'gender', headerName: 'Gender' },
    {
      field: 'name',
      headerName: 'Full name',
      width: 200,
      valueGetter: ({ row }) =>
        `${row.name.title}. ${row.name.first} ${row.name.last}`
    },
    {
      field: 'login',
      headerName: 'Username',
      width: 150,
      valueGetter: ({ row }) => row.login.username
    },
    {
      field: 'dob',
      headerName: 'Birthdate',
      width: 200,
      valueGetter: ({ row }) => row.dob.date
    }
  ]

  return (
    <div>
      <DataGrid
        columns={columns}
        rows={users}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  )
}
