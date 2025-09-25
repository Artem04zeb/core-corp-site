import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BreadcrumbsContainer = styled.nav`
  padding: 20px 0;
  background-color: transparent;
  
  @media (max-width: 768px) {
    padding: 16px 0;
  }
`;

const BreadcrumbsList = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  
  &:not(:last-child)::after {
    content: '/';
    margin: 0 12px;
    color: #666;
    font-size: 14px;
  }
`;

const BreadcrumbLink = styled(Link)`
  color: #E0E0E0;
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: color 0.2s ease;
  
  &:hover {
    color: #FFFFFF;
  }
  
  &:focus {
    outline: 2px solid #3A5AFF;
    outline-offset: 2px;
  }
`;

const BreadcrumbCurrent = styled.span`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
`;

const Breadcrumbs = ({ items }) => {
  return (
    <BreadcrumbsContainer aria-label="Навигационные хлебные крошки">
      <BreadcrumbsList>
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            {index === items.length - 1 ? (
              <BreadcrumbCurrent aria-current="page">
                {item.label}
              </BreadcrumbCurrent>
            ) : (
              <BreadcrumbLink to={item.path}>
                {item.label}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbsList>
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
