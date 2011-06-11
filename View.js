/*
 * ant_simulation - A naive Javascript simulation of an ant colony
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

View = function(id, scale)
{
	this.$container = $("#" + id);
	this.scale = scale;
}

View.prototype.draw = function(elements)
{
	this.$container.empty();
	for(var i = 0; i < elements.length; i ++) {
		// make sure element exists
		var element = elements[i];
		if(element) {
			this.$container.append($("<div style='z-index: " + element.getZIndex() +
															 "; color: " + element.getColour() +
															 "; left: " + (element.position.x * this.scale) +
															 "px; top: " + (element.position.y * this.scale)+
															 "px'>" + element.getText() + "</div>"));
		}
	}
}

View.prototype.destroy = function()
{
	this.$container.empty();
}