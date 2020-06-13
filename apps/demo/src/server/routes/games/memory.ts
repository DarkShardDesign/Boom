export default [
    {
        url: '/newgame',
        method: 'get',
        handler: (req, res) => {
            res.setHeader('Content-type', 'application/json' );
            res.end(JSON.stringify({ name: 'memory', action: 'newgame' }))
        }
    }
]