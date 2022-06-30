import React from 'react';

const AuthContext = React.createContext({
  diaryLists: {},
  date: {},
  create: (item) => {},
  edit: (id, item) => {},
  remove: (id) => {}
});

export default AuthContext;
