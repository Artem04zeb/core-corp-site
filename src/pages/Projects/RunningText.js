import React from 'react';
import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const RunningSection = styled.section`
  padding: 80px 0;
  background-color: #151515;
  overflow: hidden;
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;

const MarqueeText = styled.div`
  font-family: 'Neue Haas Grotesk Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  display: inline-block;
  font-size: 120px;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  animation: ${marquee} 40s linear infinite;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 80px;
  }
`;

const RunningText = () => {
  return (
    <RunningSection>
      <MarqueeContainer>
        <MarqueeText
          onClick={() => window.location.href = '/about'}
          style={{ cursor: 'pointer' }}
        >
          О НАС • О НАС • О НАС • О НАС • О НАС • О НАС • О НАС • О НАС • О НАС • О НАС • О НАС • О НАС • О НАС • О НАС • О НАС
        </MarqueeText>
      </MarqueeContainer>
    </RunningSection>
  );
};

export default RunningText;
