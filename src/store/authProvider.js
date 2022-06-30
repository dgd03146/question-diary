import React, { useState } from 'react';
import AuthContext from './authContext';

const AuthProvider = (props) => {
  const [diaryList, setDiaryList] = useState([]);
  const [date, setDate] = useState(new Date());

  const createDiaryHandler = (item) => {};
  const editDiaryHandler = (id) => {};
  const removeDiaryHandler = (id) => {};

  const authContext = {
    diaryList: [],
    date: date,
    setDate: setDate,
    create: createDiaryHandler,
    edit: editDiaryHandler,
    remove: removeDiaryHandler
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
