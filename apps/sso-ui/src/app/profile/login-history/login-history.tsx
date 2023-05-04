import Grid from '@mui/material/Unstable_Grid2';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadLoginHistory, profileSelector } from '../profile.store';
import { LoadingWrapper } from '@todo-nx/react-components';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { ILogin } from '@todo-nx/interfaces';
import { DateTime } from 'luxon';

export function LoginHistory() {
  const dispatch = useDispatch();
  const { loadingLoginHistory, loginHistory } = useSelector(profileSelector);


  useEffect(() => {
    dispatch(loadLoginHistory());
  }, []);

  return (
    <LoadingWrapper loading={!loginHistory || loadingLoginHistory} color="black">
      <TableContainer sx={{border: '1px solid grey', borderRadius: '5px', marginTop: '20px'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{width: '30%'}}>Date</TableCell>
              <TableCell sx={{width: '30%'}}>Time</TableCell>
              <TableCell sx={{width: '40%'}}>IP address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loginHistory && loginHistory.map((login: ILogin) => (
              <TableRow key={login.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell >{DateTime.fromISO(login.time!).toLocaleString()}</TableCell>
                <TableCell >{DateTime.fromISO(login.time!).toFormat('h:mm a')}</TableCell>
                <TableCell >{login.ipAddress}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LoadingWrapper>
  );
}
