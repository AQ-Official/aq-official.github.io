$(document).ready(function() {

function clearmoji(str) { 
	str = str.replace(/\[[一-龥]\]/g, "");
	str = str.replace(/\[[一-龥][一-龥]\]/g, "");
	str = str.replace(/\[[一-龥][一-龥][一-龥]\]/g, "");
	str = str.replace(/\[[一-龥][一-龥][一-龥][一-龥]\]/g, "");
	//取消字符串中出现的所有逗号 
	return str; 
	}


function getArrayIndex(arr, obj) {
	var i0 = arr[0].length;
    while (i0--) {
        if (arr[0][i0] === obj) {
            return "0"+i0;
        }
	}
	var i1 = arr[1].length;
    while (i1--) {
        if (arr[1][i1] === obj) {
            return "1"+i1;
        }
	}
	var i2 = arr[2].length;
    while (i2--) {
        if (arr[2][i2] === obj) {
            return "2"+i2;
        }
	}
	var i3 = arr[3].length;
    while (i3--) {
        if (arr[3][i3] === obj) {
            return "3"+i3;
        }
	}
	var i4 = arr[4].length;
    while (i4--) {
        if (arr[4][i4] === obj) {
            return "4"+i4;
        }
	}
	var i5 = arr[5].length;
    while (i5--) {
        if (arr[5][i5] === obj) {
            return "5"+i5;
        }
	}
	var i6 = arr[6].length;
    while (i6--) {
        if (arr[6][i6] === obj) {
            return "6"+i6;
        }
    }
    return -1;
}


function pipeixinge1(gq,zj) {
	var i = gq.length;
	
    //声明了个变量 保存下标值

    while (i--) {
        if (gq[i] === zj) {
			
			if(i<5){
				return 5;
			}else{
				return i;
			}
            
        }
    }


}

function pipeixinge2(gq,zj) {
	var i = gq.length;
	
    //声明了个变量 保存下标值

    while (i--) {
        if (gq[i] === zj) {
			
			if(i<6){
				return 6;
			}else{
				return i;
			}
            
        }
    }


}








	

//	var sj=new Array()

	function huoqu0(data) {
	
		var result =data.comments;
	
		sj0=new Array(result)
		pl0=new Array(result)
		nick0=new Array(result)
	for(var i in result){
		pl0[i] = clearmoji(data.comments[i].content.toString());
		sj0[i] = data.comments[i].time.toString();
		nick0[i] = data.comments[i].user.nickname.toString();
	
		};

		
	};
	function huoqu1(data) {
	
		var result =data.comments;
	
		sj1=new Array(result)
		pl1=new Array(result)
		nick1=new Array(result)
	for(var i in result){
		pl1[i] = clearmoji(data.comments[i].content.toString());
		sj1[i] = data.comments[i].time.toString();
		nick1[i] = data.comments[i].user.nickname.toString();
		};

		
	};
	function huoqu2(data) {
	
		var result =data.comments;
	
		sj2=new Array(result)
		pl2=new Array(result)
		nick2=new Array(result)
	for(var i in result){
		pl2[i] = clearmoji(data.comments[i].content.toString());
		sj2[i] = data.comments[i].time.toString();
		nick2[i] = data.comments[i].user.nickname.toString();
		};

		
	};
	function huoqu3(data) {
	
		var result =data.comments;
	
		sj3=new Array(result)
		pl3=new Array(result)
		nick3=new Array(result)
	for(var i in result){
		pl3[i] = clearmoji(data.comments[i].content.toString());
		sj3[i] = data.comments[i].time.toString();
		nick3[i] = data.comments[i].user.nickname.toString();
		};

		
	};
	function huoqu4(data) {
	
		var result =data.comments;
	
		sj4=new Array(result)
		pl4=new Array(result)
		nick4=new Array(result)
	for(var i in result){
		pl4[i] = clearmoji(data.comments[i].content.toString());
		sj4[i] = data.comments[i].time.toString();
		nick4[i] = data.comments[i].user.nickname.toString();
		};

		
	};
	function huoqu5(data) {
	
		var result =data.comments;
	
		sj5=new Array(result)
		pl5=new Array(result)
		nick5=new Array(result)
	for(var i in result){
		pl5[i] = clearmoji(data.comments[i].content.toString());
		sj5[i] = data.comments[i].time.toString();
		nick5[i] = data.comments[i].user.nickname.toString();
		};

		
	};
	function huoqu6(data) {
	
		var result =data.comments;
	
		sj6=new Array(result)
		pl6=new Array(result)
		nick6=new Array(result)
	for(var i in result){
		pl6[i] = clearmoji(data.comments[i].content.toString());
		sj6[i] = data.comments[i].time.toString();
		nick6[i] = data.comments[i].user.nickname.toString();
		};

		
	};

	function qq(data) {
	
		var result =data.hotSongs;
	
		gqid=new Array(result)
		gm=new Array(result)
		gqzjid=new Array(result)
	for(var i in result){
		gqid[i] = data.hotSongs[i].id.toString();
		gm[i] = data.hotSongs[i].name.toString();
		gqzjid[i] = data.hotSongs[i].al.id.toString();
	
		};
	}
		function zhuanji(data) {
	



			zjid0 = data.hotAlbums[0].id.toString();
			zjid1 = data.hotAlbums[8].id.toString();



	
		
	};




	setInterval(function() {


			

		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/artists?id=12453823",
			
			dataType: "json",
			success: function (haha) {
				qq(haha);
			}
		
		});

		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/artist/album?id=12453823",
			
			dataType: "json",
			success: function (haha) {
				zhuanji(haha);
			}
		
		});

		

		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/comment/music?id="+gqid[0],
			
			dataType: "json",
			success: function (haha) {
				huoqu0(haha);
			}
		
		});
		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/comment/music?id="+gqid[1],
			
			dataType: "json",
			success: function (haha) {
				huoqu1(haha);
			}
		
		});
		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/comment/music?id="+gqid[2],
			
			dataType: "json",
			success: function (haha) {
				huoqu2(haha);
			}
		
		});

		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/comment/music?id="+gqid[3],
			
			dataType: "json",
			success: function (haha) {
				huoqu3(haha);
			}
		
		});
		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/comment/music?id="+gqid[4],
			
			dataType: "json",
			success: function (haha) {
				huoqu4(haha);
			}
		
		});
		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/comment/music?id="+gqid[pipeixinge1(gqzjid,zjid0)],
			
			dataType: "json",
			success: function (haha) {
				huoqu5(haha);
			}
		
		});
		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/comment/music?id="+gqid[pipeixinge2(gqzjid,zjid1)],
			
			dataType: "json",
			success: function (haha) {
				huoqu6(haha);
			}
		
		});
		var dgm=[gm[0], gm[1], gm[2], gm[3],gm[4],gm[pipeixinge1(gqzjid,zjid0)],gm[pipeixinge2(gqzjid,zjid1)]]
		var dpl =[pl0, pl1, pl2, pl3,pl4,pl5,pl6]
		var dnick =[nick0,nick1,nick2,nick3,nick4,nick5,nick6]

		let px = [sj0, sj1, sj2, sj3,sj4,sj5,sj6].flat().sort((a, b) => b-a)

	
		
		document.getElementById("pl01").innerHTML = dpl[getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[0]).substr(0, 1)][getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[0]).substr(1, 2)]
		document.getElementById("pl02").innerHTML = dpl[getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[1]).substr(0, 1)][getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[1]).substr(1, 2)]
		document.getElementById("pl03").innerHTML = dpl[getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[2]).substr(0, 1)][getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[2]).substr(1, 2)]


		document.getElementById("id01").innerHTML = "来自“"+dnick[getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[0]).substr(0, 1)][getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[0]).substr(1, 2)]
		+"”在《"+dgm[getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[0]).substr(0, 1)]+"》下的评论"
		document.getElementById("id02").innerHTML = "来自“"+dnick[getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[1]).substr(0, 1)][getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[1]).substr(1, 2)]
		+"”在《"+dgm[getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[1]).substr(0, 1)]+"》下的评论"
		document.getElementById("id03").innerHTML = "来自“"+dnick[getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[2]).substr(0, 1)][getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[2]).substr(1, 2)]
		+"”在《"+dgm[getArrayIndex([sj0, sj1, sj2, sj3,sj4,sj5,sj6],px[2]).substr(0, 1)]+"》下的评论"



		
			



		
	}, 10000);
	


		
	
});
