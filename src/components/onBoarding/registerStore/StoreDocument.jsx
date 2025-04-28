import { useForm } from "react-hook-form"
import Button from "../../common/button/Button"
import CardWrapper from "./CardWrapper"
import Checkbox from "./checkbox/Checkbox"
import QrScanner from "./QRScanner"

const StoreDocument = ( {setActivePage} ) => {
  const { register, handleSubmit, formState:{ errors }} = useForm();

  const submitHandler = (data) => {
    console.log(data);    
    setActivePage("agreement");
  }
  return (
    <div className="store-document">
      <h2 className="page-sub-title">Store Documents</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <CardWrapper title={"Enter PAN & GSTIN details"}>
          <input type="text" {...register('PANNumber', {required:"PAN number is required"})} placeholder="PAN Number" />
          {errors.PANNumber && <p className="form-error">{errors.PANNumber.message}</p>}
          <input type="text" {...register('GSTINNumber')} placeholder="GSTIN" />
          {errors.GSTINNumber && <p className="form-error">{errors.GSTINNumber.message}</p>}
          <Checkbox id={'noGSTIN'} {...register('noGSTIN')} labelText={"I don't have a GSTIN"}/>
        </CardWrapper>
        <CardWrapper title={"Bank Details"}>
          <input type="text" {...register('bankName', {required:"Bank name is required"})}  placeholder="Bank Name" />
          {errors.bankName && <p className="form-error">{errors.bankName.message}</p>}
          <input type="text" {...register('accountNumber', {required:"Account number is required"})} placeholder="Account Number" />
          {errors.accountNumber && <p className="form-error">{errors.accountNumber.message}</p>}
          <input type="text" {...register('ifscCode', {required:"IFSC code is required"})} placeholder="IFSC Code" />
          {errors.ifscCode && <p className="form-error">{errors.ifscCode.message}</p>}
        </CardWrapper>
        <CardWrapper title={"Scan Store QR Code "} excerpt={"Scan the store’s QR Code. It will help the customer to make the payments easy and faster."}>
          <QrScanner />
        </CardWrapper>
        <Button btnText={"Continue"} btnType="submit"/>
      </form>
    </div>
  )
}

export default StoreDocument