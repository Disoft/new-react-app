import React from 'react'
import Resource from './Resource'

const ListPage = ({searchResults}) => {
    const results = searchResults.map(resource => <Resource key={resource.id} resource={resource}/>)

    const content = results?.length ? results : <article><p>No matching resources.</p></article>
  return (
    <main>{content}</main>
  )
}

export default ListPage