
import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from '../../shop.data';
import CollectionPreview from '../../components/preview-collection/collection-preview.component'

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
      const {collections} = this.state;
      return (
        <div>
            <h1>SHop Page</h1>
             {collections.map( ({id, ...otherCollectionProps}) => 
             <CollectionPreview key={id} {...otherCollectionProps}/>
             )}
        </div>
      )   
    }
}

export default ShopPage

