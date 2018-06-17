function generate_paragraph(){
			const name = firstUpperCase(answers[0]);
			const cls = answers[1];
			const fav_sub = firstUpperCase(answers[2]);
			const place = firstUpperCase(answers[3]);
			const best_friend = firstUpperCase(answers[4]);
			const hobby = answers[5];
			const aim = answers[6];
			
			
			const paragraph = `My name is ${name}. 
							I live at ${place} which is a beautiful place.
							I love and respect my parents very much.
							I read in class ${cls}.
							My favourite subject is ${fav_sub}.
							I love all my classmates. 
							${best_friend} is my best friend. 
							My hobby is ${hobby}. I spend a lot of time on it.
							I want to be a ${aim}. 
							India is my country. I love my country. 
							I want to be a good citizen of my country.`;
			e("paragraph").innerHTML = paragraph;			
		}

/*&copy Made by Soumen Chakraborty - Strictly for Educational and Non-Commercial purpose only.*/