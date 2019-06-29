// Licensed under the MIT license, see LICENSE file.
// Author: Magnus Månsson (https://github.com/magma1447)
module.exports = function(RED) {
    function If(config) {
        RED.nodes.createNode(this,config);
		this.config = config;
		var node = this;
		var NodeHelper = require('./NodeHelper.js');
		var h = new NodeHelper( node );

        this.on('input', function(msg) {
			var topic = msg.topic;
			var payload = msg.payload;

			if( topic !== undefined && payload !== undefined ) {
				h.SetResult( (payload === node.config.payload), topic );
			}
        });

		h.DisplayUnkownStatus();
    }

    RED.nodes.registerType("If", If);
}