/* eslint-env node */
'use strict';

const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-smooth-scroll',
  options: {
    nodeAssets: {
      'smooth-scroll': {
        vendor: {
          srcDir: 'dist/js',
          destDir: 'smooth-scroll',
          include: ['smooth-scroll.js'],
          processTree(input) {
            return fastbootTransform(input);
          }
        }
      }
    }
  },

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/smooth-scroll/smooth-scroll.js');

    this.import('vendor/smooth-scroll/shim.js', {
      type: 'vendor',
      exports: {
        'smooth-scroll': ['default']
      }
    });
  }
};
