//	原始版本，可直接引用
function Type(obj,options){
	this.obj = obj;
	var defaults={
		repeat:true,
		speed:200,
		symbol:'_'
	}
	this.options = Object.assign(defaults,options);
	this.init();
}
Type.prototype = {
	init:function(){
		var content = this.obj.innerText;
		this.add(content);
	},
	add:function(content){
		var me = this;
		var str;
		var strlen = 0;
		var t = setInterval(function(){
			str = content.substr(0,strlen) + (strlen == content.length ? "" : me.options.symbol);
			me.obj.innerText = str;
			if(strlen == content.length){
				clearInterval(t);
				if(me.options.repeat==true)
					me.init();
			}
			strlen+=1;
		},me.options.speed);
	}
}
