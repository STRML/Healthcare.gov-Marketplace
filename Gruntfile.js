'use strict';

module.exports = function(grunt){
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  var settings = require('./lib/settings');

  grunt.initConfig({
    clean: {
      dist: 'dist/*'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      dist: [
        'app/js/**/*.js'
      ]
    },
    useminPrepare: {
      html: 'app/individual.html',
      options: {
        dest: 'dist'
      }
    },
    usemin: {
      html: ['dist/*.html'],
      css: ['dist/css/**/*.css'],
      options: {
        dirs: ['dist']
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'app',
          dest: 'dist',
          src: [
            '*.{ico,txt,html}',
            'images/**/*',
            'css/fonts/**/*'
          ]
        }]
      }
    },
    open: {
      dist: {
        path: 'http://localhost:' + settings.port
      }
    }
  });

  grunt.registerTask('launchServer', 'Launch the local proxy server', function(env) {
    var args = [];
    if (env === 'dev') args.push ('--dev');
    var serverHandle = require('child_process').fork('./app', args);

    // Open the page in your browser.
    grunt.task.run('open', 'holdAfterLaunch');

    // Cleanup
    process.on('exit', function() {
      serverHandle.kill();
    });
  });

  grunt.registerTask('holdAfterLaunch', function() {
    // Run in async mode so this never completes.
    this.async();
    console.log('\nRunning local proxy server on port ' + settings.port + '. Press CTRL-C to exit.\n');
  });

  grunt.registerTask('test', [
    // TODO
  ]);

  grunt.registerTask('develop', [
    // watch task will go here soon
    'launchServer:dev'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    'usemin'
  ]);

  grunt.registerTask('default', [
    //'jshint', // re-enable this when the code gets a little more sane
    'test',
    'build',
    'launchServer:prod'
  ]);
};
