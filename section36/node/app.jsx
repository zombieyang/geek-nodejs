const React = require('react')
const Container = require('../component/container.jsx')

module.exports = function (reactData) {
    return <Container
        columns={reactData}
        filt={() => { }}
        sort={() => { }}
    />
}