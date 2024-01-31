/* eslint-disable react/prop-types */

// import { useState } from "react"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import './style.css';

export default function AutocompleteSearch({placeholder, city, handleOnSelect}) {
      const formatResult = (item) => {
        return (<span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>)
      }
    return (
        <div style={{ minWidth: 200, marginRight: '20px' }}>
          <ReactSearchAutocomplete
            items={city}
            onSelect={(event)=>handleOnSelect(event, placeholder)}
            autoFocus
            formatResult={formatResult}
            showIcon={false}
            placeholder={placeholder}
            className='react-serach'
            styling={{
              zIndex: 11111,
            }}
          />
        </div>
    )
}