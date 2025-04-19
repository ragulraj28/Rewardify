import './StoreCard.css'

const StoreCard = ({selected, storeData, setSelectedStore}) => {

  const{_id, name, images, address } = storeData;  
  
  return (
    <div className='store-card' onClick={() => setSelectedStore(storeData)}>
        <figure>
            <img src={images[0]} alt={name} />
        </figure>
        <div className="store-info">
            <h3 className='store-title'>{name}</h3>
            <p className="store-location">{address?.line1}, {address?.line2}, {address?.city}</p>
            <p className="store-id">Store ID: </p>
        </div>
        <div className="radio-button">
            { selected && <span></span> }
        </div>
    </div>
  )
}

export default StoreCard