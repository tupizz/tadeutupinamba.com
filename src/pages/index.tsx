import { GetStaticProps } from 'next';
import api from '../services/api';
import { useEffect, useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';
import { APIResponse } from './../interfaces';
import IndexContent from '../components/IndexContent';

interface Props {
  profileData: APIResponse;
}

export default function Home({ profileData }: Props) {
  const { setProfileToContext } = useContext(ProfileContext);

  useEffect(() => {
    setProfileToContext(profileData);
  }, []);

  return <IndexContent />;
}

export const getStaticProps: GetStaticProps = async (_) => {
  const res = await api.get<APIResponse>('/v1/portfolio/tupizz');

  return {
    props: {
      profileData: res.data,
    },
  };
};
