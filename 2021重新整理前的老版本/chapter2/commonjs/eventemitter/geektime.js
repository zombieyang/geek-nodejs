const EventEmitter = require('events').EventEmitter;

class Geektime extends EventEmitter {
    constructor() {
        super();
        
        setInterval(() => {
            this.emit('newlesson', {
                price: Math.random() * 100
            })
        }, 3000)
    }
}

module.exports = new Geektime;