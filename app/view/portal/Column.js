/**
 * @class Portal.view.PortalColumn
 * @extends Ext.container.Container
 * A layout column class used internally be {@link Portal.view.PortalPanel}.
 */
Ext.define('Gm.view.portal.Column', {
    extend: 'Ext.container.Container',
    alias: 'widget.portalcolumn',
    requires: [
        'Ext.layout.container.Anchor',
        'Gm.view.portal.Portlet'
    ],
    layout: 'anchor',
    defaultType: 'portlet',
    cls: 'g-portal-column'
});