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

Vector = function(x, y)
{
  this.x = x || 0;
  this.y = y || 0;
}

Vector.UP = new Vector(0, -1);
Vector.RIGHT = new Vector(1, 0);
Vector.DOWN = new Vector(0, 1)
Vector.LEFT = new Vector(-1, 0);

Vector.randomUnitVector = function()
{
  var angle = Math.random() * 2 * Math.PI;
  return new Vector(
    Math.cos(angle),
    Math.sin(angle)
  );
}

Vector.fromRadians = function(radians, length)
{
  if(typeof length == 'undefined') {
    length = 1;
  }
  return new Vector(
    Math.cos(radians) * length,
    Math.sin(radians) * length
  );
}

Vector.prototype.equals = function(vector2)
{
  return this.x == vector2.x && this.y == vector2.y;
}

Vector.prototype.length = function()
{
  return this.distance(new Vector());
}

Vector.prototype.add = function(vector2)
{
  return new Vector(
    this.x + vector2.x,
    this.y + vector2.y
  );
}

Vector.prototype.subtract = function(vector2)
{
  return new Vector(
    this.x - vector2.x,
    this.y - vector2.y
  );
}

Vector.prototype.multiply = function(scalar)
{
  return new Vector(
    this.x * scalar,
    this.y * scalar
  );
}

Vector.prototype.divide = function(scalar)
{
  return new Vector(
    this.x / scalar,
    this.y / scalar
  );
}

Vector.prototype.power = function(scalar)
{
  return new Vector(
    Math.pow(this.x, scalar),
    Math.pow(this.y, scalar)
  );
}

Vector.prototype.rotate = function(radians)
{
  return new Vector(
    this.x * Math.cos(radians) - this.y * Math.sin(radians),
    this.x * Math.sin(radians) + this.y * Math.cos(radians)
  );
}

Vector.prototype.distance = function(vector2)
{
  return Math.sqrt(Math.pow(this.x - vector2.x, 2) +
                   Math.pow(this.y - vector2.y, 2));
}

Vector.prototype.directionTo = function(vector2)
{
  return vector2.subtract(this)
    .divide(this.distance(vector2));
}

/**
 * 0 <= radians < 2 * pi
 */
Vector.prototype.toRadians = function()
{
  var radians = Math.atan2(this.y, this.x);
  if(radians < 0)
    radians = radians + 2 * Math.PI;
  return radians;
}

Vector.prototype.round = function()
{
  return new Vector(
    Math.round(this.x),
    Math.round(this.y)    
  );
}