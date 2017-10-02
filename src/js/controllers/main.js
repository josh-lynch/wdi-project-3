angular
  .module('bemoApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$state', '$auth', 'User'];
function MainCtrl($state, $auth, User) {
  const vm = this;
  // vm.user = {};
  const { userId } = $auth.getPayload();

  if(userId) vm.user = User.get({ id: userId });
}