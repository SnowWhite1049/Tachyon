import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CustomButton(props) {
  return (
    <Stack direction="row" spacing={2} className="m-0">
      <Button color={!props.is_undisclosed?'primary':'error'} size="small" variant="contained" href={`./edit/${props.id}`}>
        {!props.is_undisclosed?'公開中':'非公開'}
      </Button>
    </Stack>
  );
}