//=============================================================================
// Astfgl's Change Gold Unit position
// by Astfgl
// Date: 09/06/2016  
// VO.2 Fix for large values
//=============================================================================
 

/*:
 * @plugindesc Displays the currency unit before the value
 * @author Astfgl
 *
 * @param No params are available.
 * @desc -
 * @default -  

 */
 (function() {
 
  var parameters = PluginManager.parameters('AstgflGoldPos');
 

	var _Astfgl_Window_Base_drawCurrencyValue = Window_Base.prototype.drawCurrencyValue

Window_Base.prototype.drawCurrencyValue = function(value, unit, x, y, width) {
    var unitWidth = Math.min(80, this.textWidth(unit));
	var valueWidth = Math.max(12, this.textWidth(value));
	this.resetTextColor();
    this.drawText(value, x , y, width, 'right');
	this.resetTextColor();
	this.changeTextColor(this.systemColor());
    this.drawText(unit, x + width - valueWidth - unitWidth - 6, y, unitWidth , 'left');
};

 })();