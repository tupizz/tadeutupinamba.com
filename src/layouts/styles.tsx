import styled from 'styled-components';
import media from 'styled-media-query';

export const MainLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: 100vh;
  grid-template-areas: 'sidebar conteudo';

  ${media.lessThan('medium')`
    grid-template-areas: 
    'sidebar' 
    'conteudo';
    grid-template-rows: 80px auto;
    grid-template-columns: 100vw;
  `}
`;

export const Content = styled.div`
  grid-area: conteudo;
  padding: 20px 40px;
  overflow-y: scroll;
  position: relative;

  ${media.lessThan('medium')`
    padding: 10px 20px;
  `}

  &::after {
    content: '';
    background-image: url('static/images/programming.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    opacity: 0.07;
    z-index: -1;
  }
`;

export const SidebarWrapper = styled.div`
  background-color: #fafafa;
  grid-area: sidebar;
`;
