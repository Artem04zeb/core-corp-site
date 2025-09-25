import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background-color: #29161f;
  color: white;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: #fff;
`;

const Text = styled.p`
  font-size: 18px;
  color: #ccc;
  max-width: 800px;
  line-height: 1.6;
`;

const SolterraSimple = () => {
  return (
    <Container>
      <Title>Solterra - Упрощенная версия</Title>
      <Text>
        Это упрощенная версия страницы Solterra для тестирования.
        Если эта страница работает, значит проблема в сложных компонентах оригинальной страницы.
      </Text>
    </Container>
  );
};

export default SolterraSimple;
