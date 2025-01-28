/**
 * Виджет "Панель навигации модулей".
 
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
 * @license ShortcutsController.js is licensed under the terms of the Open Source
 * LGPL 3.0 license. Commercial use is permitted to the extent that the
 * code/component(s) do NOT become part of another Open Source or Commercially
 * d development library or toolkit without explicit permission.
 */

/**
 * @class Gm.view.navigator.Modules
 * @extends Ext.tree.Panel
 * Виджет "Панель навигации модулей".
 */
Ext.define('Gm.view.navigator.Modules', {
    extend: 'Ext.tree.Panel',
    xtype: 'g-navigator-modules',
    cls: 'g-navigator g-navigator_modules',
    bodyCls: 'g-navigator__body',
    requires: ['Gm.view.navigator.NavigatorController'],
    controller: 'navigator',
    animate: false,
    useArrows: true,
    rootVisible: false,
    store: {
        autoLoad: false,
        proxy: {
            type: 'ajax',
            url: Gm.url.build('@backend/workspace/widgetstree/data'),
            async : false,
            reader: {
                rootProperty: 'data',
                successProperty: 'success'
            }
        },
        listeners: {
            load: function (me) {
                var response = Gm.response.normalize(me.proxy.reader.rawData);
                if (response == null)
                    Ext.Msg.exception(me.proxy.reader.rawData, false, true);
                else
                if (!response.success)
                    Ext.Msg.exception(response, false, true);
            }
        }
    },
    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        items: ['->', {
            xtype: 'button',
            cls: 'g-button-tool',
            iconCls: 'g-icon-tool g-icon-tool_default x-tool-refresh',
            bind: { tooltip: '{locale.main.tree.refresh.tooltip}' },
            handler: 'refreshTree'
        }, '-', {
            xtype: 'button',
            cls: 'g-button-tool',
            iconCls: 'g-icon-tool g-icon-tool_default x-tool-collapse',
            bind: { tooltip: '{locale.main.tree.collapse.tooltip}' },
            handler: 'collapseTree'
        }, {
            xtype: 'button',
            cls: 'g-button-tool',
            iconCls: 'g-icon-tool g-icon-tool_default x-tool-expand',
            bind: { tooltip: '{locale.main.tree.expand.tooltip}' },
            handler: 'expandTree'
        }]
    }],
    listeners: {
        itemclick: 'loadWidgetFromNode'
    }
});
