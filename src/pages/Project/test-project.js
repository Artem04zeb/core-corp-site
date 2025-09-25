import React from 'react';
import styled from 'styled-components';

const TestContainer = styled.div`
  min-height: 100vh;
  background-color: #151515;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
`;

const TestTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: #fff;
`;

const TestText = styled.p`
  font-size: 18px;
  color: #ccc;
  text-align: center;
  max-width: 600px;
`;

const TestProject = () => {
  return (
    <TestContainer>
      <TestTitle>Тестовая страница проекта</TestTitle>
      <TestText>
        Если вы видите эту страницу, роутинг работает правильно на Vercel!
        <br />
        <br />
        Это означает, что проблема не в роутинге, а в компонентах проектов.
      </TestText>
    </TestContainer>
  );
};

export default TestProject;
