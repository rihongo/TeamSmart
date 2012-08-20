/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
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

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'News', 'Feed'
    ],
    stores: [
        'Feed', 'Feeds'
    ],
    views: [
        'Main', 'MyPanel', 'Article', 'Article_list'
    ],
    name: 'MyApp',
    controllers: [
        'Main'
    ],

<<<<<<< HEAD
 /*   launch: function() {

        Ext.create('MyApp.view.MyPanel', {fullscreen: true});
=======
    launch: function() {
        Ext.create('MyApp.view.Main', {fullscreen: true});
        
>>>>>>> dd922f5385e5f3a31d046f4f1eebc93b3fd8977d
    }
*/
});
