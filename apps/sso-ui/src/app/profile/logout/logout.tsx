import React from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, profileSelector } from '../profile.store';
import { LoadingWrapper } from '@todo-nx/react-components';
import { useNavigate } from 'react-router-dom';

export function Logout() {
  const { loggingOut } = useSelector(profileSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div style={{paddingTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h4>You will be logged out of all applications</h4>

      <Button variant='contained' disabled={loggingOut} onClick={() => dispatch(logout({navigate}))} style={{width: '150px'}}>
        <LoadingWrapper loading={loggingOut}>
          Logout
        </LoadingWrapper>
      </Button>
    </div>
  );
}
