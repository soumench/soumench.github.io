const r1 = new Audio("audio/r1.oga");
const r2 = new Audio("audio/r2.oga");
const r3 = new Audio("audio/r3.oga");
const r4 = new Audio("audio/r4.oga");
const r5 = new Audio("audio/r5.oga");
const r6 = new Audio("audio/r6.oga");
function correct_audio(){
	const cur_aud_list = [r1,r2,r3,r4,r5,r6];
	let cur_a = cur_aud_list[Math.floor(Math.random()*cur_aud_list.length)];
	cur_a.play();
}

const w1 = new Audio("audio/w1.oga");
const w2 = new Audio("audio/w2.oga");
const w3 = new Audio("audio/w3.oga");
const w4 = new Audio("audio/w4.oga");
const w5 = new Audio("audio/w5.oga");
const w6 = new Audio("audio/w6.oga");
function wrong_audio(){
	const wr_aud_list = [w1,w2,w3,w4,w5,w6];
	let wro_a = wr_aud_list[Math.floor(Math.random()*wr_aud_list.length)];
	wro_a.play();
}
const nxt_audio = new Audio("audio/ting-128kbps.ogg");

/*Made by Soumen Chakraborty 2018*/