var pageMod = require('sdk/page-mod'),
    self = require('sdk/self');

pageMod.PageMod({
  include: 'https://travis-ci.org/mozilla-b2g/gaia/jobs/*',
  contentScriptFile: self.data.url('render-tags.js')
});

