module.exports = function(grunt) {
  "use strict";
  const sass = require("sass");
  require("load-grunt-tasks")(grunt, {
    pattern: ["grunt-*", "@lodder/grunt-*"]
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    config: {
      "cssSrcDir": "src/sass",
      "cssTargetDir": "assets/css",
      "jsSrcDir": "src/js",
      "jsTargetDir": "assets/js",
      "jsDependencies": [
        "<%= config.jsSrcDir %>/libs/jquery.min.js",
        "<%= config.jsSrcDir %>/libs/jquery.fitvids.js",
        "<%= config.jsSrcDir %>/libs/highlight.min.js"
      ]
    },
    copy: {
      dev: {
        files: [{
          dest: "assets/font/",
          src: ["*", "**/*"],
          cwd: "src/font/",
          expand: true
        }]
      },
      dist: {
        files: [{
          dest: "assets/font/",
          src: ["*", "**/*"],
          cwd: "src/font/",
          expand: true
        }]
      }
    },
    clean: {
      dev: ["dev"],
      dist: ["dist"],
      assets: ["assets"],
      all: ["dev", "dist", "assets"]
    },
    sass: {
      dev: {
        options: {
          implementation: sass,
          includePaths: ["<%= config.cssSrcDir %>"],
          sourceMaps: true
        },
        files: {
          "<%= config.cssTargetDir %>/style.css": "<%= config.cssSrcDir %>/style.scss"
        }
      },
      dist: {
        options: {
          implementation: sass,
          outputStyle: "compressed"
        },
        files: {
          "<%= config.cssTargetDir %>/style.css": "<%= config.cssSrcDir %>/style.scss"
        }
      }
    },
    postcss: {
      options: {
        map: false
      },
      dev: {
        src: "<%=  config.cssTargetDir %>/*.css"
      },
      dist: {
        src: "<%=  config.cssTargetDir %>/*.css"
      }
    },
    uglify: {
      js: {
        files: {
          "<%= config.jsTargetDir %>/script.js": [
            "<%= config.jsDependencies %>",
            "<%= config.jsSrcDir %>/script.js"
          ]
        }
      }
    },
    watch: {
      css: {
        files: "<%=  config.cssSrcDir %>/**/*.scss",
        tasks: ["sass:dev", "copy:dev", "postcss:dev"]
      },
      js: {
        files: "<%=  config.jsSrcDir %>/**/*.js",
        tasks: ["uglify"]
      }
    },
    compress: {
      main: {
        options: {
          archive: `dist/${require("./package.json").name}.zip`,
          level: 9
        },
        files: [{
          src: [
            "**",
            "!node_modules",
            "!node_modules/**",
            "!src",
            "!src/**",
            "!dist",
            "!dist/**",
            "!.git",
            "!.gitignore",
            "!Gruntfile.js",
            "!package-lock.json"
          ],
          dest: "."
        }]
      },
    }
  });

  grunt.registerTask("build", [
    "sass:dist",
    "postcss:dist",
    "copy:dist",
    "uglify"
  ]);
  grunt.registerTask("dist", [
    "clean:assets",
    "build",
    "compress"
  ]);
  grunt.registerTask("default", [
    "sass:dev",
    "postcss:dev",
    "copy:dev",
    "uglify",
    "watch"
  ]);
};
