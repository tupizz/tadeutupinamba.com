import React, { useContext, useEffect } from 'react';
import { GetStaticProps } from 'next';

import api from '../services/api';
import { APIResponse } from '../interfaces';
import { ProfileContext } from '../context/ProfileContext';
import EducationContent from '../components/EducationContent';

interface Props {
  profileData: APIResponse;
}

const EducationPage: React.FC<Props> = ({ profileData }: Props) => {
  const { setProfileToContext } = useContext(ProfileContext);

  useEffect(() => {
    setProfileToContext(profileData);
  }, []);

  return <EducationContent />;
};

export default EducationPage;

export const getStaticProps: GetStaticProps = async (_) => {
  const res = await api.get<APIResponse>('/v1/portfolio/tupizz');

  return {
    props: {
      profileData: res.data,
    },
  };
};
