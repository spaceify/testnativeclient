#!/usr/bin/env node
/**
 * testnative-client, 9.11.2016 Spaceify Oy
 *
 * @class TestNativeClient
 */

var spaceify = require("/api/spaceifyapplication.js");

function TestNativeClient()
{
var self = this;

var eventChannel = null; // testing
	
// Implementation of the start() and fail() callbacks required by Spaceify

self.start = function()
	{
	// testing
	eventChannel = spaceify.getRequiredService("spaceify.org/services/eventchannel");
	};

self.fail = function(err)
	{	
	};

var stop = function()
	{
	spaceify.stop();
	};

}

var testNativeClient = new TestNativeClient();

spaceify.start(testNativeClient, {webservers: {http: true, https: true}});
