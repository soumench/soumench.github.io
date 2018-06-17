const images = ['img/1-min.jpg',
				'img/2-min.jpg',
				'img/3-min.jpg',
				'img/4-min.jpg',
				'img/5-min.jpg',
				'img/6-min.jpg',
				'img/7-min.jpg',
				'img/8-min.jpg',
				'img/9-min.jpg',
				'img/10-min.jpg'
			   ];



function changeIMG(){
			e("thepic").src= images[Math.floor(Math.random()*images.length)];
			/*if(imgcount < images.length){
				e("thepic").src=images[imgcount++];
				if(imgcount===images.length){imgcount = 0;}
			}*/
		}