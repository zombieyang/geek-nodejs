const query = require('./query');

query('{ hello }').then(res=> {
    console.log(res);
})