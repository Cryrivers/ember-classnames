'use strict';

module.exports = {
  name: 'ember-classnames',
  included() {
    this._super.apply(this, arguments);
    this.import('bower_components/classnames/index.js');
    this.import('vendor/shims/class-names.js');
  }
};
