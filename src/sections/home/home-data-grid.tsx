import React, { useMemo } from 'react';
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
import DataGridActionMenu from '@/components/actionMenu/DataGridActionMenu';
import { RootState } from '@/redux/store/store';
import { useSelector } from 'react-redux';

interface Props {
  reloadUsers: () => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  page: number;
  pageSize: number;
  isLoading: boolean;
}

export default function HomeDataGrid(props: Props) {
  const {
    reloadUsers,
    setPage,
    setPageSize,
    page,
    pageSize,
    isLoading,
  } = props;

  const users = useSelector((state: RootState) => state.users);

  const rows = users.users || [];
  const totalRows = users.total || 0;

  const handlePageChange = (params: GridPaginationModel) => {
    setPage(params.page);
    setPageSize(params.pageSize);
  };

  const columns = useMemo<GridColDef[]>(
    () => [
      { field: 'id', headerName: 'ID', width: 50 },
      {
        field: 'avatar',
        headerName: 'Avatar',

        renderCell: (params: GridRenderCellParams<any>) => (
          <Avatar src={params.row.avatar} />
        ),
      },
      {
        field: 'name',
        headerName: 'Name',
        width: 150,
        valueGetter: (value, row) =>
          row.first_name + ' ' + row.last_name || '-',
      },
      { field: 'email', headerName: 'Email', flex: 1 },
      {
        field: 'Action',
        headerName: '',
        align: 'right',
        width: 40,
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        renderCell: (params: GridRenderCellParams<any>) => (
          <DataGridActionMenu users={params.row} reloadUsers={reloadUsers} />
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <DataGrid
      sx={{ minHeight: 50 * pageSize }}
      columns={columns}
      rows={rows}
      loading={isLoading}
      pagination
      pageSizeOptions={[5, 10, 20]}
      paginationMode="server"
      paginationModel={{ page, pageSize }}
      rowCount={totalRows}
      onPaginationModelChange={handlePageChange}
      disableRowSelectionOnClick
    />
  );
}
