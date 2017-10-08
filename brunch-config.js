// See http://brunch.io for documentation.
const gitHubPageName = 'lakmus';

exports.files = {
  javascripts: {
    joinTo: 'app.js'
  },
  stylesheets: {
    defaultExtension: 'scss',
    joinTo: 'app.css'
  }
};

exports.plugins = {
  babel: {
    presets: ['latest', 'react']
  },
  handlebars: {
    locals: {
      title: 'Lakmus',
      baseUrl: process.env.NODE_ENV === 'production' ? `/${gitHubPageName}.github.io` : ''
    }
  }
};
