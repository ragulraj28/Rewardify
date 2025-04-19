import './Checkbox.css'

const Checkbox = ({id, labelText}) => {
  return (
    <div className="checkbox-input">
      <input type="checkbox" id={id} /> 
      <label htmlFor={id}>{labelText}</label>
    </div>
  )
}

export default Checkbox