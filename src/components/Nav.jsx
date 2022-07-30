import React, { useEffect,useState } from 'react'
import { Select, Text} from '@chakra-ui/react' 
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Slider from './Slider'
import Slider2 from './Slider2'
import './Nav.css'  
import { AuthState } from '../context/context'
import rents from './Data'


const Nav = () => {
    const [dd, setdd] = useState([])

    const {location,setLocation,property,setProperty,date,setDate,go,setgo,start,setstart,end,setend,details,setDetails}= AuthState()
   
    const getInfo=()=>{
        setgo(true)
        console.log(location+property+date+start+end)
        setdd(rents.filter((rent)=>{
            return (rent.location===location && rent.property===property )
        }))
        setDetails(dd);
        setgo(false)
        
        
        
        
        
        
        
    }
    useEffect(() => {
        console.log(go)
      
    
      console.log(details)
    }, [go,details])
    
   
    

  return (
    <div className='inlineb'>
     
        <div className="search">
            <Text>location</Text>
            <Select value={location} onChange={(e)=>setLocation(e.target.value)}  variant={'outline'} placeholder='Select option'>
               <option value='India'>India</option>
               <option value='USA'>USA</option>
               <option value='Australia'>Australia</option>
            </Select>
        </div>
        <div className="search">
            <Text>property</Text>
            <Select value={property} onChange={(e)=>setProperty(e.target.value)} variant={'outline'} placeholder='Select option'>
               <option value='Apartment'>Apartment</option>
               <option value='House'>House</option>
               <option value='Duplex'>Duplex</option>
            </Select>
        </div>
        <div className="search">
            <Text>when</Text>
           <Input value={date} onChange={(e)=>setDate(e.target.value)} type='date'/>
        </div>
        <div className="search">
            <Text>price</Text>
            <div>
            <Text>Min:</Text>
            <Slider/>

            </div>
            <Text>Max:</Text>
            <Slider2/>
        </div>
        <Button colorScheme='blue' onClick={getInfo}>Go</Button>



 
       

    </div>
  )
}

export default Nav