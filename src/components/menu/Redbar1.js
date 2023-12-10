
import React from 'react';

import Box from '@mui/material/Box';
 
export default function Redbar1() {

  return (

    <Box

        sx={{

            height: 5,

            width:'97%',

            margin:2,

            backgroundColor: (theme) =>

                theme.palette.mode === 'dark'

                    ? '#b3e6b3'

                    : '#b3e6b3',

        }}

        />

  )

}