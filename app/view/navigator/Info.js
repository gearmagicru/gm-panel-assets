/**
 * Компонент "Панель навигации записей списка".
 
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
 * @license Info.js is licensed under the terms of the Open Source
 * LGPL 3.0 license. Commercial use is permitted to the extent that the
 * code/component(s) do NOT become part of another Open Source or Commercially
 * d development library or toolkit without explicit permission.
 */

/**
 * @class Gm.view.navigator.Info
 * @extends Ext.Panel
 * Компонент "Панель навигации записей списка".
 */
Ext.define('Gm.view.navigator.Info', {
    extend: 'Ext.Panel',
    xtype: 'g-navigator-info',
    cls: 'g-navigator g-navigator_info',
    bodyCls: 'g-navigator__body',
    requires: ['Gm.view.navigator.NavigatorController'],
    controller: 'navigator',
    bodyPadding: 5,
    animate: false,
    hidden: true
});
