import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { UserData } from '@/@types/users/userData';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUpdateUsersMutation } from '@/_req-hooks/users/useUpdateUserMutation';
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import FormProvider from '@/components/hook-form/form-provider';
import { RHFTextField } from '@/components/hook-form';

interface Props {
  currentUser: UserData;
  id: string;
}

export default function EditUserForm(props: Props) {
  const { currentUser, id } = props;
  const router = useRouter();

  const EditUserSchema = Yup.object().shape({
    first_name: Yup.string(),
    last_name: Yup.string(),
    email: Yup.string(),
  });

  const defaultValues = useMemo(
    () => ({
      first_name: currentUser?.first_name || '',
      last_name: currentUser?.last_name || '',
      email: currentUser?.email || '',
    }),
    [currentUser]
  );

  const methods = useForm({
    resolver: yupResolver(EditUserSchema),
    defaultValues,
    mode: 'onChange',
  });

  const {
    handleSubmit,
    reset,
    watch,
    setError,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (currentUser) {
      reset(defaultValues);
    }
  }, [currentUser, defaultValues, reset]);

  const { mutateAsync: updateUser } = useUpdateUsersMutation();
  const onSubmit = handleSubmit(async (data) => {
    try {
      await updateUser({
        id: id,
        data: {
          first_name: data.first_name || '',
          last_name: data.last_name || '',
          email: data.email || '',
        },
      });
      toast.success('User updated successfully!');
      router.push('/');
    } catch (error) {
      toast.error('Something went wrong!');
    }
  });
  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack sx={{ maxWidth: 1 }} spacing={2}>
        <RHFTextField name="first_name" label="First Name" />
        <RHFTextField name="last_name" label="Last Name" />
        <RHFTextField name="email" label="Email" />
        <LoadingButton loading={isSubmitting} type="submit" variant="contained">
          Save
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
