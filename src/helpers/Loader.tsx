// components/LottieAnimation.tsx
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/loading.json';


interface LottieProps {
  width?: number;
  height?: number;
}

const LottieAnimation: React.FC<LottieProps> = ({ width = 400, height = 400 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default LottieAnimation;
