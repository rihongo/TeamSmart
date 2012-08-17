/*
 * File: app/view/MyPanel.js
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

Ext.define('MyApp.view.MyPanel', {
    extend: 'Ext.Panel',
    xtype:"mainpanel",

    config: {
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'toolbar',
                id:"titlebar",
                docked: 'top',
                title: 'News',
                items:[{
                	xtype:"button",
                	id:"prevButton",
                	text:"뒤로 가기",
                	action:"back",
                	ui:"back",
                }]
            },
            {
                xtype: 'list',
                id:"articleList",
                itemTpl: [
                    '<div style="margin-left: 62px;">',
                    '<img src="{url}"/>    {title}<br>',
                    '</div>',
                ],
                store: 'Feed'
            },{
            	layout:"fit",
            	scrollable:true,
        		items:[{
        			xtype:"panel",
        			id:'articlePanel',
        			tpl:'{content}'

        		}]
            }
        ]
    }

});