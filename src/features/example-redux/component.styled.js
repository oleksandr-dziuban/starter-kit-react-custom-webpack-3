import styled from 'styled-components';

export const HomeLogo = styled.img`
  width: 20%;
`;

export const HomeMessage = styled.section`
  padding: 3rem;
  text-align: left;
`;

export const HomeTitle = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: #09adb5;
  margin-bottom: 2rem;
  line-height: 4rem;
`;

export const HomeRouterLink = styled.p`
  font-size: 1.8rem;
  color: #828282;
  
  & a {
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
  }
`;
