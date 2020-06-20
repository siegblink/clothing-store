import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

export default function CollectionPreview(props) {
  const { title, items } = props

  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>

      <div className='preview'>
        <Products items={items} />
      </div>
    </div>
  )
}

function Products(props) {
  const { items } = props

  return items
    .filter(function (item, index) {
      return index < 4
    })
    .map(function (item) {
      const { id, ...otherItemProps } = item
      return <CollectionItem key={id} {...otherItemProps} />
    })
}
