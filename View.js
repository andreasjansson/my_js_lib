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

View = function(id, scale, clear)
{
  this.$container = $("#" + id);
  this.scale = scale;
  if(typeof clear == "undefined")
    this.clear = true;
  else
    this.clear = clear;
}

View.prototype.draw = function(elements)
{
  if(this.clear)
    this.$container.empty();
  for(var i = 0; i < elements.length; i ++) {
    // make sure element exists
    var element = elements[i];
    if(element) {
      this.$container.append($("<div style='z-index: " + element.getZIndex() +
                               "; color: " + element.getColour() +
                               "; left: " + (element.getPosition().x *
                                             this.scale) +
                               "px; top: " + (element.getPosition().y *
                                              this.scale)+
                               "px'>" + element.getText() + "</div>"));
    }
  }
}

View.prototype.destroy = function()
{
  this.$container.empty();
}