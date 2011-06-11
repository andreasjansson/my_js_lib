/*
 * my_js_lib
 * Copyright (C) 2011 Andreas Jansson
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

Controller = function(model, view, fps)
{
	this.model = model;
	this.view = view;
	this.timer = new Timer(fps);

	var self = this;

	this.timer.tick = function() {
		self.step();
	}

	this.model.onComplete = function() {
		self.timer.stop();
		if(self.onComplete) {
			// a final draw
			self.view.draw(self.model.elements());
			self.onComplete();
		}
	}
}

Controller.prototype.start = function()
{
	this.view.draw(this.model.elements());
	this.timer.start();
}

Controller.prototype.step = function()
{
	this.model.step();
	this.view.draw(this.model.elements());
}

Controller.prototype.destroy = function()
{
	this.timer.stop(); // clear old timer
	this.view.destroy();
	this.model.destroy();
}