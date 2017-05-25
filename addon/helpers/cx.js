import Ember from 'ember';
import classNames from 'classnames';

export default Ember.Helper.helper(function([...params], hash) {
  return classNames(...params, hash);
});
