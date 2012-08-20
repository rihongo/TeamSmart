/*
 * File: app/view/RssPanel.js
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

Ext.define('MyApp.view.RssPanel', {
    extend: 'Ext.Panel',

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'RSS 추가',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'Home',
                        ui: 'back',
                        iconCls: 'home',
                        iconMask: true,
                        text: ''
                    }
                ]
            },
            {
                xtype: 'dataview',
                height: '',
                id: 'RssList',
                ui: '',
                itemTpl: [
                    '<div style="width: 100px; height: 100px; float:left">',
                    '<img src="{rssImage}"><br>',
                    '{rssName}',
                    '</div>'
                ],
                store: 'rssStore'
            },
            {
                xtype: 'fieldset',
                docked: 'top',
                id: 'rssFieldSet',
                margin: '',
                ui: '',
                layout: {
                    align: 'stretchmax',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'textfield',
                        id: 'rssAddressText',
                        width: '90%',
                        label: 'RSS'
                    },
                    {
                        xtype: 'button',
                        id: 'rssAddButton',
                        width: '10%',
                        text: '+'
                    }
                ]
            }
        ]
    }

});