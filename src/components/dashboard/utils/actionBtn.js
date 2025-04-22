import { MdOutlinePayments, MdHistory, MdAddCard } from "react-icons/md";
import rupees from '../../../assets/rupees.png';

const btn_style = {
  width: "32px",
  height: "32px",
  background: "rgba(242, 248, 223, 1)"
};

export const allButtons = [
    { icon: <MdOutlinePayments style={btn_style} />, label: "Make Payment" },
    { icon: <img src={rupees} alt="rupees" />, label: "Settlements" },
    { icon: <MdHistory style={btn_style} />, label: "Transaction History" },
    { icon: <MdAddCard style={btn_style} />, label: "Gift Cards" },
    { icon: <MdOutlinePayments style={btn_style} />, label: "Make Payment" },
    { icon: <img src={rupees} alt="rupees" />, label: "Settlements" },
    { icon: <MdHistory style={btn_style} />, label: "Transaction History" },
    { icon: <MdAddCard style={btn_style} />, label: "Gift Cards" }
  ];