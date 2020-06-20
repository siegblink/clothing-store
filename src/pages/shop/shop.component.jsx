import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from './shop.data'

export default class ShopPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: SHOP_DATA,
    }
  }

  render() {
    const { collections } = this.state

    return (
      <div className='shop-page'>
        {collections.map(function (collection) {
          const { id, ...otherCollectionProps } = collection
          return <CollectionPreview key={id} {...otherCollectionProps} />
        })}
      </div>
    )
  }
}
