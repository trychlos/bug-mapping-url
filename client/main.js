/*
 * The most simple application I can build with Meteor
 *
 * Aims to display the same page, say four times, with different routes:
 * - /
 * - /one
 * - /two/three
 * - /four/five/six
 * 
 * Goal is to exhibit the adressing bug when loading jstree images
 */

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/imports/client/components/panel/panel.js';
import '/imports/client/layouts/app/app.js';

FlowRouter.route( '/*/jstree/:file', {
    action(){
        console.log( FlowRouter.current());
    }
});

FlowRouter.route( '*', {
    action(){
        BlazeLayout.render( 'app', { template: 'panel' });
    }
});
