({
    appDir: '.',
    
    baseUrl: 'lib',
    
    /**
     * Uncomment to turn off uglify minification.
     *
     * This can help for debugging templates...
     * /
    optimize: 'none',
    /**/
    
    dir: '../demo-build',
    
    paths: {
        tpl: '../../tpl'
    },
    
    /**
     * This removes the plugin from the build
     * As templates are functions and don't really need the plugin to work,
     * you can choose to exclude it and save some Ko
     *
     * The plugin will actually become an empty function and take about 64 bytes minified...
     *
     * Comment to turn off exclusion if you plan to use dynamic loading/compiling of templates
     *
     */
    pragmasOnSave: {
        excludeTpl: true
    },
    /**/
    
    modules: [
        {
            name: "main"
        }
    ]
})
