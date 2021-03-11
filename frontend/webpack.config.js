

module.exports = (env,argv) => {
    const isDev = argv.mode === 'development';
    return {
        entry : './src/index.js',
        module : {
            rules : [
                {
                    test : /.css$/,
                    use : [
                        'style-loader',
                        {
                            loader : 'css-loader',
                            options : { sourceMap : isDev ? true : false}
                        }
                    ]
                }
            ]
        }
    }
}