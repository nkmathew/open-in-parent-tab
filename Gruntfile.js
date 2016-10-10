module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Copy shared libraries/scripts
    copy: {
      firefox: {
        files: [
          {
            expand: true,
            cwd: 'lib/',
            src: ['**'],
            dest: 'Firefox/data/lib'
          }, {
            expand: true,
            cwd: 'images/',
            src: ['**'],
            dest: 'Firefox/data/images'
          }
        ]
      }
    },

    // JSHint
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      grunt: {
        src: ['Gruntfile.js']
      },
      all: {
        src: [
          'lib/core/**/*.js',
          'Firefox/data/**/*.js',
          '!Firefox/data/lib/**/*.js',
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['jshint:all']);
  grunt.registerTask('firefox', ['copy:firefox']);
};
