/*
 * File: app/store/Feed.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.Feed', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.News'
    ],

    config: {
        autoLoad: true,
        model: 'MyApp.model.News',
        storeId: 'Feed',
        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://iamapark.cafe24.com/fullrss/makefulltextfeed.php?url=http://rss.donga.com/total.xml&num=50',
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
    }
});