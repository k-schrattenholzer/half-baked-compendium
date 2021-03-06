// import React from 'react'
import FilterForm from '../Forms/FilterForm'
import SearchForm from '../Forms/SearchForm'
// SortForm does not currently exist, commenting out
// import SortForm from '../Forms/SortForm'
import './Controls.css'

export default function Controls({
  name,
  handleSubmit,
  handleNameChange,
  types,
  filterChange,
  selectedType,
  // sortChange,
}) {
  return (
    <div className="controlsContainer">
      <SearchForm {...{name, handleSubmit, handleNameChange}} />
      <FilterForm {...{types, filterChange, selectedType}}/>
    </div>
  )
}
