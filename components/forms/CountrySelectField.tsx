import React,{useState,useMemo} from 'react'
import countryList from 'react-select-country-list'

const CountrySelectField = () => {
    const [value,setValue] = useState("")
    const options= useMemo(()=>countryList().getData(),[])

    const changeHandler = value{ 
        setValue(value)
    }
  return (
    <div>CountrySelectField</div>
  )
}

export default CountrySelectField