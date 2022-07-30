import React, { useEffect } from 'react'
import { AuthState } from '../context/context'
import { Box,Badge } from '@chakra-ui/react'

const Body = () => {
  const {go,setgo,details,setDetails}=AuthState()
    
    
  return (
    <div>
        

        {details.map((det)=>(
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            
      
            <Box p='6'>
              <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                  For Rent!
                </Badge>
                <Box
                  color='gray.500'
                  fontWeight='semibold'
                  letterSpacing='wide'
                  fontSize='xs'
                  textTransform='uppercase'
                  ml='2'
                >
                  {det.bed} beds &bull; {det.bathroom} baths
                </Box>
              </Box>
      
              <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                noOfLines={1}
              >
                {det.name}
              </Box>
      
              <Box>
                {det.price}
                <Box as='span' color='gray.600' fontSize='sm'>
                  / month
                </Box>
              </Box>
            </Box>
          </Box>
           
        ))}
    </div>
  )
}

export default Body