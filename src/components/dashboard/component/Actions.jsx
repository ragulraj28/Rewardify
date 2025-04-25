import React, { useState } from 'react';
import '../style/actions.css';
import { MdOutlinePayments, MdHistory, MdAddCard, MdOutlineNoteAlt } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { CgNotes } from "react-icons/cg";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import rupees from '../../../assets/rupees.png';
import a1 from '../../../assets/A1.png';
import a2 from '../../../assets/A2.png';

const Actions = () => {
  const [currentPart, setCurrentPart] = useState(1);

  const btn_style = {
    width: "32px",
    height: "32px",
    background: "rgba(242, 248, 223, 1)",
    borderRadius: "8px",
    padding: "6px"
  };

  const arrow_btn_style = {
    width: "24px",
    height: "24px"
  };

  return (
    <div className='Actions'>
      <div className='quickactions'>
        <div className='qa_text'>Quick Actions</div>
        <div className='qa_btn'>
          <button
            className='arrow'
            onClick={() => setCurrentPart(1)}
            disabled={currentPart === 1}
          >
            <RiArrowLeftSLine style={{ ...arrow_btn_style }} />
          </button>

          <div className='button_slider'>
            <div className={`button_group ${currentPart === 1 ? 'active' : ''}`}>
              <button>
                <div className='icon'><MdOutlinePayments style={btn_style} /></div>
                <span className="label">Make Payment</span>
              </button>
              <button>
                <div className='icon'><img src={rupees} alt='rupees' style={btn_style} /></div>
                <span className="label">Settlements</span>
              </button>
              <button>
                <div className='icon'><MdHistory style={btn_style} /></div>
                <span className="label">Transaction History</span>
              </button>
              <button>
                <div className='icon'><MdAddCard style={btn_style} /></div>
                <span className="label">Gift Cards</span>
              </button>
              {/* <div className='dots'><img src={a1} alt='a1'></img></div> */}
            </div>

            <div className={`button_group ${currentPart === 2 ? 'active' : ''}`}>
              <button>
                <div className='icon'><MdOutlineNoteAlt style={btn_style} /></div>
                <span className="label">Request to REWARDIFY</span>
              </button>
              <button>
                <div className='icon'><HiMiniUserGroup style={btn_style} /></div>
                <span className="label">Refer & Earn</span>
              </button>
              <button>
                <div className='icon'><CgNotes style={btn_style} /></div>
                <span className="label">Reports</span>
              </button>
              <button>
                <div className='icon'><FaHandHoldingDollar style={btn_style} /></div>
                <span className="label">Refund Transaction</span>
              </button>
              {/* <div className='dots'><img src={a2} alt='a1'></img></div> */}
            </div>
          </div>

          <button
            className='arrow'
            onClick={() => setCurrentPart(2)}
            disabled={currentPart === 2}
            
          >
            <RiArrowRightSLine style={{ ...arrow_btn_style,marginRight:"50px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Actions;
