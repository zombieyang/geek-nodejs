const nodeserver = require('./bff');

nodeserver.listen(3000)

require('./backend/comment-list')
require('./backend/comment-praise')
require('./backend/article')
require('./backend/detail')