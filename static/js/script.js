$(document).ready(function () {
	$('#show').click(function () {
		$('.err').fadeIn();
		setTimeout(function () {
			$('.err').fadeOut();
		}, 5000);
	});
	// select spicefic step
	// $('#s1').click(function () {
	// 	hi('step');
	// 	$('.step_one').fadeIn();
	// });

	// $('#s2').click(function () {
	// 	hi('step');
	// 	$('.step_two').fadeIn();
	// });

	// $('#s3').click(function () {
	// 	hi('step');
	// 	$('.step_three').fadeIn();
	// });

	// To the next step
	$('#to_step_two').click(function () {
		$('.step_one').hide();
		$('.step_two').fadeIn()
	});
	$('#to_step_three').click(function () {
		$('.step_two').hide();
		$('.step_three').fadeIn()
	});

	// Back to the previous step

	$('#back_to_two').click(function () {
		$('.step_three').hide();
		$('.step_two').fadeIn()
	});
	$('#back_to_one').click(function () {
		$('.step_two').hide();
		$('.step_one').fadeIn()
	});
// ////////////////////////////////////

	// To the next step
	$('#o_to_step_two').click(function () {
		$('#o_step_one').hide();
		$('#o_step_two').fadeIn()
	});
	$('#o_to_step_three').click(function () {
		$('#o_step_two').hide();
		$('#o_step_three').fadeIn()
	});

	// Back to the previous step

	$('#o_back_to_step_two').click(function () {
		$('#o_step_three').hide();
		$('#o_step_two').fadeIn()
	});
	$('#o_back_to_step_one').click(function () {
		$('#o_step_two').hide();
		$('#o_step_one').fadeIn()
	});

});

function hi(step){
	if (document.querySelector('.' + step).style.display == "none") {
		document.querySelector('.' + step).style.display = "none";
	}
	else{
		alert('true')
		document.querySelector('.' + step).style.display = "none";
	}
}