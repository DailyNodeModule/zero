const Parser = require('rss-parser');
const parser = new Parser();

module.exports = async (req, res) => {
    // Grabs an RSS Feed which contains the featured images on Wikipedia.
    const feed = await parser.parseURL('https://tools.wmflabs.org/catfood/catfood.php?category=Featured_pictures_on_Wikimedia_Commons');

    // Sends the items from the feed as JSON.
    res.send(feed.items);
};