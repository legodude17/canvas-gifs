module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'test.js',
        dest: 'test.min.js'
      }
    },
    eslint: {
      target: ['test.js', 'server.js'],
      options: {
        fix: true
      }
    },
    execute: {
      target: {
        src: ['server.js']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-execute');
  // Default task(s).
  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('default', ['uglify', 'execute']);

};