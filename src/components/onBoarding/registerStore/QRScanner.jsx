// QrScanner.js
import { ScannerIcon } from '../../../assets/icons/icon';

const QrScanner = () => {
  return (
    <div className='text-tertiary flex items-center gap-8'>
      <div className='flex items-center justify-center border-2 border-dashed border-border-color rounded-[20px] h-25 max-w-25 w-full cursor-pointer'>
        <ScannerIcon />
      </div>
      <div>
        <p className="mb-3 font-medium">Scan QR Code</p>
        <p className="text-xs font-medium">Take a Picture from the Camera to upload the QR Code</p>  
      </div>
    </div>
  );
};

export default QrScanner;