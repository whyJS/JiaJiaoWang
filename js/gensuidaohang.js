$(document).scroll(function() {
								console.log($(document).scrollTop())
								if(window.innerWidth > 768) {
									if($(document).scrollTop() >= 300) {

										$(".dd").css({
											"display": "block"
										})
									} else {
										$(".dd").css({
											"display": "none"
										})
									}
								} else {
									$(".dd").css({
										"display": "none"
									})
								}

							});


							window.onresize = function() {
								console.log(window.innerWidth);
								if(window.innerWidth >= 768) {
									if(window.innerWidth >= 768 && window.innerWidth <= 997 && $(document).scrollTop() >= 300) {
										$(".dd").css({
											"display": "block"
										})
										$(".dd table").css({
											"display": "none"
										})
									}
									if(window.innerWidth >= 997 && $(document).scrollTop() >= 300) {
										$(".dd").css({
											"display": "block"
										})
										$(".dd table").css({
											"display": "block"
										})
									}


								} else {
									$(".dd").css({
										"display": "none"
									})
								}
							}