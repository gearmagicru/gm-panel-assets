/**
 * Компонент "Панель портала".
 *
 * Этот файл является частью GM Panel.
 *
 * Copyright (c) 2015 Веб-студия GearMagic
 * 
 * Contact: https://gearmagic.ru
 *
 * @author    Anton Tivonenko
 * @copyright (c) 2015, by Anton Tivonenko, anton.tivonenko@gmail.com
 * @date      Oct 01, 2015
 * @version   $Id: 1.0 $
 *
 * @license Portal.js is licensed under the terms of the Open Source
 * LGPL 3.0 license. Commercial use is permitted to the extent that the
 * code/component(s) do NOT become part of another Open Source or Commercially
 * d development library or toolkit without explicit permission.
 */

/**
 * @class Portal.view.PortalPanel
 * @extends Ext.panel.Panel
 * Компонент "Панель портала".
 */
Ext.define('Gm.view.portal.Panel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.portalpanel',

    requires: [
        'Ext.layout.container.Column',
        'Gm.view.portal.DropZone',
        'Gm.view.portal.Column'
    ],

    cls: 'g-portal',
    bodyCls: 'g-portal-body',
    defaultType: 'portalcolumn',
    scrollable: true,
    manageHeight: false,
    layout: { type : 'column' },

    // Set columnWidth, and set first and last column classes to allow exact CSS targeting.
    beforeLayout: function() {
        var items = this.layout.getLayoutItems(),
            len = items.length,
            firstAndLast = ['g-portal-column-first', 'g-portal-column-last'],
            i, item, last;

        for (i = 0; i < len; i++) {
            item = items[i];
           // item.columnWidth = 1 / len;
            last = (i == len-1);

            if (!i) { // if (first)
                if (last) {
                    item.addCls(firstAndLast);
                } else {
                    item.addCls('g-portal-column-first');
                    item.removeCls('g-portal-column-last');
                }
            } else if (last) {
                item.addCls('g-portal-column-last');
                item.removeCls('g-portal-column-first');
            } else {
                item.removeCls(firstAndLast);
            }
        }

        return this.callParent(arguments);
    },

    // private
    initEvents : function(){
        this.callParent();
        this.dd = Ext.create('Gm.view.portal.DropZone', this, this.dropConfig);
    },

    // private
    beforeDestroy : function() {
        if (this.dd) {
            this.dd.unreg();
        }
        this.callParent();
    }
});
