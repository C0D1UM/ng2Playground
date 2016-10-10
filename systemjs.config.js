/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs': 'npm:rxjs',
      'jquery': 'npm:jquery',
      'bootstrap': 'npm:bootstrap',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
      'select2': 'npm:select2',
      'ng2-select2': 'npm:ng2-select2',
      'ng2-uploader': 'npm:ng2-uploader',
      'flatpickr': 'npm:flatpickr',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      jquery: {
        main: './dist/jquery',
        defaultExtension: 'min.js'
      },
      bootstrap: {
        main: './dist/js/bootstrap',
        defaultExtension: 'min.js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'select2': {
        defaultExtension: 'min.js',
        main: './dist/js/select2'
      },
      'ng2-select2': {
        defaultExtension: 'js',
        main: 'ng2-select2'
      },
      'ng2-uploader': {
        defaultExtension: 'js',
        main: 'ng2-uploader'
      },
      'flatpickr': {
        defaultExtension: 'min.js',
        main: './dist/flatpickr'
      }
    }
  });
})(this);
