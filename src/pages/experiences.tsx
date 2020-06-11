import React, { useContext, useEffect } from 'react';
import { GetStaticProps } from 'next';

import { APIResponse } from '../interfaces';
import api from '../services/api';
import { ProfileContext } from '../context/ProfileContext';
import ExperiencesContent from '../components/ExperiencesContent';

interface Props {
  profileData: APIResponse;
}

const ExperiencesPage: React.FC<Props> = ({ profileData }: Props) => {
  const { setProfileToContext } = useContext(ProfileContext);

  useEffect(() => {
    setProfileToContext(profileData);
  }, []);

  return <ExperiencesContent />;
};

export default ExperiencesPage;

export const getStaticProps: GetStaticProps = async (_) => {
  const res = await api.get<APIResponse>('/v1/portfolio/tupizz');

  return {
    props: {
      profileData: res.data,
    },
  };
};
