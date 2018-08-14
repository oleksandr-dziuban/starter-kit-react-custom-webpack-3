import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ExampleRoot = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  text-align: center;
`;

export const ExampleTitle = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: #09adb5;
  padding: 3rem;
`;

export const CountryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
  margin-bottom: 3rem;
`;

export const CountryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin: 1%;
  width: 8%;
  min-height: 10rem;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.8rem;
  background: #0dbfba;
  overflow: hidden;
`;

export const BackButton = styled(Link)`
  font-size: 1.8rem;
  color: #828282;
  text-decoration: underline;
  
  &:hover {
    text-decoration: none;
  }
`;
