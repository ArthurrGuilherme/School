var index;
var n = 0;
var n2 = 1;
var bx;

$(document).ready(function () {
	$('.arrow').on('click', newNextSlide);
	$('.go').on('click', goSlide);
	$('.btn-feedback').on('click', showFeedback);
	$('.close').on('click', closeFeedback);

	$('.btn-feedbackP4').on('click', showFeedbackP4);
	$('.closeP4').on('click', closeFeedbackP4);

	$('#rep_au').on('click', playAudio);
	$('#pau_au').on('click', pauseAudio);

	$('.btn_points').on('click', totPoint);
	$('#reini0').on('click', totPointReini);

	$('.btn_pointsP4').on('click', totPointP4);
	$('#btn_ret_P4_Reini').on('click', totPointP4Reini);
	
	$('#eje1-p2').hide();

	$('#sig_pre_p_5_4').on('click', arrastrarMostReini);
	$('#sig_pre_p_5_4_reini').on('click', arrastrarReini);

	$('.b-n-r').on('click', showFeedback);
	$('.o-a').on('click', catchLabel);
	$('#n-r').on('click', reset);

	bx = document.querySelectorAll('.b-a');
	
	$('.mar_close').click(function () {
		$('#b-n-r').hide();
		$('#n-r').show();
	});

	$('.m-a-1').hide();
	$('.m-a-1').click(function () {
		// alert(n2);
		af = $('#'+n2).attr('data-a');
		// alert(af);
		if (af) {
			$(this).show();
		} else {
			$(this).hide();
		}
		if (n2 == 3) {
			$(this).hide();			
		}
		n2++;
		$('.m-a-2').show();
	});

	$('.m-a-2').click(function () {
		n2--;
		$('.m-a-1').show();
	});

});

function newNextSlide() {
	indexSection = $(this).attr('data-section');
	direction = $(this).attr('data-direction');
	section = document.querySelector('#'+indexSection+' div[data-content="1"]');
	content = section.querySelectorAll('#'+indexSection+' div[data-content="1"] > .slide');
	limit = $('#'+indexSection+' div[data-content="1"]').attr('data-limit');
	console.log(content.length);
	for (var i = 0; i < content.length; i++) {
		if ($(content[i]).is(':visible')) {
			if (direction == 'next') {
				index = parseInt($(content[i+1]).attr('data-position'));
				console.log(index);
				$('#'+indexSection+' div[data-content="1"] .arrow').show();
				if (index == content.length || index == limit) {
					$(this).hide();
				}
			} else if (direction == 'previous') {
				index = parseInt($(content[i-1]).attr('data-position'));
				console.log(index);
				$('#'+indexSection+' div[data-content="1"] .arrow').show();
				if (index == 1) {
					$(this).hide();
				}
			}
		}
	}
	for (var i = 1; i < 3; i++) {
		v =	$('#'+indexSection+' .content'+i).attr('data-content');
		if (v != 0) {
			for (var i2 = 1; i2 <= content.length; i2++) {
				$('#'+indexSection+' .slide'+i2).hide();
			}
			$('#'+indexSection+' .slide'+index).fadeIn();
			break
		}
	}
}


function goSlide() {
	n = $(this).attr('data-index');
	indexSection = $(this).attr('data-section');
	section = document.querySelector('#'+indexSection+' div[data-content="1"]');
	content = section.querySelectorAll('#'+indexSection+' div[data-content="1"] > .slide');
	g = $(this).attr('data-go');
	// on = $('#'+indexSection+' div[data-content="1"] .slide').is(':visible');
	console.log(content.length);
	if (g == 0) {
		$('#'+indexSection+' div[data-content="1"] .arrow').css({'pointer-events': 'none', 'z-index': '-1'}); 
	} else if (g == 1) {
		$('#'+indexSection+' div[data-content="1"] .arrow').css({'pointer-events': 'auto', 'z-index': 0});
	}
	for (var i = 1; i < 3; i++) {
		v =	$('#'+indexSection+' .content'+i).attr('data-content');
		if (v != 0) {
			for (var i2 = 1; i2 <= content.length; i2++) {
				$('#'+indexSection+' .slide'+i2).hide();
			}
			$('#'+indexSection+' .slide'+n).fadeIn();
			break
		}
	}
}

function showFeedback() {
	indexSection = $(this).attr('data-section');
	$('#' + indexSection + ' div[data-content="1"] .arrow').css('pointer-events', 'none');
	indexFeedback = $(this).attr('data-feedback');
	$('#' + indexSection + ' div[data-content="1"] #feedback' + indexFeedback).show();
}

function closeFeedback() {
	indexSection = $(this).attr('data-section');
	$('#' + indexSection + ' div[data-content="1"] .arrow').css('pointer-events', 'auto');
	indexFeedback = $(this).attr('data-feedback');
	$('#' + indexSection + ' div[data-content="1"] #feedback' + indexFeedback).hide();
}

// __________________________________________________ ED

function catchLabel() {
	$(this).hide();
	console.log(bx);
	c = $(this).attr('data-con');
	l = $(this).attr('data-label');
	b = $(this).attr('data-bg');
	cl = $(this).attr('data-cl');
	$(bx[n]).append(l).css({'background-color': b, 'color': cl }).attr('data-a', n2);
	$('div[data-con="' + n + '"]').css('pointer-events', 'none');
	n++;
	if (n == 4) {
		$('#b-n-r').show();
	}
	if (c != 3) {
		$('.m-a-1').show();
	}
}

function reset() {
	for (var i = 0; i < 4; i++) {
		$('div[data-con="' + i + '"]').show().css('pointer-events', 'auto');
		$(bx[i]).text(' ').css('background-color', 'transparent');
	}
	$('#n-r').hide();
	// $('.m-a-1').show();
	$('.m-a-2').hide();
	n = 0;
	n2 = 1;
	for (var i = 1; i < 5; i++) {
		$('#'+i).removeAttr('data-a');
	}
}

// __________________________________________________ EJERCICIO PARTE 2
$('#retro0').hide();
function onlyCheck(num_preg, num_check){
	for (var i = 1; i <= 18; i++) {
		if (num_preg == i) {
			if (num_check == 1) {$('#check'+i+'_1').prop('checked', true);$('#check'+i+'_2').prop('checked', false);$('#check'+i+'_3').prop('checked', false);$('#check'+i+'_4').prop('checked', false)}
			else if (num_check == 2) {$('#check'+i+'_2').prop('checked', true);$('#check'+i+'_1').prop('checked', false);$('#check'+i+'_3').prop('checked', false);$('#check'+i+'_4').prop('checked', false)}
			else if (num_check == 3) {$('#check'+i+'_3').prop('checked', true);$('#check'+i+'_2').prop('checked', false);$('#check'+i+'_1').prop('checked', false);$('#check'+i+'_4').prop('checked', false)}
			else if (num_check == 4) {$('#check'+i+'_1').prop('checked', false);$('#check'+i+'_2').prop('checked', false);$('#check'+i+'_3').prop('checked', false);$('#check'+i+'_4').prop('checked', true)}

		}
	}
	if ($('#check1_1').is(':checked') || $('#check1_2').is(':checked') || $('#check1_3').is(':checked') || $('#check1_4').is(':checked'))  { $('.cl_id_2_1').show(); }
	if ($('#check2_1').is(':checked') || $('#check2_2').is(':checked') || $('#check2_3').is(':checked') || $('#check2_4').is(':checked'))  { $('.cl_id_2_2').show(); }
	if ($('#check3_1').is(':checked') || $('#check3_2').is(':checked') || $('#check3_3').is(':checked') || $('#check3_4').is(':checked'))  { $('.cl_id_2_3').show(); }
	if ($('#check4_1').is(':checked') || $('#check4_2').is(':checked') || $('#check4_3').is(':checked') || $('#check4_4').is(':checked'))  { $('.cl_id_2_4').show(); }
	if ($('#check5_1').is(':checked') || $('#check5_2').is(':checked') || $('#check5_3').is(':checked') || $('#check5_4').is(':checked'))  { $('.cl_id_2_5').show(); }
	if ($('#check6_1').is(':checked') || $('#check6_2').is(':checked') || $('#check6_3').is(':checked') || $('#check6_4').is(':checked'))  { $('.cl_id_2_6').show(); }
	if ($('#check7_1').is(':checked') || $('#check7_2').is(':checked') || $('#check7_3').is(':checked') || $('#check7_4').is(':checked'))  { $('.cl_id_2_7').show(); }
	if ($('#check8_1').is(':checked') || $('#check8_2').is(':checked') || $('#check8_3').is(':checked') || $('#check8_4').is(':checked'))  { $('.cl_id_2_8').show(); }
	if ($('#check9_1').is(':checked') || $('#check9_2').is(':checked') || $('#check9_3').is(':checked') || $('#check9_4').is(':checked'))  { $('.cl_id_2_9').show(); }
	if ($('#check10_1').is(':checked') || $('#check10_2').is(':checked') || $('#check10_3').is(':checked')|| $('#check10_4').is(':checked')) { $('.cl_id_2_10').show(); }
	if ($('#check11_1').is(':checked') || $('#check11_2').is(':checked') || $('#check11_3').is(':checked')|| $('#check11_4').is(':checked')) { $('.cl_id_2_11').show(); }
	if ($('#check12_1').is(':checked') || $('#check12_2').is(':checked') || $('#check12_3').is(':checked')|| $('#check12_4').is(':checked')) { $('.cl_id_2_12').show(); }
	if ($('#check13_1').is(':checked') || $('#check13_2').is(':checked') || $('#check13_3').is(':checked')|| $('#check13_4').is(':checked')) { $('.cl_id_2_13').show(); }
	if ($('#check14_1').is(':checked') || $('#check14_2').is(':checked') || $('#check14_3').is(':checked')|| $('#check14_4').is(':checked')) { $('.cl_id_2_14').show(); }
	if ($('#check15_1').is(':checked') || $('#check15_2').is(':checked') || $('#check15_3').is(':checked')|| $('#check15_4').is(':checked')) { $('.cl_id_2_15').show(); }
	if ($('#check16_1').is(':checked') || $('#check16_2').is(':checked') || $('#check16_3').is(':checked')|| $('#check16_4').is(':checked')) { $('.cl_id_2_16').show(); }
	if ($('#check17_1').is(':checked') || $('#check17_2').is(':checked') || $('#check17_3').is(':checked')|| $('#check17_4').is(':checked')) { $('.cl_id_2_17').show(); }
	if ($('#check18_1').is(':checked') || $('#check18_2').is(':checked') || $('#check18_3').is(':checked')|| $('#check18_4').is(':checked')) { $('#retro0').show(); }

}
function totPoint(){
	var pointsP2 = 0;
	console.log(pointsP2)
	for (var ii = 1; ii <= 18; ii++) {
		if ($('#check'+ii+'_1').is(':checked')) {pointsP2 += 4;}
		if ($('#check'+ii+'_2').is(':checked')) {pointsP2 += 3;}
		if ($('#check'+ii+'_3').is(':checked')) {pointsP2 += 2;}
		if ($('#check'+ii+'_4').is(':checked')) {pointsP2 += 1;}
		// alert(pointsP2+' - #check'+ii+'_3');
	}
	if (pointsP2 >= 18 && pointsP2 <= 28) {
		$( "#retro4" ).trigger("click");
		$( "#retro0" ).hide();
		$( "#reini0" ).show();
	}
	else if (pointsP2 >= 23 && pointsP2 <= 43) {
		$( "#retro3" ).trigger("click");
		$( "#retro0" ).hide();
		$( "#reini0" ).show();
	}
	else if (pointsP2 >= 44 && pointsP2 <= 58) {
		$( "#retro2" ).trigger("click");
		$( "#retro0" ).hide();
		$( "#reini0" ).show();
		console.log(pointsP2)
	}
	else if (pointsP2 >= 59 ) {
		$( "#retro1" ).trigger("click");
		$( "#retro0" ).hide();
		$( "#reini0" ).show();
		console.log(pointsP2)
	}
	else  {
		$( "#retro5	" ).trigger("click");
		$( "#retro0" ).hide();
		$( "#reini0" ).show();
		console.log(pointsP2)
	}
	$(".puntos").text(pointsP2);


}

function totPointReini(){
	for (var i = 1; i <= 18; i++) {
		for (var ii = 1; ii <= 3; ii++) {
			$('#check'+i+'_'+ii).prop('checked', false);
		}
	}
	$( "#retro0" ).hide();
	$( "#reini0" ).hide();
	// alert('Funciona');
}
// __________________________________________________ EJERCICIO PARTE 2

// __________________________________________________ EJERCICIO PARTE 4
function showFeedbackP4() {
	indexSection = $(this).attr('data-section');
	$('#' + indexSection + ' div[data-content="1"] .arrow').css('pointer-events', 'none');
	indexFeedback = $(this).attr('data-feedback');
	$('#' + indexSection + ' div[data-content="1"] #feedbackP4' + indexFeedback).show();
}

function closeFeedbackP4() {
	indexSection = $(this).attr('data-section');
	$('#' + indexSection + ' div[data-content="1"] .arrow').css('pointer-events', 'auto');
	indexFeedback = $(this).attr('data-feedback');
	$('#' + indexSection + ' div[data-content="1"] #feedbackP4' + indexFeedback).hide();
}

// var check_compl1 = '0'; var check_compl2 = '0'; var check_compl3 = '0'; var check_compl4 = '0'; var check_compl5 = '0'; var check_compl6 = '0'; var check_compl7 = '0'; var check_compl8 = '0'; var check_compl9 = '0'; var check_compl10 = '0'; var check_compl11 = '0';
function onlyCheckP4(num_preg, num_check){

	for (var i = 1; i <= 11; i++) {
		if (num_preg == i) {
			if (num_check == 1) { $('#checkp4_'+i+'_1').prop('checked', true); $('#checkp4_'+i+'_2').prop('checked', false); $('#checkp4_'+i+'_3').prop('checked', false); $('#checkp4_'+i+'_4').prop('checked', false); }
			else if (num_check == 2) { $('#checkp4_'+i+'_2').prop('checked', true); $('#checkp4_'+i+'_1').prop('checked', false); $('#checkp4_'+i+'_3').prop('checked', false); $('#checkp4_'+i+'_4').prop('checked', false); }
			else if (num_check == 3) { $('#checkp4_'+i+'_3').prop('checked', true); $('#checkp4_'+i+'_2').prop('checked', false); $('#checkp4_'+i+'_1').prop('checked', false); $('#checkp4_'+i+'_4').prop('checked', false); }
			else if (num_check == 4) { $('#checkp4_'+i+'_4').prop('checked', true); $('#checkp4_'+i+'_1').prop('checked', false); $('#checkp4_'+i+'_2').prop('checked', false); $('#checkp4_'+i+'_3').prop('checked', false); }
		}
	}

	var pointsP4 = 0;
	for (var ii = 1; ii <= 11; ii++) {
		if ($('#checkp4_'+ii+'_1').is(':checked')) {pointsP4 += 1;}
		if ($('#checkp4_'+ii+'_2').is(':checked')) {pointsP4 += 2;}
		if ($('#checkp4_'+ii+'_3').is(':checked')) {pointsP4 += 3;}
		if ($('#checkp4_'+ii+'_3').is(':checked')) {pointsP4 += 3;}
	}
	// alert(pointsP4);
	// if (pointsP4 >= 11) {
	// 	$('#btn_ret_P4').show();
	// }

	var preg4_1 = 0; var preg4_2 = 0; var preg4_3 = 0; var preg4_4 = 0; var preg4_5 = 0; var preg4_6 = 0; var preg4_7 = 0; var preg4_8 = 0; var preg4_9 = 0; var preg4_10 = 0; var preg4_11 = 0;
	
	if ($('#checkp4_1_1').is(':checked') || $('#checkp4_1_2').is(':checked') || $('#checkp4_1_3').is(':checked') || $('#checkp4_1_4').is(':checked')) { preg4_1 = 1; }
	if ($('#checkp4_2_1').is(':checked') || $('#checkp4_2_2').is(':checked') || $('#checkp4_2_3').is(':checked') || $('#checkp4_2_4').is(':checked')) { preg4_2 = 1; }
	if ($('#checkp4_3_1').is(':checked') || $('#checkp4_3_2').is(':checked') || $('#checkp4_3_3').is(':checked') || $('#checkp4_3_4').is(':checked')) { preg4_3 = 1; }
	if (preg4_1 == 1 && preg4_2 == 1 && preg4_3 == 1) { $('.av_4_1').show(); }

	if ($('#checkp4_4_1').is(':checked') || $('#checkp4_4_2').is(':checked') || $('#checkp4_4_3').is(':checked') || $('#checkp4_4_4').is(':checked')) { preg4_4 = 1; }
	if ($('#checkp4_5_1').is(':checked') || $('#checkp4_5_2').is(':checked') || $('#checkp4_5_3').is(':checked') || $('#checkp4_5_4').is(':checked')) { preg4_5 = 1; }
	if ($('#checkp4_6_1').is(':checked') || $('#checkp4_6_2').is(':checked') || $('#checkp4_6_3').is(':checked') || $('#checkp4_6_4').is(':checked')) { preg4_6 = 1; }
	if (preg4_4 == 1 && preg4_5 == 1 && preg4_6 == 1) { $('.av_4_2').show(); }

	if ($('#checkp4_7_1').is(':checked') || $('#checkp4_7_2').is(':checked') || $('#checkp4_7_3').is(':checked') || $('#checkp4_7_4').is(':checked')) { preg4_7 = 1; }
	if ($('#checkp4_8_1').is(':checked') || $('#checkp4_8_2').is(':checked') || $('#checkp4_8_3').is(':checked') || $('#checkp4_8_4').is(':checked')) { preg4_8 = 1; }
	if ($('#checkp4_9_1').is(':checked') || $('#checkp4_9_2').is(':checked') || $('#checkp4_9_3').is(':checked') || $('#checkp4_9_4').is(':checked')) { preg4_9 = 1; }
	if (preg4_7 == 1 && preg4_8 == 1 && preg4_9 == 1) { $('.av_4_3').show(); }

	if ($('#checkp4_10_1').is(':checked') || $('#checkp4_10_2').is(':checked') || $('#checkp4_10_3').is(':checked') || $('#checkp4_10_4').is(':checked')) { preg4_10 = 1; }
	if ($('#checkp4_11_1').is(':checked') || $('#checkp4_11_2').is(':checked') || $('#checkp4_11_3').is(':checked') || $('#checkp4_11_4').is(':checked')) { preg4_11 = 1; }
	if (preg4_10 == 1 && preg4_11 == 1) { $('#btn_ret_P4').show(); }



}

// _______________ AÚN NO SE SABE SI ESTA FUNCIÓN SE USARÁ
function totPointP4(){
	// var pointsP4 = 0;
	// for (var ii = 1; ii <= 11; ii++) {
	// 	if ($('#checkp4_'+ii+'_1').is(':checked')) {pointsP4 += 1;}
	// 	if ($('#checkp4_'+ii+'_2').is(':checked')) {pointsP4 += 2;}
	// 	if ($('#checkp4_'+ii+'_3').is(':checked')) {pointsP4 += 3;}
	// 	if ($('#checkp4_'+ii+'_3').is(':checked')) {pointsP4 += 3;}
	// }
	// if (pointsP4 == 1) {$( "#retroP41" ).trigger("click");}
	// else if (pointsP4 == 2) {$( "#retroP42" ).trigger("click");}
	// else if (pointsP4 == 3) {$( "#retroP43" ).trigger("click");}
	// else if (pointsP4 == 4) {$( "#retroP44" ).trigger("click");}
	// else if (pointsP4 == 5) {$( "#retroP45" ).trigger("click");}
	// else if (pointsP4 == 6) {$( "#retroP46" ).trigger("click");}
	$( "#retroP41" ).trigger("click");
	$( "#btn_ret_P4" ).hide();
	$( "#btn_ret_P4_Reini" ).show();
}
function totPointP4Reini(){
	for (var i = 1; i <= 18; i++) {
		for (var ii = 1; ii <= 4; ii++) {
			$('#checkp4_'+i+'_'+ii).prop('checked', false);
		}
	}
	$( "#btn_ret_P4" ).hide();
	$( "#btn_ret_P4_Reini" ).hide();
	$( ".guard" ).hide();
	
}
// __________________________________________________ EJERCICIO PARTE 4

// __________________________________________________ EJERCICIO PARTE 4 AUDIO
function playAudio() { $('#rep_au').hide();$('#pau_au').show();$('#au_pr_c')[0].play(); }
function pauseAudio() { $('#rep_au').show();$('#pau_au').hide();$('#au_pr_c')[0].pause(); }
// __________________________________________________ EJERCICIO PARTE 4 AUDIO


// __________________________________________________ DRAG AND DROP
/**
* Función que se ejecuta al arrastrar el elemento. 
**/
function start(e) {
    e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
    e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
    e.target.style.opacity = '0.4'; 
}

/**
* Función que se ejecuta se termina de arrastrar el elemento. 
**/
function end(e){
    e.target.style.opacity = ''; // Restaura la opacidad del elemento           
    e.dataTransfer.clearData("Data");           
}

/**
* Función que se ejecuta cuando un elemento arrastrable entra en el elemento desde del que se llama. 
**/
function enter(e) {
    return true;
}

/**
* Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama. 
* Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.
**/
function over(e) {
    if ((e.target.className == "btn_drag") || (e.target.id == "uno") || (e.target.id == "dos") || (e.target.id == "tres") || (e.target.id == "cuatro"))
        return false;
    else
    return true;
}
    
/**
* Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama. 
**/
function drop(e){
    e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
    var elementoArrastrado = e.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(elementoArrastrado)); // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion
    var id_preg_arr = elementoArrastrado.slice(0, -2);
    // alert(id_preg_arr);
    comprobarPuzzle(id_preg_arr,elementoArrastrado);
}

function comprobarPuzzle(idPregArr,elemArras){

	if (idPregArr == 'pieza1') { $("#uno").html($('#pieza1_1')); $("#sig_pre_p_5_1").trigger("click"); }
    if (idPregArr == 'pieza2') { $("#dos").html($('#pieza2_1')); $("#sig_pre_p_5_2").trigger("click"); }
	if (idPregArr == 'pieza3') { $("#tres").html($('#pieza3_1')); $("#sig_pre_p_5_3").trigger("click"); }
	// if (idPregArr == 'pieza4') { $("#cuatro").html($('#pieza4_1')); $("#sig_pre_p_5_4").trigger("click"); }
	if (idPregArr == 'pieza4') { 
		$("#cuatro").html($('#'+elemArras).css("width", "80%"));
		$("#sig_pre_p_5_4").show(); 
	}

	// if (idPregArr == 'pieza1') {
	// 	if(document.getElementById('pieza1_1').parentNode.id=='uno')
	//     {
	//         alert('Felicidades, has hecho el puzzle. 1');
	//         $("#uno").html($('#pieza1_1'));
	//         $("#sig_pre_p_5_1").trigger("click");
	//     }else{
	//     	$("#uno").html('Respuesta incorrecta');
	//     }
	// }

 //    if (idPregArr == 'pieza2') {
 //    	if(document.getElementById('pieza2_2').parentNode.id=='dos')
	//     {
	//         alert('Felicidades, has hecho el puzzle. 2');
	//         $("#dos").html($('#pieza2_1'));
	//         $("#sig_pre_p_5_2").trigger("click");
	//     }else{
	//     	$("#dos").html('Respuesta incorrecta');
	//     }
	// }
}

function arrastrarMostReini(){
	$('#sig_pre_p_5_4').hide();
	$('#sig_pre_p_5_4_reini').show();
}
function arrastrarReini(){
	$('#calsitu_1').html('<div class="drop_cal"><div class="text3 btn_drag" style="padding: 10px; border: 2px solid #152543; border-radius: 10px; background-color: transparent; display: inline-block;  text-align: center; "id="uno" ondragenter="return enter(event)" ondragover="return over(event)" ondrop="return drop(event)">Coloca aquí la respuesta</div></div><br/><div class="drag_cal"><div id="pieza1_1" class="text3 btn_drag" style="padding: 10px; border-radius: 10px; background-color: #C8D437; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder autoritario</div><div id="pieza1_2" class="text3 btn_drag" style="color: #FFF; padding: 10px; border-radius: 10px; background-color: #2C6C92; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder democrático</div><div id="pieza1_3" class="text3 btn_drag" style="color: #FFF; padding: 10px; border-radius: 10px; background-color: #122442; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder transaccional</div><div id="pieza1_4" class="text3 btn_drag" style="padding: 10px; border-radius: 10px; background-color: #F0A837; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder transformacional</div></div>');
	$('#calsitu_2').html('<div class="drop_cal"><div class="text3 btn_drag" style="padding: 10px; border: 2px solid #152543; border-radius: 10px; background-color: transparent; display: inline-block;  text-align: center; "id="dos" ondragenter="return enter(event)" ondragover="return over(event)" ondrop="return drop(event)">Coloca aquí la respuesta</div></div><br/><div class="drag_cal"><div id="pieza2_1" class="text3 btn_drag" style="padding: 10px; border-radius: 10px; background-color: #C8D437; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder autoritario</div><div id="pieza2_2" class="text3 btn_drag" style="color: #FFF; padding: 10px; border-radius: 10px; background-color: #2C6C92; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder democrático</div><div id="pieza2_3" class="text3 btn_drag" style="color: #FFF; padding: 10px; border-radius: 10px; background-color: #122442; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder transaccional</div><div id="pieza2_4" class="text3 btn_drag" style="padding: 10px; border-radius: 10px; background-color: #F0A837; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder transformacional</div></div>');
	$('#calsitu_3').html('<div class="drop_cal"><div class="text3 btn_drag" style="padding: 10px; border: 2px solid #152543; border-radius: 10px; background-color: transparent; display: inline-block; text-align: center; " id="tres" ondragenter="return enter(event)" ondragover="return over(event)" ondrop="return drop(event)">Coloca aquí la respuesta</div></div><br/><div class="drag_cal"><div id="pieza3_1" class="text3 btn_drag" style="padding: 10px; border-radius: 10px; background-color: #C8D437; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder autoritario</div><div id="pieza3_2" class="text3 btn_drag" style="color: #FFF; padding: 10px; border-radius: 10px; background-color: #2C6C92; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder democrático</div><div id="pieza3_3" class="text3 btn_drag" style="color: #FFF; padding: 10px; border-radius: 10px; background-color: #122442; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder transaccional</div><div id="pieza3_4" class="text3 btn_drag" style="padding: 10px; border-radius: 10px; background-color: #F0A837; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder transformacional</div></div>');
	$('#calsitu_4').html('<div class="drop_cal"><div class="text3 btn_drag" style="padding: 10px; border: 2px solid #152543; border-radius: 10px; background-color: transparent; display: inline-block; text-align: center; "id="cuatro" ondragenter="return enter(event)" ondragover="return over(event)" ondrop="return drop(event)">Coloca aquí la respuesta</div> <!-- width: 50%; --></div><br/><div class="drag_cal"><div id="pieza4_1" class="text3 btn_drag" style="padding: 10px; border-radius: 10px; background-color: #C8D437; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder autoritario</div> <!-- width: 50%; --><div id="pieza4_2" class="text3 btn_drag" style="color: #FFF; padding: 10px; border-radius: 10px; background-color: #2C6C92; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder democrático</div> <!-- width: 50%; --><div id="pieza4_3" class="text3 btn_drag" style="color: #FFF; padding: 10px; border-radius: 10px; background-color: #122442; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder transaccional</div> <!-- width: 50%; --><div id="pieza4_4" class="text3 btn_drag" style="padding: 10px; border-radius: 10px; background-color: #F0A837; display: inline-block; margin: 1em 4%; text-align: center;" draggable="true" ondragstart="start(event)" ondragend="end(event)">Líder transformacional</div> <!-- width: 50%; --></div>');
	$('#sig_pre_p_5_4').hide();
	$('#sig_pre_p_5_4_reini').hide();
}




// $('#sig_pre_p_5_4').on('click', arrastrarMostReini);
// 	$('#sig_pre_p_5_4_reini').on('click', arrastrarReini);
// __________________________________________________ DRAG AND DROP



function abrirSec12(){
	$('#s13').show();
}


