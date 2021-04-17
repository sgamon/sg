'use strict';

process.app.get('/feed', renderFeedPage);

function renderFeedPage(req, res) {
  res.render('feeds', {title: 'Scott Gamon - Feeds'});
}
