module.exports = {
    plugins: [
        require('rucksack-css'),
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        })
    ]
}