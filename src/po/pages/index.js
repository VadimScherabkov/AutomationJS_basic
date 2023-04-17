/* eslint-disable valid-jsdoc */
const LoginPage = require('./login.page');
const QuestionLibraryPage = require('./questionLibrary.page');
const UserListPage = require('./userList.page');

/**
 * @param name {'login' | 'questions' | 'users'}
 * @returns {LoginPage|QuestionLibraryPage|UserListPage}
 */
function page(name) {
  const items = {
    login: new LoginPage(),
    questions: new QuestionLibraryPage(),
    users: new UserListPage(),
  };
  return items[name.toLowerCase()];
}

module.exports = {
  LoginPage,
  QuestionLibraryPage,
  UserListPage,
  page,
};
