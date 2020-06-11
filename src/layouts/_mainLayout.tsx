import React from 'react';

import Sidebar from './../components/Sidebar';
import GlobayStyles from './globalStyled';

import * as S from './styles';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <GlobayStyles />

      <S.MainLayoutWrapper>
        <S.SidebarWrapper>
          <Sidebar />
        </S.SidebarWrapper>
        <S.Content>{children}</S.Content>
      </S.MainLayoutWrapper>
    </>
  );
};

export default MainLayout;
