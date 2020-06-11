import styled from 'styled-components';

export const MainLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: 100vh;
  grid-template-areas: 'sidebar conteudo';
`;

export const Content = styled.div`
  grid-area: conteudo;
  padding: 20px 40px;
  overflow-y: scroll;
  position: relative;

  &::after {
    content: '';
    background-image: url('static/images/programming.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    opacity: 0.1;
    z-index: -1;
  }
`;

export const SidebarWrapper = styled.div`
  background-color: #fafafa;
  grid-area: sidebar;
`;
