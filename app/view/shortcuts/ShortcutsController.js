/**
 * Компонент "Рабочий стол".
 
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
 * @class Gm.view.shortcuts.ShortcutsController
 * @extends Ext.app.ViewController
 * Контроллер компонента "Рабочий стол".
 */
Ext.define('Gm.view.shortcuts.ShortcutsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.shortcuts',

    /**
     * Обновление элементов рабочего стола.
     * @param {Ext.app.ViewController} me
     */
    refreshShortcuts: function (me) {
        var shortcuts = me.up('panel').down('g-shortcuts');
        shortcuts.store.reload();
    },

    /**
     * Сортировка элементов рабочего стола.
     * @param {Object} me
     */
    shortcutsSortAsc: function (me) {
        var shortcuts = me.up('panel').down('g-shortcuts');
        shortcuts.store.sort('title', 'DESC');
    },

    /**
     * Загрузка компонента.
     * @param {Object} me
     */
    loadWidget: function (me) {
        me.handlerArgs.me = me;
        Gm.getApp().widget.loadBy(me.handlerArgs);
    }
});
