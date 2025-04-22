import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const DebugAuth = () => {
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    console.log('authReducer structure:', auth);
  }, [auth]);

  return null; // it's just for debugging
};

export default DebugAuth;
