import { DataGrid } from '@mui/x-data-grid'

export default function UserDataGrid({ users }) {
  const columns = [
    {
      field: 'username',
      headerName: 'Username'
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200
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
