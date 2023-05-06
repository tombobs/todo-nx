import React from 'react';
import { Box, Email, Item } from 'react-html-email';

export function EmailLayout({ children, title }: { children: any, title: string }) {
  return (
    <Box align='center'>
      <Email title={title}
             style={{ border: '1px solid black', padding: '15px', borderRadius: '5px', margin: '30px 0' }}>
        {/*<Banner/>*/}

        {children}


      </Email>
      <Item>
        {/*<Footer/>*/}
      </Item>
    </Box>
  );
}
