$(document).ready(function() {
//<div id="particles-js" class="background2"></div>
	particlesJS('lizi2', {
		"particles": {
			"number": {
				"value": 15,
				"density": {
					"enable": false,
					"value_area": 800
				}
			},
			"color": {
				"value": "#145768"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#C9CF98"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 1,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 0.5,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#C9CF98",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 3,
				"direction": "top",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "window",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "repulse"
				},
				"onclick": {
					"enable": false,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true,
		"config_demo": {
			"hide_card": false,
			"background_color": "#b61924",
			"background_image": "",
			"background_position": "50% 50%",
			"background_repeat": "no-repeat",
			"background_size": "cover"
		}
	});




	particlesJS('lizi1', {
		"particles": {
			"number": {
				"value": 20,
				"density": {
					"enable": false,
					"value_area": 800
				}
			},
			"color": {
				"value": "#145768"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#C9CF98"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 1,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 0.5,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 4,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#C9CF98",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 3,
				"direction": "top",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "window",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "repulse"
				},
				"onclick": {
					"enable": false,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true,
		"config_demo": {
			"hide_card": false,
			"background_color": "#b61924",
			"background_image": "",
			"background_position": "50% 50%",
			"background_repeat": "no-repeat",
			"background_size": "cover"
		}
	});
    var h = "0";
    var m = "0";
    var s = "0";
    var x = "0";
    var y = "0";
    var z = "0";
    function renew  (data){
        subs2 = data.profile.followeds.toString();
    
        h = subs2.substr(0, 2);
        m = subs2.substr(2, 2);
        s = subs2.substr(4, 2);

    };

    function renew1(data) {
        subs1 = data.data.card.fans.toString();

        x = subs1.substr(0, 2);
        y = subs1.substr(2, 2);
        z = subs1.substr(4, 2);
	};
	

	function getDou(number) {
		if(number < 10) {
			return '0' + number;
		} else {
			return number;
		}
	}


	function huoqu(data) {

		var result =data;
	
	   
	for(var i in result){
	

		
		if (data[i].describe.EnglishName) {
			jrm = data[i].describe.Name.toString();    

		}else{
				jrm = 0;   
			}
		  }


	
		;
	};




	function clearmoji(str) { 
		str = str.replace(/\[[一-龥]\]/g, "");
		str = str.replace(/\[[一-龥][一-龥]\]/g, "");
		str = str.replace(/\[[一-龥][一-龥][一-龥]\]/g, "");
		str = str.replace(/\[[一-龥][一-龥][一-龥][一-龥]\]/g, "");
		//取消字符串中出现的所有逗号 
		return str; 
		}
	
	function jccd(sjc){
		if (sjc.length>40){
			return sjc.substr(0, 35)+"（...）"
		}else{
			return sjc
		}
	}
	function jccd1(sjc){
		if (sjc.length>15){
			return sjc.substr(0, 15)+"..."
		}else{
			return sjc
		}
	}
	function gmjc(sjc){
		if (sjc.length>15){
			return sjc.substr(0, 15)+"..."
		}else{
			return sjc
		}
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
		
			sj0=new Array(result);
			pl0=new Array(result);
			nick0=new Array(result);
			pdz0=new Array(result);
		for(var i in result){
			pl0[i] = clearmoji(data.comments[i].content.toString());
			sj0[i] = data.comments[i].time.toString();
			pdz0[i] = data.comments[i].beReplied.length;
			if(pdz0[i]==1){
				nick0[i] = data.comments[i].user.nickname.toString()+" 回复 "+data.comments[i].beReplied[0].user.nickname+"<br>&nbsp;&nbsp;“"+jccd1(clearmoji(data.comments[i].beReplied[0].content.toString()))+"”";
			}else{
				nick0[i] = data.comments[i].user.nickname.toString();
			}
		
			};
	
			
		};
		function huoqu1(data) {
		
			var result =data.comments;
		
			sj1=new Array(result);
			pl1=new Array(result);
			nick1=new Array(result);
			pdz1=new Array(result);
		for(var i in result){
			pl1[i] = clearmoji(data.comments[i].content.toString());
			sj1[i] = data.comments[i].time.toString();
			pdz1[i] = data.comments[i].beReplied.length;
			if(pdz1[i]==1){
				nick1[i] = data.comments[i].user.nickname.toString()+" 回复 "+data.comments[i].beReplied[0].user.nickname+"<br>&nbsp;&nbsp;“"+jccd1(clearmoji(data.comments[i].beReplied[0].content.toString()))+"”";
			}else{
				nick1[i] = data.comments[i].user.nickname.toString();
			}

			};
	
			
		};
		function huoqu2(data) {
		
			var result =data.comments;
		
			sj2=new Array(result);
			pl2=new Array(result);
			nick2=new Array(result);
			pdz2=new Array(result);
		for(var i in result){
			pl2[i] = clearmoji(data.comments[i].content.toString());
			sj2[i] = data.comments[i].time.toString();
			pdz2[i] = data.comments[i].beReplied.length;
			if(pdz2[i]==1){
				nick2[i] = data.comments[i].user.nickname.toString()+" 回复 "+data.comments[i].beReplied[0].user.nickname+"<br>&nbsp;&nbsp;“"+jccd1(clearmoji(data.comments[i].beReplied[0].content.toString()))+"”";
			}else{
				nick2[i] = data.comments[i].user.nickname.toString();
			}
			};
	
			
		};
		function huoqu3(data) {
		
			var result =data.comments;
		
			sj3=new Array(result);
			pl3=new Array(result);
			nick3=new Array(result);
			pdz3=new Array(result);
		for(var i in result){
			pl3[i] = clearmoji(data.comments[i].content.toString());
			sj3[i] = data.comments[i].time.toString();
			pdz3[i] = data.comments[i].beReplied.length;
			if(pdz3[i]==1){
				nick3[i] = data.comments[i].user.nickname.toString()+" 回复 "+data.comments[i].beReplied[0].user.nickname+"<br>&nbsp;&nbsp;“"+jccd1(clearmoji(data.comments[i].beReplied[0].content.toString()))+"”";
			}else{
				nick3[i] = data.comments[i].user.nickname.toString();
			}
			};
	
			
		};
		function huoqu4(data) {
		
			var result =data.comments;
		
			sj4=new Array(result);
			pl4=new Array(result);
			nick4=new Array(result);
			pdz4=new Array(result);
		for(var i in result){
			pl4[i] = clearmoji(data.comments[i].content.toString());
			sj4[i] = data.comments[i].time.toString();
			pdz4[i] = data.comments[i].beReplied.length;
			if(pdz4[i]==1){
				nick4[i] = data.comments[i].user.nickname.toString()+" 回复 "+data.comments[i].beReplied[0].user.nickname+"<br>&nbsp;&nbsp;“"+jccd1(clearmoji(data.comments[i].beReplied[0].content.toString()))+"”";
			}else{
				nick4[i] = data.comments[i].user.nickname.toString();
			}
			};
	
			
		};
		function huoqu5(data) {
		
			var result =data.comments;
		
			sj5=new Array(result);
			pl5=new Array(result);
			nick5=new Array(result);
			pdz5=new Array(result);
		for(var i in result){
			pl5[i] = clearmoji(data.comments[i].content.toString());
			sj5[i] = data.comments[i].time.toString();
			pdz5[i] = data.comments[i].beReplied.length;
			if(pdz5[i]==1){
				nick5[i] = data.comments[i].user.nickname.toString()+" 回复 "+data.comments[i].beReplied[0].user.nickname+"<br>&nbsp;&nbsp;“"+jccd1(clearmoji(data.comments[i].beReplied[0].content.toString()))+"”";
			}else{
				nick5[i] = data.comments[i].user.nickname.toString();
			}
			};
	
			
		};
		function huoqu6(data) {
		
			var result =data.comments;
		
			sj6=new Array(result);
			pl6=new Array(result);
			nick6=new Array(result);
			pdz6=new Array(result);
		for(var i in result){
			pl6[i] = clearmoji(data.comments[i].content.toString());
			sj6[i] = data.comments[i].time.toString();
			pdz6[i] = data.comments[i].beReplied.length;
			if(pdz6[i]==1){
				nick6[i] = data.comments[i].user.nickname.toString()+" 回复 "+data.comments[i].beReplied[0].user.nickname+"<br>&nbsp;&nbsp;“"+jccd1(clearmoji(data.comments[i].beReplied[0].content.toString()))+"”";
			}else{
				nick6[i] = data.comments[i].user.nickname.toString();
			}
			};
	
			
		};
	
		function qq(data) {
		
			var result =data.hotSongs;
		
			gqid=new Array(result);
			gm=new Array(result);
			gqzjid=new Array(result);
		for(var i in result){
			gqid[i] = data.hotSongs[i].id.toString();
			gm[i] = data.hotSongs[i].name.toString();
			gqzjid[i] = data.hotSongs[i].al.id.toString();
		
			};
		}


		function bb(data) {
		
			var result =data.data.archive.item;
		
			spid=new Array(result);
			spmz=new Array(result);

		for(var i in result){
			spid[i] = data.data.archive.item[i].param.toString();
			spmz[i] = data.data.archive.item[i].title.toString();

		
			};
		}



function bzsj(data){
	return data.substr(0, 1)+data.substr(1, 9);
}


			function zhuanji(data) {
		
	
	
	
				zjid0 = data.hotAlbums[0].id.toString();
				zjid1 = data.hotAlbums[8].id.toString();
	
	
	
		
			
		};





		function huoqub1(data) {
		
			var result =data.data.replies;
		
			spsj1=new Array(result);
			sppl1=new Array(result);
			spnick1=new Array(result);
		for(var i in result){
			sppl1[i] = clearmoji(data.data.replies[i].content.message.toString());
			spsj1[i] = bzsj(data.data.replies[i].ctime.toString());
			spnick1[i] = data.data.replies[i].member.uname.toString();
			};
	
			
		};
		function huoqub2(data) {
		
			var result =data.data.replies;
		
			spsj2=new Array(result);
			sppl2=new Array(result);
			spnick2=new Array(result);
		for(var i in result){
			sppl2[i] = data.data.replies[i].content.message.toString();
			spsj2[i] = bzsj(data.data.replies[i].ctime.toString());
			spnick2[i] = data.data.replies[i].member.uname.toString();
			};
	
			
		};
		function huoqub3(data) {
		
			var result =data.data.replies;
		
			spsj3=new Array(result);
			sppl3=new Array(result);
			spnick3=new Array(result);
		for(var i in result){
			sppl3[i] = data.data.replies[i].content.message.toString();
			spsj3[i] = bzsj(data.data.replies[i].ctime.toString());
			spnick3[i] = data.data.replies[i].member.uname.toString();
			};
	
			
		};
		function huoqub4(data) {
		
			var result =data.data.replies;
		
			spsj4=new Array(result);
			sppl4=new Array(result);
			spnick4=new Array(result);
		for(var i in result){
			sppl4[i] = data.data.replies[i].content.message.toString();
			spsj4[i] = bzsj(data.data.replies[i].ctime.toString());
			spnick4[i] = data.data.replies[i].member.uname.toString();
			};
	
			
		};
		function huoqub5(data) {
		
			var result =data.data.replies;
		
			spsj5=new Array(result);
			sppl5=new Array(result);
			spnick5=new Array(result);
		for(var i in result){
			sppl5[i] = data.data.replies[i].content.message.toString();
			spsj5[i] = bzsj(data.data.replies[i].ctime.toString());
			spnick5[i] = data.data.replies[i].member.uname.toString();
			};
	
			
		};
		function huoqub6(data) {
		
			var result =data.data.replies;
		
			spsj6=new Array(result);
			sppl6=new Array(result);
			spnick6=new Array(result);
		for(var i in result){
			sppl6[i] = data.data.replies[i].content.message.toString();
			spsj6[i] = bzsj(data.data.replies[i].ctime.toString());
			spnick6[i] = data.data.replies[i].member.uname.toString();
			};
	
			
		};
		function huoqub0(data) {
		
			var result =data.data.replies;
		
			spsj0=new Array(result);
			sppl0=new Array(result);
			spnick0=new Array(result);
		for(var i in result){
			sppl0[i] = data.data.replies[i].content.message.toString();
			spsj0[i] = bzsj(data.data.replies[i].ctime.toString());
			spnick0[i] = data.data.replies[i].member.uname.toString();
			};
	
			
		};








	setInterval(function() {
		var d = new Date((new Date).getTime());

		var enable24hr = true;

		var time = d.getTime();
		

		var ampm = enable24hr ? "" : (h < 12 ? " AM" : " PM");

	
        $.ajax({
            cache: false,
            url: "https://api.imjad.cn/bilibili/v2/?get=space&vmid=40999265",
            dataType: "json",
            success: function (data1) {
                renew1(data1);
            }

        });
        $.ajax({
            cache: false,
            url: "http://musicapi.leanapp.cn/user/detail?uid=59244094",
            dataType: "json",
            success: function (data2) {
                renew(data2);
            }

		});
		
		$.ajax({
			cache: false,
			url: "http://121.41.108.198:8080/api.php?date",
			
			dataType: "json",
			success: function (haha) {
				huoqu(haha);
			}
		
		});


		var month = d.getMonth();
		var day = d.getDate();
		var year = d.getFullYear();
		var weekday = d.getDay();

		var months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
		var days = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

		if (jrm != 0){
			var output1 = "今天是"+jrm;
			document.getElementById("time2").style.top = "31%";
			document.getElementById("shishi").style.top = "19%";
			document.getElementById("time").style.opacity = "1"
			if (jrm == "清明节"){
				document.getElementById("time").style.color = "white"
			}else{
				document.getElementById("time").style.color = "rgb(255, 113, 113)"
			}
		}else{
			document.getElementById("time2").style.top = "36%";
			document.getElementById("shishi").style.top = "24%";
			document.getElementById("time").style.opacity = "0"
		}







		

		var output2 = "  "+year+"年"+months[month] + ""+day+"日"+days[weekday]+" ";
        document.getElementById("subs2").innerHTML = h + m + s;
        document.getElementById("subs1").innerHTML = x + y + z;
	
		$('#time').html(output1);
		$('#time2').html(output2);
		//$('#time2b').html(output2);

	






	

			



		
	}, 1000);
	
	setInterval(function(){
		$('.odometer-formatting-mark').empty()

		
		var date = new Date()
		var utc8DiffMinutes = date.getTimezoneOffset() + 480
		date.setMinutes(date.getMinutes() + utc8DiffMinutes)
		date.setSeconds(date.getSeconds() + utc8DiffMinutes)
		
		var timeString = getDou(date.getHours()) .toString();
		var timeString2 =  getDou(date.getMinutes()).toString();
		var timeString3 =  getDou(date.getSeconds()) 
		var timeString9 = timeString +":" + timeString2 +":" +timeString3 

			var oTime = document.getElementById("shishi")
			var oTimeb = document.getElementById("shishib")

			oTime.innerHTML = timeString9;
			//oTimeb.innerHTML = timeString9;
	}
		,10)


	/*	setInterval(function(){
				
	

		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/artists?id=12453823",
			
			dataType: "json",
			success: function (haha0) {
				qq(haha0);
			}
		
		});

		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/artist/album?id=12453823",
			
			dataType: "json",
			success: function (haha1) {
				zhuanji(haha1);
			}
		
		});

		

		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/comment/music?id="+gqid[0],
			
			dataType: "json",
			success: function (haha2) {
				huoqu0(haha2);
			}
		
		});
		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/comment/music?id="+gqid[1],
			
			dataType: "json",
			success: function (haha3) {
				huoqu1(haha3);
			}
		
		});
		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/comment/music?id="+gqid[2],
			
			dataType: "json",
			success: function (haha4) {
				huoqu2(haha4);
			}
		
		});

		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/comment/music?id="+gqid[3],
			
			dataType: "json",
			success: function (haha5) {
				huoqu3(haha5);
			}
		
		});
		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/comment/music?id="+gqid[4],
			
			dataType: "json",
			success: function (haha6) {
				huoqu4(haha6);
			}
		
		});
		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/comment/music?id="+gqid[pipeixinge1(gqzjid,zjid0)],
			
			dataType: "json",
			success: function (haha7) {
				huoqu5(haha7);
			}
		
		});
		$.ajax({
			cache: false,
			url: "http://musicapi.leanapp.cn/comment/music?id="+gqid[pipeixinge2(gqzjid,zjid1)],
			
			dataType: "json",
			success: function (haha8) {
				huoqu6(haha8);
			}
		
		});




		$.ajax({
			cache: false,
			url: "https://api.imjad.cn/bilibili/v2/?get=space&vmid=40999265",
			dataType: "json",
			success: function (haha0) {
				bb(haha0);
			}
		
		});


		$.ajax({
			cache: false,
			url: "https://api.imjad.cn/bilibili/v2/?get=comments&aid="+spid[0],
			dataType: "json",
			success: function (haha2) {
				huoqub0(haha2);
			}
		
		});
		$.ajax({
			cache: false,
			url: "https://api.imjad.cn/bilibili/v2/?get=comments&aid="+spid[1],
			
			dataType: "json",
			success: function (haha3) {
				huoqub1(haha3);
			}
		
		});
		$.ajax({
			cache: false,
			url: "https://api.imjad.cn/bilibili/v2/?get=comments&aid="+spid[2],
			
			dataType: "json",
			success: function (haha4) {
				huoqub2(haha4);
			}
		
		});

		$.ajax({
			cache: false,
			url: "https://api.imjad.cn/bilibili/v2/?get=comments&aid="+spid[3],
			
			dataType: "json",
			success: function (haha5) {
				huoqub3(haha5);
			}
		
		});
		$.ajax({
			cache: false,
			url: "https://api.imjad.cn/bilibili/v2/?get=comments&aid="+spid[4],
			
			dataType: "json",
			success: function (haha6) {
				huoqub4(haha6);
			}
		
		});
		$.ajax({
			cache: false,
			url: "https://api.imjad.cn/bilibili/v2/?get=comments&aid="+spid[5],
			
			dataType: "json",
			success: function (haha7) {
				huoqub5(haha7);
			}
		
		});
		$.ajax({
			cache: false,
			url: "https://api.imjad.cn/bilibili/v2/?get=comments&aid="+spid[6],
			
			dataType: "json",
			success: function (haha8) {
				huoqub6(haha8);
			}
		
		});













			var dgm=[gm[0], gm[1], gm[2], gm[3],gm[4],gm[pipeixinge1(gqzjid,zjid0)],gm[pipeixinge2(gqzjid,zjid1)]];
			var dpl =[pl0, pl1, pl2, pl3,pl4,pl5,pl6];
			var dnick =[nick0,nick1,nick2,nick3,nick4,nick5,nick6];
			var dsj =[sj0, sj1, sj2, sj3,sj4,sj5,sj6];
			var px=[sj0, sj1, sj2, sj3,sj4,sj5,sj6].toString().split(",").sort((a, b) => b-a)

			var dbgm=[spmz[0], spmz[1], spmz[2], spmz[3],spmz[4],spmz[5],spmz[6]];
			var dbpl =[sppl0, sppl1, sppl2, sppl3,sppl4,sppl5,sppl6];
			var dbnick =[spnick0,spnick1,spnick2,spnick3,spnick4,spnick5,spnick6];
			var dbsj =[spsj0,spsj1, spsj2, spsj3,spsj4,spsj5,spsj6];
			var bpx=[spsj0,spsj1, spsj2, spsj3,spsj4,spsj5,spsj6].toString().split(",").sort((a, b) => b-a)
	



			Date.prototype.Format = function (fmt) {
				var o = {
						"M+": this.getMonth() + 1, // 月份
						"d+": this.getDate(), // 日
						"h+": this.getHours(), // 小时
						"m+": this.getMinutes(), // 分
						"s+": this.getSeconds(), // 秒
						"q+": Math.floor((this.getMonth() + 3) / 3), // 季度
						"S": this.getMilliseconds() // 毫秒
				};
				if (/(y+)/.test(fmt))
					fmt = fmt.replace(RegExp.$1, (this.getFullYear() + ""));
				for (var k in o)
					if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
				return fmt;
			}
			 //"2018-11-15 17:40:00"












			document.getElementById("pl01").innerHTML = "“"+jccd(dpl[getArrayIndex(dsj,px[0]).substr(0, 1)][getArrayIndex(dsj,px[0]).substr(1, 2)])+"”";
			document.getElementById("pl02").innerHTML = "“"+jccd(dpl[getArrayIndex(dsj,px[1]).substr(0, 1)][getArrayIndex(dsj,px[1]).substr(1, 2)])+"”";
			document.getElementById("pl03").innerHTML = "“"+jccd(dpl[getArrayIndex(dsj,px[2]).substr(0, 1)][getArrayIndex(dsj,px[2]).substr(1, 2)])+"”";
			document.getElementById("pl04").innerHTML = "“"+jccd(dpl[getArrayIndex(dsj,px[3]).substr(0, 1)][getArrayIndex(dsj,px[3]).substr(1, 2)])+"”";
			document.getElementById("pl05").innerHTML = "“"+jccd(dpl[getArrayIndex(dsj,px[4]).substr(0, 1)][getArrayIndex(dsj,px[4]).substr(1, 2)])+"”";
			document.getElementById("pl06").innerHTML = "“"+jccd(dpl[getArrayIndex(dsj,px[5]).substr(0, 1)][getArrayIndex(dsj,px[5]).substr(1, 2)])+"”";
	
			var xianshishijian1 = parseInt(dsj[getArrayIndex(dsj,px[0]).substr(0, 1)][getArrayIndex(dsj,px[0]).substr(1, 2)].toString())
			var xianshishijian2 = parseInt(dsj[getArrayIndex(dsj,px[1]).substr(0, 1)][getArrayIndex(dsj,px[1]).substr(1, 2)].toString())
			var xianshishijian3 = parseInt(dsj[getArrayIndex(dsj,px[2]).substr(0, 1)][getArrayIndex(dsj,px[2]).substr(1, 2)].toString())
			var xianshishijian4 = parseInt(dsj[getArrayIndex(dsj,px[3]).substr(0, 1)][getArrayIndex(dsj,px[3]).substr(1, 2)].toString())
			var xianshishijian5 = parseInt(dsj[getArrayIndex(dsj,px[4]).substr(0, 1)][getArrayIndex(dsj,px[4]).substr(1, 2)].toString())
			var xianshishijian6 = parseInt(dsj[getArrayIndex(dsj,px[5]).substr(0, 1)][getArrayIndex(dsj,px[5]).substr(1, 2)].toString())
	
			document.getElementById("id01").innerHTML = "来自  "+dnick[getArrayIndex(dsj,px[0]).substr(0, 1)][getArrayIndex(dsj,px[0]).substr(1, 2)]+"<br>于 "+new Date(xianshishijian1).Format('MM月dd日hh:mm')+" 在音乐《"+gmjc(dgm[getArrayIndex(dsj,px[0]).substr(0, 1)])+"》下的评论";
			document.getElementById("id02").innerHTML = "来自  "+dnick[getArrayIndex(dsj,px[1]).substr(0, 1)][getArrayIndex(dsj,px[1]).substr(1, 2)]+"<br>于 "+new Date(xianshishijian2).Format('MM月dd日hh:mm')+" 在音乐《"+gmjc(dgm[getArrayIndex(dsj,px[1]).substr(0, 1)])+"》下的评论";
			document.getElementById("id03").innerHTML = "来自  "+dnick[getArrayIndex(dsj,px[2]).substr(0, 1)][getArrayIndex(dsj,px[2]).substr(1, 2)]+"<br>于 "+new Date(xianshishijian3).Format('MM月dd日hh:mm')+" 在音乐《"+gmjc(dgm[getArrayIndex(dsj,px[2]).substr(0, 1)])+"》下的评论";
			document.getElementById("id04").innerHTML = "来自  "+dnick[getArrayIndex(dsj,px[3]).substr(0, 1)][getArrayIndex(dsj,px[3]).substr(1, 2)]+"<br>于 "+new Date(xianshishijian4).Format('MM月dd日hh:mm')+" 在音乐《"+gmjc(dgm[getArrayIndex(dsj,px[3]).substr(0, 1)])+"》下的评论";
			document.getElementById("id05").innerHTML = "来自  "+dnick[getArrayIndex(dsj,px[4]).substr(0, 1)][getArrayIndex(dsj,px[4]).substr(1, 2)]+"<br>于 "+new Date(xianshishijian5).Format('MM月dd日hh:mm')+" 在音乐《"+gmjc(dgm[getArrayIndex(dsj,px[4]).substr(0, 1)])+"》下的评论";
			document.getElementById("id06").innerHTML = "来自  "+dnick[getArrayIndex(dsj,px[5]).substr(0, 1)][getArrayIndex(dsj,px[5]).substr(1, 2)]+"<br>于 "+new Date(xianshishijian6).Format('MM月dd日hh:mm')+" 在音乐《"+gmjc(dgm[getArrayIndex(dsj,px[5]).substr(0, 1)])+"》下的评论";


			document.getElementById("bl01").innerHTML = "“"+jccd(dbpl[getArrayIndex(dbsj,bpx[0]).substr(0, 1)][getArrayIndex(dbsj,bpx[0]).substr(1, 2)])+"”";
			document.getElementById("bl02").innerHTML = "“"+jccd(dbpl[getArrayIndex(dbsj,bpx[1]).substr(0, 1)][getArrayIndex(dbsj,bpx[1]).substr(1, 2)])+"”";
			document.getElementById("bl03").innerHTML = "“"+jccd(dbpl[getArrayIndex(dbsj,bpx[2]).substr(0, 1)][getArrayIndex(dbsj,bpx[2]).substr(1, 2)])+"”";
			document.getElementById("bl04").innerHTML = "“"+jccd(dbpl[getArrayIndex(dbsj,bpx[3]).substr(0, 1)][getArrayIndex(dbsj,bpx[3]).substr(1, 2)])+"”";
			document.getElementById("bl05").innerHTML = "“"+jccd(dbpl[getArrayIndex(dbsj,bpx[4]).substr(0, 1)][getArrayIndex(dbsj,bpx[4]).substr(1, 2)])+"”";
			document.getElementById("bl06").innerHTML = "“"+jccd(dbpl[getArrayIndex(dbsj,bpx[5]).substr(0, 1)][getArrayIndex(dbsj,bpx[5]).substr(1, 2)])+"”";

			var bxianshishijian1 = parseInt(dbsj[getArrayIndex(dbsj,bpx[0]).substr(0, 1)][getArrayIndex(dbsj,bpx[0]).substr(1, 2)].toString()+"000")
			var bxianshishijian2 = parseInt(dbsj[getArrayIndex(dbsj,bpx[1]).substr(0, 1)][getArrayIndex(dbsj,bpx[1]).substr(1, 2)].toString()+"000")
			var bxianshishijian3 = parseInt(dbsj[getArrayIndex(dbsj,bpx[2]).substr(0, 1)][getArrayIndex(dbsj,bpx[2]).substr(1, 2)].toString()+"000")
			var bxianshishijian4 = parseInt(dbsj[getArrayIndex(dbsj,bpx[3]).substr(0, 1)][getArrayIndex(dbsj,bpx[3]).substr(1, 2)].toString()+"000")
			var bxianshishijian5 = parseInt(dbsj[getArrayIndex(dbsj,bpx[4]).substr(0, 1)][getArrayIndex(dbsj,bpx[4]).substr(1, 2)].toString()+"000")
			var bxianshishijian6 = parseInt(dbsj[getArrayIndex(dbsj,bpx[5]).substr(0, 1)][getArrayIndex(dbsj,bpx[5]).substr(1, 2)].toString()+"000")

			document.getElementById("bid01").innerHTML = "来自  "+dbnick[getArrayIndex(dbsj,bpx[0]).substr(0, 1)][getArrayIndex(dbsj,bpx[0]).substr(1, 2)]+"<br>于 "+new Date(bxianshishijian1).Format('MM月dd日hh:mm')+" 在视频《"+gmjc(dbgm[getArrayIndex(dbsj,bpx[0]).substr(0, 1)])+"》下的评论";
			document.getElementById("bid02").innerHTML = "来自  "+dbnick[getArrayIndex(dbsj,bpx[1]).substr(0, 1)][getArrayIndex(dbsj,bpx[1]).substr(1, 2)]+"<br>于 "+new Date(bxianshishijian2).Format('MM月dd日hh:mm')+" 在视频《"+gmjc(dbgm[getArrayIndex(dbsj,bpx[1]).substr(0, 1)])+"》下的评论";
			document.getElementById("bid03").innerHTML = "来自  "+dbnick[getArrayIndex(dbsj,bpx[2]).substr(0, 1)][getArrayIndex(dbsj,bpx[2]).substr(1, 2)]+"<br>于 "+new Date(bxianshishijian3).Format('MM月dd日hh:mm')+" 在视频《"+gmjc(dbgm[getArrayIndex(dbsj,bpx[2]).substr(0, 1)])+"》下的评论";
			document.getElementById("bid04").innerHTML = "来自  "+dbnick[getArrayIndex(dbsj,bpx[3]).substr(0, 1)][getArrayIndex(dbsj,bpx[3]).substr(1, 2)]+"<br>于 "+new Date(bxianshishijian4).Format('MM月dd日hh:mm')+" 在视频《"+gmjc(dbgm[getArrayIndex(dbsj,bpx[3]).substr(0, 1)])+"》下的评论";
			document.getElementById("bid05").innerHTML = "来自  "+dbnick[getArrayIndex(dbsj,bpx[4]).substr(0, 1)][getArrayIndex(dbsj,bpx[4]).substr(1, 2)]+"<br>于 "+new Date(bxianshishijian5).Format('MM月dd日hh:mm')+" 在视频《"+gmjc(dbgm[getArrayIndex(dbsj,bpx[4]).substr(0, 1)])+"》下的评论";
			document.getElementById("bid06").innerHTML = "来自  "+dbnick[getArrayIndex(dbsj,bpx[5]).substr(0, 1)][getArrayIndex(dbsj,bpx[5]).substr(1, 2)]+"<br>于 "+new Date(bxianshishijian6).Format('MM月dd日hh:mm')+" 在视频《"+gmjc(dbgm[getArrayIndex(dbsj,bpx[5]).substr(0, 1)])+"》下的评论";		
	
	
		}
			,3000)*/



});
