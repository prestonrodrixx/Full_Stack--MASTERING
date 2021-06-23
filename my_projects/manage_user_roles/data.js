const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic',
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Preston', role: ROLE.ADMIN },
    { id: 2, name: 'Aaron', role: ROLE.BASIC },
    { id: 3, name: 'Nelson', role: ROLE.BASIC },
  ],
  projects: [
    { id: 1, name: "Preston's Project", userId: 1 },
    { id: 2, name: "Aaron's Project", userId: 2 },
    { id: 3, name: "Nelson's Project", userId: 3 },
  ],
};
