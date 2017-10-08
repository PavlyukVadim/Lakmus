// See http://brunch.io for documentation.
const gitHubPageName = 'lakmus';

exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/,
      'app.js': /^app/
    }
  },
  stylesheets: {
    defaultExtension: 'scss',
    joinTo: 'app.css'
  }
};

exports.plugins = {
  babel: {
    presets: ['latest', 'react'],
    ignore: [/node_modules/]
  },
  handlebars: {
    locals: {
      title: 'Lakmus',
      baseUrl: process.env.NODE_ENV === 'production' ? `/${gitHubPageName}.github.io` : ''
    }
  }
};

exports.npm = {
  enabled: true,
  styles: {
    'antd': ['dist/antd.css']
  }
}
