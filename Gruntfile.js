'use strict';

module.exports = function(grunt){
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

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
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'dist',
          keepalive: true,
          open: 'http://localhost:8080/individual.html'
        }
      }
    },
  });

  grunt.registerTask('test', [
    // TODO
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
    'build'
  ]);
};
