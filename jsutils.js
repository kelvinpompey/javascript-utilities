String.prototype.format = function format(values) 
{
	var merge = function (components, values, result) 
	{
		var component = components.shift(); 
		var value = values.shift(); 
		
		if(value === undefined){
			return result + component; 
		}
		else {					
			result += component + value; 
			return merge(components, values, result); 
		}
	}
	
	var components = this.split('%@');				
	return merge(components, values, "")	
}