/**
 * Пакет английской (британской) локализации.
 
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
 * @license panel-locale.js is licensed under the terms of the Open Source
 * LGPL 3.0 license. Commercial use is permitted to the extent that the
 * code/component(s) do NOT become part of another Open Source or Commercially
 * d development library or toolkit without explicit permission.
 */

Ext.onReady(function(){
    if(Ext.Date){Ext.Date.monthNames=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];Ext.Date.shortMonthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];Ext.Date.getShortMonthName=function(a){return Ext.Date.shortMonthNames[a]};Ext.Date.monthNumbers={"Jan":0,"Feb":1,"Mar":2,"Apr":3,"May":4,"Jun":5,"Jul":6,"Aug":7,"Sep":8,"Oct":9,"Nov":10,"Dec":11};Ext.Date.getMonthNumber=function(a){return Ext.Date.monthNumbers[a.substring(0,1).toUpperCase()+a.substring(1,3).toLowerCase()]};Ext.Date.dayNames=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];Ext.Date.getShortDayName=function(a){return Ext.Date.dayNames[a].substring(0,3)}}if(Ext.util&&Ext.util.Format){Ext.apply(Ext.util.Format,{thousandSeparator:".",decimalSeparator:",",currencySign:"\u0440\u0443\u0431",dateFormat:"d.m.Y"})}});
Ext.define("Ext.locale.ru.view.View",{override:"Ext.view.View",emptyText:""});Ext.define("Ext.locale.ru.grid.plugin.DragDrop",{override:"Ext.grid.plugin.DragDrop",dragText:"{0} selected rows"});Ext.define("Ext.locale.ru.tab.Tab",{override:"Ext.tab.Tab",closeText:"Close this tab"});Ext.define("Ext.locale.ru.form.field.Base",{override:"Ext.form.field.Base",invalidText:"The value in this field is invalid."});Ext.define("Ext.locale.ru.view.AbstractView",{override:"Ext.view.AbstractView",loadingText:"Loading..."});Ext.define("Ext.locale.ru.picker.Date",{override:"Ext.picker.Date",todayText:"Today",minText:"This date is earlier than the minimum date.",maxText:"This date is later than the maximum date.",disabledDaysText:"Disabled",disabledDatesText:"Disabled",nextText:"Next month (Control+Right)",prevText:"Previous month (Control+Left)",monthYearText:"Select month (Control+Up/Down to select year)",todayTip:"{0} (Space)",format:"d.m.y",startDay:1});Ext.define("Ext.locale.ru.picker.Month",{override:"Ext.picker.Month",okText:"&#160;OK&#160;",cancelText:"Отмена"});Ext.define("Ext.locale.ru.toolbar.Paging",{override:"Ext.PagingToolbar",beforePageText:"Page",afterPageText:"from {0}",firstText:"First page",prevText:"Previous page",nextText:"Next page",lastText:"Last page",refreshText:"Refresh",displayMsg:"Showing records from {0} to {1}, total {2}",emptyMsg:"No data to show"});Ext.define("Ext.locale.ru.form.field.Text",{override:"Ext.form.field.Text",minLengthText:"The minimum length of this field {0}",maxLengthText:"The maximum length of this field {0}",blankText:"This field is required",regexText:"",emptyText:null});Ext.define("Ext.locale.ru.form.field.Number",{override:"Ext.form.field.Number",minText:"The value of this field cannot be less than {0}",maxText:"The value of this field cannot be greater than {0}",nanText:"{0} not a number",negativeText:"Value cannot be negative"});Ext.define("Ext.locale.ru.form.field.Date",{override:"Ext.form.field.Date",disabledDaysText:"Disabled",disabledDatesText:"Disabled",minText:"Date in this field must be later {0}",maxText:"Date must be earlier in this field {0}",invalidText:"{0} is not a valid date - the date must be in the format {1}",format:"d.m.y",altFormats:"d.m.y|d/m/Y|d-m-y|d-m-Y|d/m|d-m|dm|dmy|dmY|d|Y-m-d"});Ext.define("Ext.locale.ru.form.field.ComboBox",{override:"Ext.form.field.ComboBox",valueNotFoundText:undefined},function(){Ext.apply(Ext.form.field.ComboBox.prototype.defaultListConfig,{loadingText:"Загрузка..."})});Ext.define("Ext.locale.ru.form.field.VTypes",{override:"Ext.form.field.VTypes",emailText:'This field must contain an email address in the format "user@example.com"',urlText:'This field must contain a URL in the format "http://www.example.com"',alphaText:'This field should contain only latin letters and an underscore "_"',alphanumText:'This field should only contain latin letters, numbers and the underscore "_"'});Ext.define("Ext.locale.ru.form.field.HtmlEditor",{override:"Ext.form.field.HtmlEditor",createLinkText:"Please enter an address:"},function(){Ext.apply(Ext.form.field.HtmlEditor.prototype,{buttonTips:{bold:{title:"Bold (Ctrl+B)",text:"Apply bold to selected text.",cls:Ext.baseCSSPrefix+"html-editor-tip"},italic:{title:"Italic (Ctrl+I)",text:"Apply italics to selected text.",cls:Ext.baseCSSPrefix+"html-editor-tip"},underline:{title:"Underline (Ctrl+U)",text:"Underline selected text.",cls:Ext.baseCSSPrefix+"html-editor-tip"},increasefontsize:{title:"Increase size",text:"Increase font size.",cls:Ext.baseCSSPrefix+"html-editor-tip"},decreasefontsize:{title:"Reduce size",text:"Font size reduction.",cls:Ext.baseCSSPrefix+"html-editor-tip"},backcolor:{title:"Background color",text:"Change background color for selected text or paragraph.",cls:Ext.baseCSSPrefix+"html-editor-tip"},forecolor:{title:"Text color",text:"Change text color.",cls:Ext.baseCSSPrefix+"html-editor-tip"},justifyleft:{title:"Left align text",text:"Left align text.",cls:Ext.baseCSSPrefix+"html-editor-tip"},justifycenter:{title:"In the center",text:"Center text alignment.",cls:Ext.baseCSSPrefix+"html-editor-tip"},justifyright:{title:"Right align text",text:"Right align text.",cls:Ext.baseCSSPrefix+"html-editor-tip"},insertunorderedlist:{title:"Markers",text:"Start bullet list.",cls:Ext.baseCSSPrefix+"html-editor-tip"},insertorderedlist:{title:"Numbering",text:"Start numbered list.",cls:Ext.baseCSSPrefix+"html-editor-tip"},createlink:{title:"Paste hyperlink",text:"Create a hyperlink from selected text.",cls:Ext.baseCSSPrefix+"html-editor-tip"},sourceedit:{title:"Source code",text:"Switch to source code.",cls:Ext.baseCSSPrefix+"html-editor-tip"}}})});Ext.define("Ext.locale.ru.form.Basic",{override:"Ext.form.Basic",waitTitle:"Please wait..."});Ext.define("Ext.locale.ru.grid.header.Container",{override:"Ext.grid.header.Container",sortAscText:"Sort by asc",sortDescText:"Sort by desk",lockText:"Lock column",unlockText:"Unlock column",columnsText:"Columns"});Ext.define("Ext.locale.ru.grid.GroupingFeature",{override:"Ext.grid.feature.Grouping",emptyGroupText:"(Empty)",groupByText:"Group by field",showGroupsText:"Show by groups"});Ext.define("Ext.locale.ru.grid.PropertyColumnModel",{override:"Ext.grid.PropertyColumnModel",nameText:"Name",valueText:"Value",dateFormat:"d.m.Y"});Ext.define("Ext.locale.ru.window.MessageBox",{override:"Ext.window.MessageBox",buttonText:{ok:"OK",cancel:"Cancel",yes:"Yes",no:"No"}});Ext.define("Ext.locale.ru.form.field.File",{override:"Ext.form.field.File",buttonText:"Browse..."});Ext.define("Ext.locale.ru.Component",{override:"Ext.Component"});

Ext.Txt = {
    message: 'Message',
    confirmation: 'Confirmation',
    warning: 'Warning',
    error: 'Error',
    errorConnect: 'Connection error',
    loading: 'Loading...',
    waiting: 'Please wait...',
    sendErrorReport: '<div class="g-message-box__report">Send error to technical support?</div>',
    serverDidNotAnswer: 'Our your request, the server did not answer.',
    serverErrorConnection: 'A server connection error may occur due to an unstable network connection or a server failure. Please try again later.'
};


Ext.define("Ext.locale.ru.grid.locking.Lockable", {
    override: "Ext.grid.locking.Lockable",
    lockText: "Block column",
    unlockText: "Unblock column (unlock)"
});
Ext.define("Ext.locale.ru.grid.filters.Filters", {
    override: "Ext.grid.filters.Filters",
    menuFilterText: "Filter"
});
Ext.define("Ext.locale.ru.grid.filters.filter.Boolean", {
    override: "Ext.grid.filters.filter.Boolean",
    yesText: "Yes",
    noText: "No"
});
Ext.define("Ext.locale.ru.grid.filters.filter.Date", {
    override: "Ext.grid.filters.filter.Date",
    config: {
        fields: {
            lt: {
                text: 'Before'
            },
            gt: {
                text: 'After'
            },
            eq: {
                text: 'On'
            }
        },
        // Defaults to Ext.Date.defaultFormat
        dateFormat: null
    }
});
Ext.define("Ext.locale.ru.grid.filters.filter.List", {
    override: "Ext.grid.filters.filter.List",
    loadingText: "List"
});
Ext.define("Ext.locale.ru.grid.filters.filter.Number", {
    override: "Ext.grid.filters.filter.Number",
    emptyText: "Enter number"
});
Ext.define("Ext.locale.ru.grid.filters.filter.String", {
    override: "Ext.grid.filters.filter.String",
    emptyText: "Enter text"
});
Ext.define("Ext.locale.ru.LoadMask", {
    override: "Ext.LoadMask",
    msg: "Loading..."
});
Ext.define("Ext.locale.ru.grid.RowEditor", {
    override: "Ext.grid.RowEditor",
    saveBtnText: 'Ok',
    cancelBtnText: 'Cancel',
    errorsText: 'Error',
    dirtyText: 'Field is required'
});
Ext.define("Ext.locale.ru.view.grid.button.Filter", {
    override: "Gm.view.grid.button.Filter",
    applyBtnText: 'Apply',
    resetBtnText: 'Reset',
});
Ext.define("Ext.locale.ru.grid.PageSize", {
    override: "Gm.view.plugin.PageSize",
    displayText: 'Pages on grid'
});
Ext.define("Ext.locale.ru.view.form.Panel", {
    override: "Gm.view.form.Panel",
    msgFillFields: 'You need to fill in the fields'
});
