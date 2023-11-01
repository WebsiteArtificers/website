import './LoadingScreen.css';
import { LogoDark } from '@/icons/icons';

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loader">
        <LogoDark />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;