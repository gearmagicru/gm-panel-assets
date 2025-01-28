/**
 * Панель уведомлений.
 
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
 * @license Menu.js is licensed under the terms of the Open Source
 * LGPL 3.0 license. Commercial use is permitted to the extent that the
 * code/component(s) do NOT become part of another Open Source or Commercially
 * d development library or toolkit without explicit permission.
 */

/**
 * @class Gm.view.main.Traybar
 * @extends Ext.Toolbar
 * Панель уведомлений.
 */
Ext.define('Gm.view.main.Traybar', {
    extend: 'Ext.Toolbar',
    xtype: 'g-traybar',
    cls: 'g-traybar',
    plain: true,
    items: [],
    /**
     * Конструктор.
     * @param {Object} config Настройки конфигурации.
     */
    constructor: function (config) {
        this.callParent(arguments);

        if (Gm.settings.panel.traybar != null)
            this.add(Gm.settings.panel.traybar.items);
    },
});
