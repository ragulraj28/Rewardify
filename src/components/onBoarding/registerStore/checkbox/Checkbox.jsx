import './Checkbox.css'

const Checkbox = ({id, labelText, ...register}) => {
  return (
    <div className="checkbox-input">
      <input type="checkbox" {...register} id={id} /> 
      <label htmlFor={id}>{labelText}</label>
    </div>
  )
}

export default Checkbox