/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
    // Define changes to default configuration here. For example:
    config.language = 'ru';
    // config.uiColor = '#AADC6E';
    
    config.plugins =
        'about,' +
        'a11yhelp,' +
        'basicstyles,' +
        'bidi,' +
        'blockquote,' +
        'clipboard,' +
        'colorbutton,' +
        'colordialog,' +
        'contextmenu,' +
        'dialogadvtab,' +
        'div,' +
        'elementspath,' +
        'enterkey,' +
        'entities,' +
        'filebrowser,'+
        'find,' +
        'flash,' +
        'floatingspace,' +
        'font,' +
        'format,' +
        'forms,' +
        'horizontalrule,' +
        'htmlwriter,' +
        'image,' +
        'iframe,' +
        'indentlist,' +
        'indentblock,' +
        'justify,' +
        'link,' +
        'list,' +
        'liststyle,' +
        'magicline,' +
        'maximize,' +
        'newpage,' +
        'pagebreak,' +
        'pastefromword,' +
        'pastetext,' +
        'preview,' +
        'print,' +
        'removeformat,' +
        'resize,' +
        'save,' +
        'selectall,' +
        'showblocks,' +
        'showborders,' +
        'smiley,' +
        'sourcearea,' +
        'specialchar,' +
        'stylescombo,' +
        'tab,' +
        'table,' +
        'tabletools,' +
        'templates,' +
        'toolbar,' +
        'undo,' +
        'wysiwygarea';

    config.font_names = 'Arial/Arial, sans-serif;' +
                        'ArialRoundedMTProCyr-Bold/ArialRoundedMTProCyr-Bold, Arial, sans-serif;'+
                        'HeliosWeb/HeliosWeb, Arial, sans-serif;'+
//                        'Comic Sans MS/Comic Sans MS, cursive;' +
//                        'Courier New/Courier New, Courier, monospace;' +
//                        'Georgia/Georgia, serif;' +
//                        'Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;' +
//                        'Tahoma/Tahoma, Geneva, sans-serif;' +
//                        'Times New Roman/Times New Roman, Times, serif;' +
//                        'Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;' +
//                        'Verdana/Verdana, Geneva, sans-serif'+
    '';
    config.forcePasteAsPlainText  = true;
};