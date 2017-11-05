$( document ).ready(function() {


	var kraan_haak_met_doosje_m1 = $('.kraan_haak_met_doosje_m1');
	var doos = $('.doos_m1');
	var pipe = $('.pipe');
	var doos_v2 = $('.doos_m1_v2');
	var pipeMachine = $('.create_add_pipe_m2');
	var pipeMachine2 = $('.create_add_pipe2_m2');
	var logo = $('.logo_m2');
	var screen = $('.schreen_deel1_m2');
	var addWord = $('.addWord_m2');
	var doosVanDeKraan = $('.doos_van_deKraan');
	var preview = $('.preview_tekst');

	var blue = $('.blue');
	var green = $('.green');
	var yellow = $('.yellow');

	var man = $('.man_m2');
	var wenkbrouwen = $('.man_wenkbrouw_m2');

	var checkOne_Circle = $('.check_one_wrapper .circle');
	var checkOne_Line_x = $('.check_one_wrapper .line_x');
	var checkOne_Line_y = $('.check_one_wrapper .line_y');
	var checkOne_CircleBig = $('.check_one_wrapper .circle_big');
	var checkOne_CircleBigFont = $('.check_one_wrapper .circle_big .fa');
	var checkOne_Text = $('.check_one_wrapper .text');

	var checkTwo_Circle = $('.check_two_wrapper .circle');
	var checkTwo_Line_x = $('.check_two_wrapper .line_x');
	var checkTwo_Line_y = $('.check_two_wrapper .line_y');
	var checkTwo_CircleBig = $('.check_two_wrapper .circle_big');
	var checkTwo_CircleBigFont = $('.check_two_wrapper .circle_big .fa');
	var checkTwo_Text = $('.check_two_wrapper .text');

	var checkThree_Circle = $('.check_three_wrapper .circle');
	var checkThree_Line_x = $('.check_three_wrapper .line_x');
	var checkThree_Line_y = $('.check_three_wrapper .line_y');
	var checkThree_CircleBig = $('.check_three_wrapper .circle_big');
	var checkThree_CircleBigFont = $('.check_three_wrapper .circle_big .fa');
	var checkThree_Text = $('.check_three_wrapper .text');

	var tl_phase_one = new TimelineLite();
	var tl_phase_two = new TimelineLite();
	var tl_phase_three = new TimelineLite();


	function phase_one() {
		console.log('phase 1 start');
		window.tl = tl_phase_one;
		tl_phase_one.to(kraan_haak_met_doosje_m1, 1, {
				opacity: 1
			})
			.to(kraan_haak_met_doosje_m1, 5, {
				x: 369,
				ease: Power1.easeOut,
			}, 0.5)
			.to(doosVanDeKraan, 5, {
				x: 369,
				ease: Power1.easeOut,
			}, 0.5)
			.to(doosVanDeKraan, 1, {
				opacity: 0,
				onComplete: phase_two
			});
	}

	phase_one();

	function phase_two() {
		console.log('phase 2 start')

		tl_phase_one.to(doos, 2, {
				x: 135,
				ease: Power1.easeOut,
			})
			.to(doos, 1, {
				x: 195,
				y: 70,
				rotation: 60,
				ease: Power1.easeNone
			})
			.to(doos, 0.2, {
				opacity: 0,
				ease: Power1.easeNone
			})
			.to(pipe, 1, {
				x: 10,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			})
			.to(pipe, 1, {
				y: 10,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false}),
				onComplete: phase_three
			});

	}

	function phase_three() {
		console.log('phase 3 start')

		tl_phase_three.to(doos_v2, 1, {
				opacity : 1,
				ease: Power1.easeOut,
			})
			.add('checks')
			.fromTo(doos_v2, 1, {
				rotation : 60,
				y: 0
			},{
				rotation : 0,
				y : 80,
				ease: Bounce.easeOut
			})
			.to(doos_v2, 2, {
				x : 100,
				ease : Power1.easeOut
			})

			/*check one*/
			.to(checkOne_Circle, 0.5, {
				height: 10,
				width: 10,
				ease: Power1.easeOut
			}, 'checks+=0.1')
			.to(checkOne_Line_x, 0.1, {
				opacity: 1,
				ease: Power1.easeOut
			}, 'checks+=0.2')
			.to(checkOne_Line_x, 0.5, {
				width: 40,
				height: 1,
				ease: Power1.easeOut
			}, 'checks+=0.2')
			.to(checkOne_Line_y, 0.1, {
				opacity: 1,
				ease: Power1.easeOut
			}, 'checks+=0.2')
			.to(checkOne_Line_y, 0.5, {
				height: 120,
				ease: Power1.easeOut
			}, 'checks+=0.3')
			.to(checkOne_CircleBig, 0.5, {
				height: 20,
   				width: 20,
				ease: Power1.easeOut
			}, 'checks+=0.4')
			.to(checkOne_CircleBigFont, 0.5, {
				fontSize: 14,
				ease: Power1.easeOut
			}, 'checks+=0.4')
			.fromTo(checkOne_Text, 0.5, {
				opacity : 0,
				x: -20,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			},{
				opacity : 1,
				x : 0,
				ease: Power1.easeOut
			},'checks+=0.5')

			/*pipe on machine move*/
			.to(pipeMachine, 1, {
				x: 7,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			})
			.add('logo')
			.add('checks_two')
			.to(pipeMachine, 1, {
				y: 4,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			})
			.to(pipeMachine2, 1, {
				x: 5,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			})
			.to(pipeMachine2, 1, {
				y: 7,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			})

			/*check two*/
			.to(checkTwo_Circle, 0.5, {
				height: 10,
				width: 10,
				ease: Power1.easeOut
			}, 'checks_two+=0.1')
			.to(checkTwo_Line_x, 0.1, {
				opacity: 1,
				ease: Power1.easeOut
			}, 'checks_two+=0.2')
			.to(checkTwo_Line_x, 0.5, {
				width: 40,
				height: 1,
				ease: Power1.easeOut
			}, 'checks_two+=0.2')
			.to(checkTwo_Line_y, 0.1, {
				opacity: 1,
				ease: Power1.easeOut
			}, 'checks_two+=0.2')
			.to(checkTwo_Line_y, 0.5, {
				height: 120,
				ease: Power1.easeOut
			}, 'checks_two+=0.3')
			.to(checkTwo_CircleBig, 0.5, {
				height: 20,
   				width: 20,
				ease: Power1.easeOut
			}, 'checks_two+=0.4')
			.to(checkTwo_CircleBigFont, 0.5, {
				fontSize: 14,
				ease: Power1.easeOut
			}, 'checks+=0.4')
			.fromTo(checkTwo_Text, 0.5, {
				opacity : 0,
				x: -20,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			},{
				opacity : 1,
				x : 0,
				ease: Power1.easeOut
			},'checks_two+=0.5')

			/*Logo*/
			.to(logo, 0.5, {
				opacity : 0,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			}, 'logo+=0.5')
			.to(logo, 0.6, {
				opacity : 1,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			}, 'logo+=1')
			.to(logo, 0.8, {
				opacity : 0,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			}, 'logo+=2')
			.to(logo, 0.5, {
				opacity : 1,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			}, 'logo+=3')

			/*bar(yellow, green, blue) on machine*/
			.fromTo(blue, 0.5, {
				opacity : 0,
				width : 0,
			},
			{
				opacity : 1,
				width : 40,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			}, 'intro+=0.5')
			.fromTo(green, 0.5, {
				opacity : 0,
				width : 0,
			},
			{
				opacity : 1,
				width : 46,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			}, 'intro+=0.1')
			.fromTo(yellow, 0.5, {
				opacity : 0,
				width : 0,
			},
			{
				opacity : 1,
				width : 33,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			}, 'intro+=1.5')

			/*screen flikkering*/
			.fromTo(screen, 0.5, {
				opacity : 0,
				x: -20,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			},{
				opacity : 1,
				x : 0,
				ease: Bounce.easeOut
			})
			.add('checks_three')

			/*preview*/
			.to(preview, 2, {
				opacity: 1,
				scale: 1.1,
				ease: Sine.easeOut
			})

			/*check three*/
			.to(checkThree_Circle, 0.5, {
				height: 10,
				width: 10,
				ease: Power1.easeOut
			}, 'checks_three+=0.1')
			.to(checkThree_Line_x, 0.1, {
				opacity: 1,
				ease: Power1.easeOut
			}, 'checks_three+=0.2')
			.to(checkThree_Line_x, 0.5, {
				width: 40,
				height: 1,
				ease: Power1.easeOut
			}, 'checks_three+=0.2')
			.to(checkThree_Line_y, 0.1, {
				opacity: 1,
				ease: Power1.easeOut
			}, 'checks_three+=0.2')
			.to(checkThree_Line_y, 0.5, {
				height: 120,
				ease: Power1.easeOut
			}, 'checks_three+=0.3')
			.to(checkThree_CircleBig, 0.5, {
				height: 20,
   				width: 20,
				ease: Power1.easeOut
			}, 'checks_three+=0.4')
			.to(checkThree_CircleBigFont, 0.5, {
				fontSize: 14,
				ease: Power1.easeOut
			}, 'checks+=0.4')
			.fromTo(checkThree_Text, 0.5, {
				opacity : 0,
				x: -20,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			},{
				opacity : 1,
				x : 0,
				ease: Power1.easeOut
			},'checks_three+=0.5')

			/*addWord fall*/
			.fromTo(addWord, 1, {
				opacity : 0,
				y: 0,
				scale : 0,
				ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false})
			},{
				opacity : 1,
				scale : 1,
				y: 74,
				ease: Bounce.easeOut
			},"+=0.1")

			.to(addWord, 3, {
				x: 195,
				ease: Power0.easeNone
			})
			.to(addWord, .5, {
				x: 260,
				y: 100,
				rotation: 60,
				ease: Power1.easeNone
			})

			/*man visible*/
			.to(man, 1, {
				opacity: 1
			})

			.to(wenkbrouwen, 0.3, {
				y: -3
			})
			.to(wenkbrouwen, 0.3, {
				y: 0
			})
			.to(wenkbrouwen, 0.3, {
				y: -3
			})
			.to(wenkbrouwen, 0.3, {
				y: 0
			})
			
	}


/*		var scene = new ScrollMagic.Scene({
			triggerElement: '.section_three .wrapper_content .list_item' // point of execution
		});
		var listStagger = $('.section_three .wrapper_content .list_item');
		TweenMax.staggerFrom(listStagger, 2, {
			scale:0.9, 
			opacity:0, 
			delay:0.5, 
			ease:Elastic.easeOut, 
			force3D:true
		}, 0.2);*/
var ctrl = new ScrollMagic.Controller();

// create scene
var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger"
    })
    .on('start', function () {
        console.log("passed trigger");
        var listStagger = $('.section_three .wrapper_content .list_item');
		TweenMax
		.staggerFrom(listStagger, 2, {
			display: 'none',
			scale:0.9, 
			opacity:0,
			display: 'block',
			delay:0.5, 
			ease:Elastic.easeOut, 
			force3D:true
		}, 0.2);
    })
    .addTo(ctrl)
    .reverse(false);




});

 /*================================= oudside document ready (initMap) ===============================*/
