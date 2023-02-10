/*
 *
 */

import { jstree } from 'jstree';
import './jstree-style-abs-path.css';

import './panel.html';

Template.panel.onCreated( function(){

});

Template.panel.onRendered( function(){
    this.$( '#jstree-demo' ).jstree({
        'core': {
            'animation': 0,
            'check_callback': true,
            'themes': {
                'stripes': true
            },
            'data': [
                {
                    "text" : "Root node",
                    "state" : { "opened" : true },
                    "children" : [
                        {
                            "text" : "Child node 1",
                            "state" : { "selected" : true },
                            "icon" : "jstree-file"
                        },
                        {
                            "text" : "Child node 2",
                            "state" : { "disabled" : true }
                        }
                    ]
                }
            ]
        },
        'types': {
            "#" : {
                "max_children" : 1,
                "max_depth" : 4,
                "valid_children" : ["root"]
            },
            "root" : {
                "icon" : "/static/3.3.14/assets/images/tree_icon.png",
                "valid_children" : ["default"]
            },
            "default" : {
                "valid_children" : ["default","file"]
            },
            "file" : {
                "icon" : "glyphicon glyphicon-file",
                "valid_children" : []
            }
        },
        "plugins" : [
            "contextmenu", "dnd", "search",
            "state", "types", "wholerow"
        ]
    });
});
