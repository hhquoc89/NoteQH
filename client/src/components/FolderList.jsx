import { Card, CardContent, List, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function FolderList({ folders }) {
  const { folderId } = useParams();
  console.log({ folderId });
  const [activeFolderId, setActiveFolderId] = useState(folderId);

  return (
    <List
      sx={{
        width: '100%',
        bgcolor: '#F5C6EC',
        height: '100%',
        padding: '10px',
        textAlign: 'left',
        overflowY: 'auto',
      }}
      subheader={
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: 'bold', color: '#9A208C' }}>
            Các ghi chú
          </Typography>
         
        </Box>
      }
    >
      {folders.map(({ id, name }) => {
        return (
          <Link
            key={id}
            to={`folders/${id}`}
            style={{
              textDecoration: 'none',
            }}
            onClick={() => setActiveFolderId(id)}
          >
            <Card
              sx={{
                mb: '5px',
                backgroundColor:
                  id === activeFolderId ? '#FFEAEA' : '#FFEAEA',
              }}
            >
              <CardContent
                sx={{ '&:last-child': { pb: '10px' }, padding: '10px' }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: 'bold' ,color :'#E11299'}}>{name}</Typography>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </List>
  );
}