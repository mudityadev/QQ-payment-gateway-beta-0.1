const path = require('path')
// import env from 'dotenv';
// env.config();

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
