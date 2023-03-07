var pageName = "Zen Anime";

var sidebar = {};
var navToggle ={};
var closeButton ={};
var body = {};

/////Home variables for banner/////
var bannerImg_folder = "assets/images/banners/img"; //folder of banner images
var imageCountPerSegment = 1; //Image count for one segment
var banner_images_count = 3; //total images count for banner

/////Home variables for Anime List/////
var animeListImg_folder = "assets/images/anime_list/"; //folder of banner images
var imageCountPerRowAL = 4; //Image count for one segment
//var banner_images_countAL = 10; //total images count for banner
var anime_list_details_from_file = [];
var anime_list_links_from_file = [];

/////Anime Details variables/////
var currentAnimeListItemDetails = {};
var currentAnimeListItemLinkDetails = [];
var topViewList_from_file = [];
var topViewCountHtmlString = "";

//Get anime list and details from dummy file db.txt
$.ajax({
	url: 'assets/images/anime_list/anime_list_db.txt',
	type: 'GET',
	success: function(data) {
		anime_list_details_from_file = data.split('\n');
	}
});

///Get anime list links from json file///
$.getJSON("assets/images/anime_list/anime_links.json", function(data) {
	anime_list_links_from_file = data;
	// console.log(data["demon_slayer"][0]["episodeNo"]);
});

//Get Top View Count Anime List//
$.get('assets/topViewCount/topList.txt', function(data) {
	var fileContent = data.replace(/\r/g, '');
	topViewList_from_file = fileContent.split('\n');
	console.log(topViewList_from_file);

	///Processing Details for Top View Counts Anime and to table///
	$.each(topViewList_from_file, function(index, value){
		console.log(value);
		var topView_listItem = value.split(';;;;');
		var topView_imgName = topView_listItem[3];
		var topView_Name = topView_listItem[0];
		var topView_count = topView_listItem[1];
		var topView_rating = topView_listItem[2];

		topViewCountHtmlString += '<tr><td><img src="' +  animeListImg_folder + topView_imgName + '.webp" alt="..."></td><td>' + topView_Name + '</td><td>' + topView_count + ' Million Views</td><td>' + topView_rating + ' Rating</td></tr>';
	});
});


$(document).ready(function() {
	console.log('Main loaded');

	$(window).resize(function() {
		if ($(window).width() <= 768) {
		  // Apply styles for screens with max width of 768px
		  // For example:
			$('.logo-title-main-container').addClass('.mobile-nav-toggler');
			$('.logo-title-main-container a').removeAttr('href');

			sidebar = $('.side-bar');
			console.log(sidebar);
			navToggle = $('.logo-title-main-container');
			console.log(navToggle);
			closeButton = $('.close-button');
			body = $('body');

			navToggle.on('click', () => {
				console.log(closeButton);
				const visibility = sidebar.attr('data-visible');
				if (visibility === "false") {
					sidebar.attr('data-visible', true);
					$('.logo-title-main-container > a > img').addClass('rotate-logo');
				} else if (visibility === "true") {
					sidebar.attr('data-visible', false);
					$('.logo-title-main-container > a > img').removeClass('rotate-logo');
				}
		
				const sidebaropen = sidebar.attr('data-visible');
		
				if (sidebaropen === "true") {
					body.addClass('noscroll');
				} else {
					body.removeClass('noscroll');
				}
			});

			closeButton.on('click', () => {
				const visibility = sidebar.attr('data-visible');
				if (visibility === "false") {
					sidebar.attr('data-visible', true);
					$('.logo-title-main-container > a > img').addClass('rotate-logo');
				} else if (visibility === "true") {
					sidebar.attr('data-visible', false);
					$('.logo-title-main-container > a > img').removeClass('rotate-logo');
				}
		
				const sidebaropen = sidebar.attr('data-visible');
		
				if (sidebaropen === "true") {
					body.addClass('noscroll');
				} else {
					body.removeClass('noscroll');
				}
		
			});


		} else {
		  // Apply styles for screens with width greater than 768px
		  // For example:
		  $('.logo-title-main-container').removeClass('.mobile-nav-toggler');
		}
	}).resize();


	var currentPage = "home.html";

	// Load the initial content
	$('#content').load('home.html');

	// Handle clicks on navigation links
	$('.nav-links').on('click', 'a', function(event) {
		event.preventDefault();
		var page = $(this).attr('href');
		currentPage = page;
		$('#content').load(page, function(){

			if (currentPage == "home.html"){
				//TODO
				pageName = "Zen Anime";
				
			}

			if(currentPage == "about.html"){
				//TODO
				pageName = "About Us";
			}
			
			if(currentPage == "login.html"){
				//TODO

				pageName = "Log In";
			}

			if(currentPage == "logout.html"){
				//TODO

				pageName = "Log Out";
				console.log(pageName);
			}

			document.title = pageName;
		});	
	});

	$('.side-nav-links').on('click', 'a', function(event) {
		event.preventDefault();
		var page = $(this).attr('href');
		currentPage = page;
		$('#content').load(page, function(){
			
			if (currentPage == "home.html"){
				//TODO
				pageName = "Zen Anime";
				
			}

			if(currentPage == "about.html"){
				//TODO
				pageName = "About Us";
			}
			
			if(currentPage == "login.html"){
				//TODO

				pageName = "Log In";
			}

			if(currentPage == "logout.html"){
				//TODO

				pageName = "Log Out";
				console.log(pageName);
			}

			document.title = pageName;
		});
	});
});