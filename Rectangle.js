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

Rectangle = function(arg1, arg2, arg3, arg4)
{
	if(typeof arg4 == "undefined") {
		this.topLeft = arg1;
		this.bottomRight = arg2;
	}
	else {
		this.topLeft = new Vector(arg1, arg2);
		this.bottomRight = new Vector(arg3, arg4);		
	}
}

Rectangle.prototype.width = function()
{
	return this.bottomRight.x - this.topLeft.x;
}

Rectangle.prototype.height = function()
{
	return this.bottomRight.y - this.topLeft.y;
}

Rectangle.prototype.area = function()
{
	return this.width() * this.height();
}

Rectangle.prototype.contains = function(point, includeTopLeft,
																				includeBottomRight)
{
	if(typeof includeTopLeft == 'undefined')
		includeTopLeft = true;
	if(typeof includeBottomRight == 'undefined')
		includeBottomRight = false;

	return (
		includeTopLeft ?
			this.topLeft.x <= point.x && this.topLeft.y  <= point.y :
			this.topLeft.x < point.x && this.topLeft.y  < point.y
	) && (
		includeBottomRight ?
			this.bottomRight.x >= point.x && this.bottomRight.y >= point.y :
			this.bottomRight.x > point.x && this.bottomRight.y > point.y
	);
yes
}