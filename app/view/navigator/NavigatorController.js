/**
 * Компонент "Панель навигации компонентов".
 
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
 * @license NavigatorController.js is licensed under the terms of the Open Source
 * LGPL 3.0 license. Commercial use is permitted to the extent that the
 * code/component(s) do NOT become part of another Open Source or Commercially
 * d development library or toolkit without explicit permission.
 */

/**
 * @class Gm.view.navigator.NavigatorController
 * @extends Ext.app.ViewController
 * Контроллер компонента "Панель навигации".
 */
Ext.define('Gm.view.navigator.NavigatorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.navigator',

    /**
     * Обновление элементов дерева.
     * @param {Object} me
     */
    refreshTree: function (me) {
        var tree = me.up('treepanel'),
            store = tree.getStore();
        store.getRootNode().removeAll();
        store.load();
    },

    /**
     * Удаление всех элементов дерева.
     * @param {Object} me
     */
    clearTree: function (me) {
        var node = me.up('treepanel').getRootNode();
        node.removeAll();
    },

    /**
     * Свертывание элементов дерева.
     * @param {Object} me
     */
    collapseTree: function (me) {
        var tree = me.up('treepanel');
        tree.collapseAll();
    },

    /**
     * Развертывание элементов дерева.
     * @param {Object} me
     */
    expandTree: function (me) {
        var tree = me.up('treepanel');
        tree.expandAll();
    },

    /**
     * Загрузка компонента из элемента дерева.
     * @param {Gm.view.navigator.Components} tree
     * @param {Ext.data.Model} record Запись, которая принадлежит элементу.
     * @param {HTMLElement} item Элемент.
     * @param {Number} index Индекс элемента.
     * @param {Ext.event.Event} e Необработанный объект события.
      *@param {Object} eOpts Параметры слушателя.
     */
    loadWidgetFromNode: function (tree, record, item, index, e, eOpts) {
        if (record.data.widgetUrl)
            Gm.getApp().widget.load(record.data.widgetUrl)
    }
});
