 System.config({
        packages: {        
           app: {main: './main.js', defaultExtension: 'js'},
           'rxjs': {main: 'Rx.js', defaultExtension: 'js'},
		   'angular2-logger': { defaultExtension: 'js' }
        },
         paths: {
               // paths serve as alias
               'npm:': 'node_modules/'
           },
        map: {
            'app' : 'app/',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',			
			'ngx-modal': 'npm:ngx-modal',
            'rxjs': 'npm:rxjs',
			'angular2-logger': 'npm:angular2-logger'
        }
      });
      System.import('app').catch(function(err){ console.error(err); });
    