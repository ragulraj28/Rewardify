import './StoreCard.css'
import storeImg from '../../../assets/store-img.svg'

const StoreCard = ({selected=false}) => {
  return (
    <div className='store-card'>
        <figure>
            <img src={storeImg} alt="store" />
        </figure>
        <div className="store-info">
            <h3 className='store-title'>Annapoorna Hotel</h3>
            <p className="store-location">Sitra, Coimbatore</p>
            <p className="store-id">Store ID: 12345</p>
        </div>
        <div className="radio-button">
            { selected && <span></span> }
        </div>
    </div>
  )
}

export default StoreCard