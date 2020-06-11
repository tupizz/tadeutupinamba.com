import React, { createContext, useState, useCallback, useEffect } from 'react';
import { APIResponse } from '../interfaces';

interface ProfileContext {
  profile: ProfileState;
  setProfileToContext(data: APIResponse): void;
}

export const ProfileContext = createContext<ProfileContext>(
  {} as ProfileContext
);

interface ProfileState {
  data?: APIResponse;
}

export const ProfileProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<ProfileState>({} as ProfileState);

  useEffect(() => {
    const data = localStorage.getItem('@Tupizz/Profile');
    if (data) {
      setProfile({ data: JSON.parse(data) });
    }
  }, []);

  const setProfileToContext = useCallback((data: APIResponse) => {
    setProfile({ data });
    localStorage.setItem('@Tupizz/Profile', JSON.stringify(data));
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfileToContext }}>
      {children}
    </ProfileContext.Provider>
  );
};
