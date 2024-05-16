import { UserData } from '@/@types/users/userData';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import Iconify from '../iconify';
import { ConfirmDialog } from '../custom-dialog';
import { LoadingButton } from '@mui/lab';
import { useDeleteUsersMutation } from '@/_req-hooks/users/useDeleteUserMutation';
import { toast } from 'react-toastify';

type ActionsMenuProps = {
  users?: UserData | undefined;
  reloadUsers: () => void;
};

export default function DataGridActionMenu(props: ActionsMenuProps) {
  const { users, reloadUsers } = props;
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const openActionMenu = Boolean(menuAnchor);
  const router = useRouter();

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setMenuAnchor(null);
  };

  const handleViewUser = useCallback(() => {
    if (!users) return;
    router.push(`/user/${users.id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  const handleEditUser = useCallback(() => {
    if (!users) return;
    router.push(`/user/edit/${users.id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  const { mutateAsync: deleteUser, isLoading } = useDeleteUsersMutation();

  const handleDeleteUser = useCallback(async () => {
    if (!users) return;
    try {
      await deleteUser({ id: users.id });
      reloadUsers();
      toast.success('User deleted successfully');
      closeDeleteDialog();
    } catch (error) {
      console.log(error);
      toast.error('Failed to delete user');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users, deleteUser]);

  const openDeleteDialog = useCallback(() => {
    setDeleteDialogOpen(true);
  }, []);

  const closeDeleteDialog = useCallback(() => {
    setDeleteDialogOpen(false);
  }, []);
  return (
    <>
      <IconButton onClick={openMenu}>
        <Iconify icon="eva:more-vertical-fill" />
      </IconButton>
      <Menu
        anchorEl={menuAnchor}
        onClose={closeMenu}
        open={openActionMenu}
        sx={{ width: 250 }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleViewUser}>
          <Iconify icon="mdi:eye" sx={{ mr: 1 }} />
          View
        </MenuItem>
        <MenuItem onClick={openDeleteDialog}>
          <Iconify icon="bxs:trash" sx={{ mr: 1 }} />
          Delete
        </MenuItem>
        <MenuItem onClick={handleEditUser}>
          <Iconify icon="solar:pen-bold" sx={{ mr: 1 }} />
          Edit
        </MenuItem>
      </Menu>
      <ConfirmDialog
        open={deleteDialogOpen}
        title="Delete Address"
        onClose={closeDeleteDialog}
        content={
          <>
            Are you sure want to delete{' '}
            <strong>
              {' '}
              {users?.first_name} {users?.last_name}{' '}
            </strong>{' '}
            address?
          </>
        }
        action={
          <LoadingButton
            variant="contained"
            color="error"
            loading={isLoading}
            onClick={handleDeleteUser}
          >
            Delete
          </LoadingButton>
        }
      />
    </>
  );
}
