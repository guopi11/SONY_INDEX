
window.onload=function(){
var aBtn=document.getElementsByClassName('btn');
var oUl=document.getElementById('show_list');
var arr=[0,-960,-1920];
var i=0;





/*给logo添加src以及hover*/

var aLogo=$('#logo_list img');
for(i=0;i<aLogo.length;i++){
	aLogo.eq(i).attr('index',i+1);
	var t=i+1;
	aLogo.eq(i).attr('src','img/logo_'+aLogo.eq(i).attr('index')+'_1.gif')
	aLogo.eq(i).mouseover(function(){
		$(this).attr('src','img/logo_'+$(this).attr('index')+'_2.gif')
	})
	aLogo.eq(i).mouseout(function(){
		$(this).attr('src','img/logo_'+$(this).attr('index')+'_1.gif')
	})
}



/*hover事件1*/
var oBuy=$('#buy_list');
var oNav=$('#nav_list li').eq(0);

oNav.mouseover(function(){
	oBuy.css('display','block');
})
oNav.mouseout(function(){
	oBuy.css('display','none');
})
oBuy.mouseover(function(){
	oBuy.css('display','block');
})
oBuy.mouseout(function(){
	oBuy.css('display','none');
})
/*hover事件2*/
var h1=$('#t_left a img');
var h2=$('#t_right a img');
h1.mouseover(function(){
	$(this).attr('src','img/t/store_left2.gif')
})
h1.mouseout(function(){
	$(this).attr('src','img/t/store_left.gif')
})
h2.mouseover(function(){
	$(this).attr('src','img/t/store_right2.gif')
})
h2.mouseout(function(){
	$(this).attr('src','img/t/store_right.gif')
})


/*hover事件3*/
$('#pic_2').mouseover(function(){
	$(this).attr('src','img/footer_num2.gif')
})
$('#pic_2').mouseout(function(){
	$(this).attr('src','img/footer_num.gif')
})

$('#pic_4').mouseover(function(){
	$(this).attr('src','img/footer_pic4_2.gif')
})
$('#pic_4').mouseout(function(){
	$(this).attr('src','img/footer_pic4_1.gif')
})

$('#pic_5').mouseover(function(){
	$(this).attr('src','img/footer_pic5_2.gif')
})
$('#pic_5').mouseout(function(){
	$(this).attr('src','img/footer_pic5_1.gif')
})

$('#pic_6').mouseover(function(){
	$(this).attr('src','img/footer_pic6_2.gif')
})
$('#pic_6').mouseout(function(){
	$(this).attr('src','img/footer_pic6_1.gif')
})


$('#pic_7').mouseover(function(){
	$(this).attr('src','img/footer_pic7_2.gif')
})
$('#pic_7').mouseout(function(){
	$(this).attr('src','img/footer_pic7_1.gif')
})

/*点击移动事件*/
var btn1=$('#filter1');
var btn2=$('#filter2');
var mark=true;
btn2.click(function(){

	var oTarget=parseInt($('#show_list').css('left'));
	if(oTarget>-961&&mark==true){
	mark=false;
	startMove(oUl,{left:oTarget-960},function(){mark=true;});
	}
});
btn1.click(function(){
	var oTarget=parseInt($('#show_list').css('left'));
	if(oTarget<-1&&mark==true){
		mark=false;
	startMove(oUl,{left:oTarget+960},function(){mark=true;})}
});

/*添加f_link背景图片及鼠标移入移除事件*/
var ali=$('#f_link li a');

	for(i=0;i<ali.length;i++){
		ali.eq(i).attr('index',i);
		ali.eq(i).css("background",'url(img/index_cop_logo_'+i+'.jpg) no-repeat');
		ali.eq(i).mouseover(function(){
			$(this).css("background",'url(img/index_cop_logo_'+$(this).attr('index')+'.jpg) no-repeat 0 -114px');
		});
		ali.eq(i).mouseout(function(){
			$(this).css("background",'url(img/index_cop_logo_'+$(this).attr('index')+'.jpg) no-repeat');
		});
	}
	



/*点击事件*/
	aBtn[0].onclick=function(){
		startMove(oUl,{left:arr[0]});
		for(var j=0;j<aBtn.length;j++){aBtn[j].className='btn'}
		this.className='active btn';
	}
	aBtn[1].onclick=function(){
		startMove(oUl,{left:arr[1]});
		for(var j=0;j<aBtn.length;j++){aBtn[j].className='btn'}
		this.className='active btn';
	}
	aBtn[2].onclick=function(){
		startMove(oUl,{left:arr[2]});
		for(var j=0;j<aBtn.length;j++){aBtn[j].className='btn'}
		this.className='active btn';
	}

var oBtn3=document.getElementById('search_logo');
var oText=document.getElementById('search_text');
var oSearch=document.getElementById('search');
	oText.onfocus=function(){
		this.className='active1';
		oBtn3.className='active2';
		oSearch.style.border='none'
	}
	oText.onblur=function(){
		this.className='';
		oBtn3.className='';
		oSearch.style.border='2px solid #424242';
	}



/*运动函数*/
function getStyle(obj, attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj, false)[attr];
	}
}

function startMove(obj, json, fn)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		
		for(var attr in json)
		{
			var iCur=0;
			
			if(attr=='opacity')
			{
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				iCur=parseInt(getStyle(obj, attr));
			}
			
			var iSpeed=(json[attr]-iCur)/8;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			if(iCur!=json[attr])
			{
				bStop=false;
			}
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}
			else
			{
				obj.style[attr]=iCur+iSpeed+'px';
			}
			
		}
		
		if(bStop)
		{
			clearInterval(obj.timer);
			
			if(fn)
			{
				fn();
			}
		}
	}, 30)
}
}