function createGraph(u,k){var l=[];
var q=$('<div class="figure"></div>');
var g=$('<div class="graph"></div>');
var h=$('<div class="bars"></div>');
var u=$(u);
var k=$(k);
var a;
var e;
var t;
var j;
var b;
var c={chartData:function(){var w=[];
u.find("tbody td").each(function(){w.push($(this).text())
});
return w
},chartHeading:function(){var w=u.find("caption").text();
return w
},chartLegend:function(){var w=[];
u.find("tbody th").each(function(){w.push($(this).text())
});
return w
},chartYMax:function(){var x=this.chartData();
var w=Math.ceil(Math.max.apply(Math,x)/100)*100;
return w
},yLegend:function(){var x=this.chartYMax();
var w=[];
return w
},xLegend:function(){var w=[];
return w
},columnGroups:function(){var y=[];
var x=u.find("tbody tr:eq(0) td").length;
for(var w=0;
w<x;
w++){y[w]=[];
u.find("tbody tr").each(function(){y[w].push($(this).find("td").eq(w).text())
})
}return y
}};
a=c.chartData();
e=c.chartYMax();
t=c.columnGroups();
$.each(t,function(y){var A=$('<div class="bar-group"></div>');
for(var x=0,w=t[y].length;
x<w;
x++){var z={};
z.label=this[x];
z.height=Math.floor(z.label/e*100)+"%";
z.bar=$('<div class="bar fig'+x+'"><span>'+z.label+"</span></div>").appendTo(A);
z.barBase=$('<div class="bar base'+x+'"><span>'+z.label+"</span></div>").appendTo(A);
l.push(z)
}A.appendTo(h)
});
var o=c.chartHeading();
var f=$('<h4 class="HiddenText">'+o+"</h4>");
f.appendTo(q);
var p=c.chartLegend();
var v=$('<ul class="legend"></ul>');
$.each(p,function(w){});
v.appendTo(q);
var r=c.xLegend();
var i=$('<ul class="x-axis"></ul>');
$.each(r,function(w){var x=$("<li><span>"+this+"</span></li>").appendTo(i)
});
i.appendTo(g);
var d=c.yLegend();
var s=$('<ul class="y-axis"></ul>');
$.each(d,function(w){var x=$("<li><span>"+this+"</span></li>").appendTo(s)
});
s.appendTo(g);
h.appendTo(g);
g.appendTo(q);
q.appendTo(k);
function n(w,x){if(x<w.length){$(w[x].bar).animate({height:w[x].height},800);
j=setTimeout(function(){x++;
n(w,x)
},100)
}}function m(){$.each(l,function(w){$(l[w].bar).stop().css("height",0)
});
clearTimeout(j);
clearTimeout(b);
b=setTimeout(function(){n(l,0)
},200)
}$("#reset-graph-button").click(function(){m();
return false
});
m()
};