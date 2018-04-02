//状态管理设计模式
var MacState = function(){
	var _needState = {};
	states = {
		keyBoard : function(){
			//your coding...
			console.log('keyBoard -> 敲击一下');
		},
		touchPad : function(){
			//your coding...
			console.log('touchPad -> 操作一下');
		},
		mouse : function(){
			//your coding...
			console.log('mouse -> 按一下');	
		}
	};
	//操作方式
	var Action = {
		//添加操作
		addStates : function(){
			//获取参数
			var arg = arguments;
			//清空操作对象
			_needState = {};
			//遍历添加动作
			if(arg.length){
				for(var i=0,l=arg.length;i<l;i++){
					//存储操作
					_needState[arg[i]] = true;
				}
			}
			return this;
		},
		//执行操作
		mission : function(){
			for(key in _needState){
                console.log(key);
                console.log(states);
				states[key] && states[key]();
			}
			return this;
		},
	};
	return{
		addStates : Action.addStates,
		mission : Action.mission
	}
};
var mac = new MacState();
let obj = mac.addStates('touchPad','mouse');
console.log(obj);
mac.mission();

