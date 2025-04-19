import Button from "../../common/button/Button"
import CardWrapper from "./CardWrapper"
import Checkbox from "./checkbox/Checkbox"
import QrScanner from "./QRScanner"

const StoreDocument = ( {setActivePage} ) => {
  return (
    <div className="store-document">
      <h2 className="page-sub-title">Store Documents</h2>
      <CardWrapper title={"Enter PAN & GSTIN details"}>
        <input type="text" placeholder="PAN Number" />
        <input type="text" placeholder="GSTIN" />
        <Checkbox id={'noGSTIN'} labelText={"I don't have a GSTIN"}/>
      </CardWrapper>
      <CardWrapper title={"Bank Details"}>
        <input type="text" placeholder="Bank Name" />
        <input type="text" placeholder="Account Number" />
        <input type="text" placeholder="IFSC Code" />
        <Checkbox id={'noGSTIN'} labelText={"I don't have a GSTIN"}/>
      </CardWrapper>
      <CardWrapper title={"Scan Store QR Code "} excerpt={"Scan the store’s QR Code. It will help the customer to make the payments easy and faster."}>
        <QrScanner />
      </CardWrapper>
      <Button btnText={"Continue"} onClick={() => setActivePage("agreement")}/>
    </div>
  )
}

export default StoreDocument