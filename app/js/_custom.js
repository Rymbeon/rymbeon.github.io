
document.addEventListener("DOMContentLoaded", function () {
	$('body').on('click', '.menu-mobile-triger', function (event) {

		if ($(this).hasClass('open')) {
			$('nav').hide('fast');
			$(this).removeClass('open');
			$('header').removeClass('color');
			$('body').css('overflow', 'auto');
		} else {
			$('nav').show('fast');
			$(this).addClass('open');
			$('header').addClass('color')
			$('body').css('overflow', 'hidden ');
		}
	});
	$('input[name="tel"]').inputmask({ "mask": "+380(99)999 99 99" });


	var leftArrow = '<button type="button" class="slick-prev"><svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">	<path d="M13.0798 21.3839C14.0099 21.9419 14.9995 22.4925 15.4831 23.5789C16.0858 23.7574 16.3685 24.3229 16.8075 24.7024C17.3135 25.1339 17.7004 25.6994 18.117 26.2277C18.1691 26.2946 18.1022 26.503 18.0352 26.5922C17.9161 26.7485 17.8045 26.7931 18.0798 26.9419C18.4147 27.128 18.742 27.4033 18.9578 27.7232C19.4489 28.4449 19.4042 28.5044 18.4965 28.6161C18.37 28.6309 18.251 28.7053 18.1319 28.75C18.251 28.8021 18.37 28.8393 18.4816 28.8988C18.556 28.936 18.6453 28.9806 18.6974 29.0476C18.8016 29.189 18.9801 29.375 18.9504 29.4866C18.8908 29.6875 18.69 29.9925 18.5486 29.9925C17.8864 29.9851 17.2614 30.1339 16.6289 29.5461C15.1706 28.2143 13.5188 27.0908 12.0307 25.7812C10.8775 24.7693 9.69442 23.7723 8.4965 22.8125C7.00096 21.622 5.55007 20.3646 3.95037 19.2857C2.86406 18.5491 1.95632 17.5372 0.981619 16.6369C0.907214 16.5625 0.877452 16.4434 0.825369 16.3467C0.959297 16.3244 1.08579 16.3095 1.21971 16.2723C1.3462 16.2425 1.46525 16.1905 1.5843 16.1458C1.47269 16.0937 1.33876 16.0714 1.25692 15.9896C1.00394 15.7366 0.84769 15.4166 0.468226 15.2455C0.103643 15.0744 0.0292378 14.6652 0.341738 14.3155C0.53519 14.0997 0.564952 13.8616 0.319416 13.75C-0.290703 13.4672 0.207809 13.0803 0.21525 12.7604C0.230131 12.4256 0.364059 12.0833 0.483107 11.7559C0.594714 11.4434 0.780726 11.1979 1.17507 11.2202C1.5471 11.2351 1.91912 11.2202 2.29858 11.2277C2.84174 11.2351 3.16912 10.93 3.59323 10.6027C5.00692 9.50147 6.25692 8.20683 7.73013 7.16516C9.05454 6.22766 10.2301 5.07439 11.4801 4.02528C11.8224 3.74254 12.2019 3.50445 12.5516 3.22915C13.6825 2.35117 14.8432 1.50296 15.9221 0.55802C16.5025 0.052067 17.1051 -0.0446585 17.8045 0.0148642C18.0352 0.0297453 18.2733 0.00742362 18.5039 0.0297453C18.5411 0.0371859 18.623 0.230637 18.5932 0.260399C18.4444 0.438971 18.2882 0.617542 18.1022 0.758911C17.8343 0.959805 17.931 1.09373 18.1319 1.26486C18.2733 1.38391 18.3775 1.60712 18.5337 1.64433C19.0025 1.76337 19.2257 1.89731 18.7941 2.34373C18.7197 2.41814 18.6974 2.61159 18.7272 2.7232C18.7644 2.86457 18.8685 3.05802 18.9876 3.08778C19.2033 3.14731 19.4563 3.08034 19.6795 3.1101C19.9251 3.1473 20.312 2.92409 20.3789 3.311C20.431 3.64582 20.5501 4.06248 20.1557 4.33034C19.8283 4.55355 19.501 4.79165 19.181 5.0223C19.1141 5.07439 19.062 5.14879 19.0099 5.21576C19.0843 5.2604 19.1587 5.32736 19.2405 5.3348C19.4266 5.34968 19.6126 5.3348 19.7986 5.34225C20.2227 5.35713 20.0739 5.50594 19.8953 5.71427C19.6423 6.01933 19.4861 6.44344 19.1885 6.66665C18.0203 7.52975 16.8001 8.33332 15.6022 9.15921C14.4414 9.95534 13.2658 10.744 12.1051 11.5402C11.867 11.7039 11.6513 11.8973 11.428 12.4256C11.428 12.5893 11.4355 12.4033 11.4206 12.2172C11.4132 12.1652 11.3239 12.0759 11.2867 12.0833C11.0486 12.128 10.5352 12.9092 10.5947 13.1771C10.6245 13.2961 10.803 13.4449 10.9295 13.4598C11.123 13.4896 11.4206 13.5714 11.4206 13.1919C11.4206 13.0506 11.4206 12.9092 11.4206 12.4256C12.9831 11.9643 14.501 12.5744 16.0635 12.3586C16.9712 12.8125 17.9682 12.4628 18.8834 12.6711C20.1557 12.9613 21.4578 12.7232 22.6855 12.9687C23.876 13.2068 25.0664 13.0059 26.2123 13.2366C27.3953 13.4672 28.5783 13.3482 29.7391 13.5268C30.498 13.6384 31.2867 13.6161 32.001 13.8095C32.7673 14.0104 33.5486 13.8988 34.2703 14.0774C35.2153 14.3155 36.1974 14.3229 37.1275 14.6131C37.3284 14.6726 37.5516 14.7917 37.6855 14.9479C38.0873 15.439 38.7197 15.7217 38.9281 16.3914C38.9653 16.503 39.3224 16.4955 39.5159 16.5699C40.0441 16.7783 40.126 17.1131 39.7019 17.5669C39.367 17.9315 39.5084 17.9687 39.8879 17.9836C39.94 17.9836 40.0516 18.2738 40.0144 18.3184C39.7242 18.6533 39.5233 19.0699 38.9653 19.0922C36.8075 19.1592 34.6572 19.3229 32.4995 19.3527C29.3745 19.3973 26.242 19.3899 23.117 19.3527C20.3566 19.3229 17.6036 18.9211 14.8283 19.0774C13.7718 18.6905 12.6706 18.8169 11.5843 18.7872C11.3834 18.7797 11.2048 18.5863 10.9965 18.5342C10.8849 18.5044 10.6989 18.5565 10.6394 18.6384C10.5798 18.7128 10.5947 18.936 10.6617 18.9955C10.9221 19.2336 11.2346 19.4196 11.5099 19.6428C11.8894 19.9553 12.2688 20.2158 12.306 20.8259C12.3358 21.3095 12.5962 20.6919 12.7078 20.7887C12.8417 20.9375 12.9459 21.1458 13.0798 21.3839C13.0798 21.4062 13.0798 21.3616 13.0798 21.3244C13.0054 21.3467 12.9236 21.3616 12.8641 21.4062C12.8492 21.4211 12.8938 21.5178 12.9087 21.5774C12.9682 21.5327 13.0278 21.4881 13.0798 21.3839ZM26.8373 17.9613C28.7495 17.9613 30.6617 17.9613 32.5739 17.9613C32.7599 17.9613 32.9459 17.9613 33.1319 17.9539C33.1691 17.9539 33.2286 17.8794 33.2286 17.8646C33.1989 17.7976 33.1468 17.6934 33.1022 17.6934C32.7748 17.6786 32.4474 17.7009 32.12 17.686C29.315 17.5372 26.5025 17.939 23.6974 17.4405C22.5218 17.2321 21.2792 17.3661 20.0664 17.4181C18.8313 17.4702 17.626 17.2321 16.4057 17.1428C14.3522 16.994 12.2837 16.9419 10.2301 16.8452C10.0962 16.8378 9.89531 16.875 9.83579 16.8006C9.50097 16.3988 9.05454 16.622 8.66763 16.5774C8.56346 16.5625 8.44442 16.6666 8.33281 16.7187C8.45186 16.7634 8.5709 16.8155 8.69739 16.8452C9.06198 16.9345 9.14382 17.7306 9.6721 17.2991C10.2599 16.8229 10.3417 17.4925 10.6542 17.6339C10.6989 17.6562 10.8179 17.5893 10.8403 17.5372C11.1007 16.9271 11.495 17.4107 11.815 17.4181C13.0873 17.4479 14.3522 17.5297 15.6245 17.6339C18.6974 17.9018 21.7926 17.8794 24.8804 17.9687C25.5352 17.9762 26.1825 17.9613 26.8373 17.9613ZM38.184 17.619C38.1617 17.6637 38.1245 17.7604 38.0798 17.8646C38.1542 17.8943 38.2435 17.9687 38.3105 17.9539C38.3998 17.9315 38.4742 17.8422 38.556 17.7753C38.4742 17.7381 38.3998 17.7083 38.184 17.619ZM10.2376 18.6979C10.2078 18.6384 10.1706 18.5789 10.1408 18.5193C10.1111 18.5491 10.0516 18.5863 10.0516 18.6086C10.0664 18.6756 10.1111 18.7351 10.1408 18.7946C10.1706 18.7649 10.2004 18.7351 10.2376 18.6979Z" fill="white"/></svg></button>';
	var rightArrow = '<button type="button" class="slick-next"><svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.9202 8.61609C25.9901 8.05805 25.0005 7.50746 24.5169 6.42115C23.9142 6.24258 23.6315 5.6771 23.1925 5.29764C22.6865 4.86609 22.2996 4.30061 21.883 3.77234C21.8309 3.70537 21.8978 3.49704 21.9648 3.40775C22.0839 3.2515 22.1955 3.20686 21.9202 3.05805C21.5853 2.87204 21.258 2.59674 21.0422 2.2768C20.5511 1.55508 20.5958 1.49555 21.5035 1.38395C21.63 1.36906 21.749 1.29466 21.8681 1.25002C21.749 1.19793 21.63 1.16073 21.5184 1.10121C21.444 1.064 21.3547 1.01936 21.3026 0.952398C21.1984 0.811029 21.0199 0.625017 21.0496 0.51341C21.1092 0.312517 21.31 0.00745717 21.4514 0.00745717C22.1136 0.0148976 22.7386 -0.133912 23.3711 0.453886C24.8294 1.78573 26.4812 2.90924 27.9693 4.21877C29.1225 5.23067 30.3056 6.2277 31.5035 7.18752C32.999 8.37799 34.4499 9.63543 36.0496 10.7143C37.1359 11.4509 38.0437 12.4628 39.0184 13.3631C39.0928 13.4375 39.1225 13.5566 39.1746 13.6533C39.0407 13.6756 38.9142 13.6905 38.7803 13.7277C38.6538 13.7575 38.5348 13.8095 38.4157 13.8542C38.5273 13.9063 38.6612 13.9286 38.7431 14.0104C38.9961 14.2634 39.1523 14.5834 39.5318 14.7545C39.8964 14.9256 39.9708 15.3348 39.6583 15.6845C39.4648 15.9003 39.435 16.1384 39.6806 16.25C40.2907 16.5328 39.7922 16.9197 39.7848 17.2396C39.7699 17.5744 39.6359 17.9167 39.5169 18.2441C39.4053 18.5566 39.2193 18.8021 38.8249 18.7798C38.4529 18.7649 38.0809 18.7798 37.7014 18.7723C37.1583 18.7649 36.8309 19.07 36.4068 19.3973C34.9931 20.4985 33.7431 21.7932 32.2699 22.8348C30.9455 23.7723 29.7699 24.9256 28.5199 25.9747C28.1776 26.2575 27.7981 26.4956 27.4484 26.7708C26.3175 27.6488 25.1568 28.497 24.0779 29.442C23.4975 29.9479 22.8949 30.0447 22.1955 29.9851C21.9648 29.9703 21.7267 29.9926 21.4961 29.9703C21.4589 29.9628 21.377 29.7694 21.4068 29.7396C21.5556 29.561 21.7118 29.3825 21.8978 29.2411C22.1657 29.0402 22.069 28.9063 21.8681 28.7351C21.7267 28.6161 21.6225 28.3929 21.4663 28.3557C20.9975 28.2366 20.7743 28.1027 21.2059 27.6563C21.2803 27.5819 21.3026 27.3884 21.2728 27.2768C21.2356 27.1354 21.1315 26.942 21.0124 26.9122C20.7967 26.8527 20.5437 26.9197 20.3205 26.8899C20.0749 26.8527 19.688 27.0759 19.6211 26.689C19.569 26.3542 19.4499 25.9375 19.8443 25.6697C20.1717 25.4464 20.499 25.2083 20.819 24.9777C20.8859 24.9256 20.938 24.8512 20.9901 24.7842C20.9157 24.7396 20.8413 24.6726 20.7595 24.6652C20.5734 24.6503 20.3874 24.6652 20.2014 24.6578C19.7773 24.6429 19.9261 24.4941 20.1047 24.2857C20.3577 23.9807 20.5139 23.5566 20.8115 23.3334C21.9797 22.4703 23.1999 21.6667 24.3978 20.8408C25.5586 20.0447 26.7342 19.256 27.8949 18.4598C28.133 18.2961 28.3487 18.1027 28.572 17.5744C28.572 17.4107 28.5645 17.5967 28.5794 17.7828C28.5868 17.8348 28.6761 17.9241 28.7133 17.9167C28.9514 17.872 29.4648 17.0908 29.4053 16.8229C29.3755 16.7039 29.197 16.5551 29.0705 16.5402C28.877 16.5104 28.5794 16.4286 28.5794 16.8081C28.5794 16.9494 28.5794 17.0908 28.5794 17.5744C27.0169 18.0357 25.499 17.4256 23.9365 17.6414C23.0288 17.1875 22.0318 17.5372 21.1166 17.3289C19.8443 17.0387 18.5422 17.2768 17.3145 17.0313C16.124 16.7932 14.9336 16.9941 13.7877 16.7634C12.6047 16.5328 11.4217 16.6518 10.2609 16.4732C9.50201 16.3616 8.71332 16.3839 7.99904 16.1905C7.23267 15.9896 6.45141 16.1012 5.72969 15.9226C4.78475 15.6845 3.8026 15.6771 2.87254 15.3869C2.67165 15.3274 2.44844 15.2084 2.31451 15.0521C1.91272 14.561 1.28028 14.2783 1.07195 13.6086C1.03475 13.497 0.677605 13.5045 0.48415 13.4301C-0.0441244 13.2217 -0.125969 12.8869 0.298138 12.4331C0.632961 12.0685 0.491593 12.0313 0.112126 12.0164C0.0600435 12.0164 -0.0515631 11.7262 -0.0143584 11.6816C0.275818 11.3467 0.476711 10.9301 1.03475 10.9078C3.19249 10.8408 5.34278 10.6771 7.50052 10.6473C10.6255 10.6027 13.758 10.6101 16.883 10.6473C19.6434 10.6771 22.3964 11.0789 25.1717 10.9226C26.2282 11.3095 27.3294 11.1831 28.4157 11.2128C28.6166 11.2203 28.7952 11.4137 29.0035 11.4658C29.1151 11.4956 29.3011 11.4435 29.3606 11.3616C29.4202 11.2872 29.4053 11.064 29.3383 11.0045C29.0779 10.7664 28.7654 10.5804 28.4901 10.3572C28.1106 10.0447 27.7312 9.78424 27.694 9.17412C27.6642 8.69049 27.4038 9.30805 27.2922 9.21133C27.1583 9.06252 27.0541 8.85418 26.9202 8.61609C26.9202 8.59377 26.9202 8.63841 26.9202 8.67561C26.9946 8.65329 27.0764 8.63841 27.1359 8.59377C27.1508 8.57889 27.1062 8.48216 27.0913 8.42264C27.0318 8.46728 26.9723 8.51192 26.9202 8.61609ZM13.1627 12.0387C11.2505 12.0387 9.33832 12.0387 7.42612 12.0387C7.2401 12.0387 7.05409 12.0387 6.86808 12.0461C6.83088 12.0461 6.77135 12.1206 6.77135 12.1354C6.80112 12.2024 6.8532 12.3066 6.89784 12.3066C7.22522 12.3214 7.5526 12.2991 7.87999 12.314C10.685 12.4628 13.4975 12.061 16.3026 12.5595C17.4782 12.7679 18.7208 12.6339 19.9336 12.5819C21.1687 12.5298 22.374 12.7679 23.5943 12.8572C25.6478 13.006 27.7163 13.0581 29.7699 13.1548C29.9038 13.1622 30.1047 13.125 30.1642 13.1994C30.499 13.6012 30.9455 13.378 31.3324 13.4226C31.4365 13.4375 31.5556 13.3334 31.6672 13.2813C31.5481 13.2366 31.4291 13.1845 31.3026 13.1548C30.938 13.0655 30.8562 12.2694 30.3279 12.7009C29.7401 13.1771 29.6583 12.5075 29.3458 12.3661C29.3011 12.3438 29.1821 12.4107 29.1597 12.4628C28.8993 13.0729 28.505 12.5893 28.185 12.5819C26.9127 12.5521 25.6478 12.4703 24.3755 12.3661C21.3026 12.0982 18.2074 12.1206 15.1196 12.0313C14.4648 12.0238 13.8175 12.0387 13.1627 12.0387ZM1.816 12.381C1.83832 12.3363 1.87552 12.2396 1.92016 12.1354C1.84576 12.1057 1.75647 12.0313 1.68951 12.0461C1.60022 12.0685 1.52582 12.1578 1.44397 12.2247C1.52582 12.2619 1.60022 12.2917 1.816 12.381ZM29.7624 11.3021C29.7922 11.3616 29.8294 11.4211 29.8592 11.4807C29.8889 11.4509 29.9484 11.4137 29.9484 11.3914C29.9336 11.3244 29.8889 11.2649 29.8592 11.2054C29.8294 11.2351 29.7996 11.2649 29.7624 11.3021Z" fill="white"/></svg></button>';
	$('.slick_feedback').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: true,
		prevArrow: leftArrow,
		nextArrow: rightArrow,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: false
				}
			},
		]
	});
		var leftArrowblack = '<button type="button" class="slick-prev"><svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">	<path d="M13.0798 21.3839C14.0099 21.9419 14.9995 22.4925 15.4831 23.5789C16.0858 23.7574 16.3685 24.3229 16.8075 24.7024C17.3135 25.1339 17.7004 25.6994 18.117 26.2277C18.1691 26.2946 18.1022 26.503 18.0352 26.5922C17.9161 26.7485 17.8045 26.7931 18.0798 26.9419C18.4147 27.128 18.742 27.4033 18.9578 27.7232C19.4489 28.4449 19.4042 28.5044 18.4965 28.6161C18.37 28.6309 18.251 28.7053 18.1319 28.75C18.251 28.8021 18.37 28.8393 18.4816 28.8988C18.556 28.936 18.6453 28.9806 18.6974 29.0476C18.8016 29.189 18.9801 29.375 18.9504 29.4866C18.8908 29.6875 18.69 29.9925 18.5486 29.9925C17.8864 29.9851 17.2614 30.1339 16.6289 29.5461C15.1706 28.2143 13.5188 27.0908 12.0307 25.7812C10.8775 24.7693 9.69442 23.7723 8.4965 22.8125C7.00096 21.622 5.55007 20.3646 3.95037 19.2857C2.86406 18.5491 1.95632 17.5372 0.981619 16.6369C0.907214 16.5625 0.877452 16.4434 0.825369 16.3467C0.959297 16.3244 1.08579 16.3095 1.21971 16.2723C1.3462 16.2425 1.46525 16.1905 1.5843 16.1458C1.47269 16.0937 1.33876 16.0714 1.25692 15.9896C1.00394 15.7366 0.84769 15.4166 0.468226 15.2455C0.103643 15.0744 0.0292378 14.6652 0.341738 14.3155C0.53519 14.0997 0.564952 13.8616 0.319416 13.75C-0.290703 13.4672 0.207809 13.0803 0.21525 12.7604C0.230131 12.4256 0.364059 12.0833 0.483107 11.7559C0.594714 11.4434 0.780726 11.1979 1.17507 11.2202C1.5471 11.2351 1.91912 11.2202 2.29858 11.2277C2.84174 11.2351 3.16912 10.93 3.59323 10.6027C5.00692 9.50147 6.25692 8.20683 7.73013 7.16516C9.05454 6.22766 10.2301 5.07439 11.4801 4.02528C11.8224 3.74254 12.2019 3.50445 12.5516 3.22915C13.6825 2.35117 14.8432 1.50296 15.9221 0.55802C16.5025 0.052067 17.1051 -0.0446585 17.8045 0.0148642C18.0352 0.0297453 18.2733 0.00742362 18.5039 0.0297453C18.5411 0.0371859 18.623 0.230637 18.5932 0.260399C18.4444 0.438971 18.2882 0.617542 18.1022 0.758911C17.8343 0.959805 17.931 1.09373 18.1319 1.26486C18.2733 1.38391 18.3775 1.60712 18.5337 1.64433C19.0025 1.76337 19.2257 1.89731 18.7941 2.34373C18.7197 2.41814 18.6974 2.61159 18.7272 2.7232C18.7644 2.86457 18.8685 3.05802 18.9876 3.08778C19.2033 3.14731 19.4563 3.08034 19.6795 3.1101C19.9251 3.1473 20.312 2.92409 20.3789 3.311C20.431 3.64582 20.5501 4.06248 20.1557 4.33034C19.8283 4.55355 19.501 4.79165 19.181 5.0223C19.1141 5.07439 19.062 5.14879 19.0099 5.21576C19.0843 5.2604 19.1587 5.32736 19.2405 5.3348C19.4266 5.34968 19.6126 5.3348 19.7986 5.34225C20.2227 5.35713 20.0739 5.50594 19.8953 5.71427C19.6423 6.01933 19.4861 6.44344 19.1885 6.66665C18.0203 7.52975 16.8001 8.33332 15.6022 9.15921C14.4414 9.95534 13.2658 10.744 12.1051 11.5402C11.867 11.7039 11.6513 11.8973 11.428 12.4256C11.428 12.5893 11.4355 12.4033 11.4206 12.2172C11.4132 12.1652 11.3239 12.0759 11.2867 12.0833C11.0486 12.128 10.5352 12.9092 10.5947 13.1771C10.6245 13.2961 10.803 13.4449 10.9295 13.4598C11.123 13.4896 11.4206 13.5714 11.4206 13.1919C11.4206 13.0506 11.4206 12.9092 11.4206 12.4256C12.9831 11.9643 14.501 12.5744 16.0635 12.3586C16.9712 12.8125 17.9682 12.4628 18.8834 12.6711C20.1557 12.9613 21.4578 12.7232 22.6855 12.9687C23.876 13.2068 25.0664 13.0059 26.2123 13.2366C27.3953 13.4672 28.5783 13.3482 29.7391 13.5268C30.498 13.6384 31.2867 13.6161 32.001 13.8095C32.7673 14.0104 33.5486 13.8988 34.2703 14.0774C35.2153 14.3155 36.1974 14.3229 37.1275 14.6131C37.3284 14.6726 37.5516 14.7917 37.6855 14.9479C38.0873 15.439 38.7197 15.7217 38.9281 16.3914C38.9653 16.503 39.3224 16.4955 39.5159 16.5699C40.0441 16.7783 40.126 17.1131 39.7019 17.5669C39.367 17.9315 39.5084 17.9687 39.8879 17.9836C39.94 17.9836 40.0516 18.2738 40.0144 18.3184C39.7242 18.6533 39.5233 19.0699 38.9653 19.0922C36.8075 19.1592 34.6572 19.3229 32.4995 19.3527C29.3745 19.3973 26.242 19.3899 23.117 19.3527C20.3566 19.3229 17.6036 18.9211 14.8283 19.0774C13.7718 18.6905 12.6706 18.8169 11.5843 18.7872C11.3834 18.7797 11.2048 18.5863 10.9965 18.5342C10.8849 18.5044 10.6989 18.5565 10.6394 18.6384C10.5798 18.7128 10.5947 18.936 10.6617 18.9955C10.9221 19.2336 11.2346 19.4196 11.5099 19.6428C11.8894 19.9553 12.2688 20.2158 12.306 20.8259C12.3358 21.3095 12.5962 20.6919 12.7078 20.7887C12.8417 20.9375 12.9459 21.1458 13.0798 21.3839C13.0798 21.4062 13.0798 21.3616 13.0798 21.3244C13.0054 21.3467 12.9236 21.3616 12.8641 21.4062C12.8492 21.4211 12.8938 21.5178 12.9087 21.5774C12.9682 21.5327 13.0278 21.4881 13.0798 21.3839ZM26.8373 17.9613C28.7495 17.9613 30.6617 17.9613 32.5739 17.9613C32.7599 17.9613 32.9459 17.9613 33.1319 17.9539C33.1691 17.9539 33.2286 17.8794 33.2286 17.8646C33.1989 17.7976 33.1468 17.6934 33.1022 17.6934C32.7748 17.6786 32.4474 17.7009 32.12 17.686C29.315 17.5372 26.5025 17.939 23.6974 17.4405C22.5218 17.2321 21.2792 17.3661 20.0664 17.4181C18.8313 17.4702 17.626 17.2321 16.4057 17.1428C14.3522 16.994 12.2837 16.9419 10.2301 16.8452C10.0962 16.8378 9.89531 16.875 9.83579 16.8006C9.50097 16.3988 9.05454 16.622 8.66763 16.5774C8.56346 16.5625 8.44442 16.6666 8.33281 16.7187C8.45186 16.7634 8.5709 16.8155 8.69739 16.8452C9.06198 16.9345 9.14382 17.7306 9.6721 17.2991C10.2599 16.8229 10.3417 17.4925 10.6542 17.6339C10.6989 17.6562 10.8179 17.5893 10.8403 17.5372C11.1007 16.9271 11.495 17.4107 11.815 17.4181C13.0873 17.4479 14.3522 17.5297 15.6245 17.6339C18.6974 17.9018 21.7926 17.8794 24.8804 17.9687C25.5352 17.9762 26.1825 17.9613 26.8373 17.9613ZM38.184 17.619C38.1617 17.6637 38.1245 17.7604 38.0798 17.8646C38.1542 17.8943 38.2435 17.9687 38.3105 17.9539C38.3998 17.9315 38.4742 17.8422 38.556 17.7753C38.4742 17.7381 38.3998 17.7083 38.184 17.619ZM10.2376 18.6979C10.2078 18.6384 10.1706 18.5789 10.1408 18.5193C10.1111 18.5491 10.0516 18.5863 10.0516 18.6086C10.0664 18.6756 10.1111 18.7351 10.1408 18.7946C10.1706 18.7649 10.2004 18.7351 10.2376 18.6979Z" fill="#672F12"/></svg></button>';
	var rightArrowblack = '<button type="button" class="slick-next"><svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.9202 8.61609C25.9901 8.05805 25.0005 7.50746 24.5169 6.42115C23.9142 6.24258 23.6315 5.6771 23.1925 5.29764C22.6865 4.86609 22.2996 4.30061 21.883 3.77234C21.8309 3.70537 21.8978 3.49704 21.9648 3.40775C22.0839 3.2515 22.1955 3.20686 21.9202 3.05805C21.5853 2.87204 21.258 2.59674 21.0422 2.2768C20.5511 1.55508 20.5958 1.49555 21.5035 1.38395C21.63 1.36906 21.749 1.29466 21.8681 1.25002C21.749 1.19793 21.63 1.16073 21.5184 1.10121C21.444 1.064 21.3547 1.01936 21.3026 0.952398C21.1984 0.811029 21.0199 0.625017 21.0496 0.51341C21.1092 0.312517 21.31 0.00745717 21.4514 0.00745717C22.1136 0.0148976 22.7386 -0.133912 23.3711 0.453886C24.8294 1.78573 26.4812 2.90924 27.9693 4.21877C29.1225 5.23067 30.3056 6.2277 31.5035 7.18752C32.999 8.37799 34.4499 9.63543 36.0496 10.7143C37.1359 11.4509 38.0437 12.4628 39.0184 13.3631C39.0928 13.4375 39.1225 13.5566 39.1746 13.6533C39.0407 13.6756 38.9142 13.6905 38.7803 13.7277C38.6538 13.7575 38.5348 13.8095 38.4157 13.8542C38.5273 13.9063 38.6612 13.9286 38.7431 14.0104C38.9961 14.2634 39.1523 14.5834 39.5318 14.7545C39.8964 14.9256 39.9708 15.3348 39.6583 15.6845C39.4648 15.9003 39.435 16.1384 39.6806 16.25C40.2907 16.5328 39.7922 16.9197 39.7848 17.2396C39.7699 17.5744 39.6359 17.9167 39.5169 18.2441C39.4053 18.5566 39.2193 18.8021 38.8249 18.7798C38.4529 18.7649 38.0809 18.7798 37.7014 18.7723C37.1583 18.7649 36.8309 19.07 36.4068 19.3973C34.9931 20.4985 33.7431 21.7932 32.2699 22.8348C30.9455 23.7723 29.7699 24.9256 28.5199 25.9747C28.1776 26.2575 27.7981 26.4956 27.4484 26.7708C26.3175 27.6488 25.1568 28.497 24.0779 29.442C23.4975 29.9479 22.8949 30.0447 22.1955 29.9851C21.9648 29.9703 21.7267 29.9926 21.4961 29.9703C21.4589 29.9628 21.377 29.7694 21.4068 29.7396C21.5556 29.561 21.7118 29.3825 21.8978 29.2411C22.1657 29.0402 22.069 28.9063 21.8681 28.7351C21.7267 28.6161 21.6225 28.3929 21.4663 28.3557C20.9975 28.2366 20.7743 28.1027 21.2059 27.6563C21.2803 27.5819 21.3026 27.3884 21.2728 27.2768C21.2356 27.1354 21.1315 26.942 21.0124 26.9122C20.7967 26.8527 20.5437 26.9197 20.3205 26.8899C20.0749 26.8527 19.688 27.0759 19.6211 26.689C19.569 26.3542 19.4499 25.9375 19.8443 25.6697C20.1717 25.4464 20.499 25.2083 20.819 24.9777C20.8859 24.9256 20.938 24.8512 20.9901 24.7842C20.9157 24.7396 20.8413 24.6726 20.7595 24.6652C20.5734 24.6503 20.3874 24.6652 20.2014 24.6578C19.7773 24.6429 19.9261 24.4941 20.1047 24.2857C20.3577 23.9807 20.5139 23.5566 20.8115 23.3334C21.9797 22.4703 23.1999 21.6667 24.3978 20.8408C25.5586 20.0447 26.7342 19.256 27.8949 18.4598C28.133 18.2961 28.3487 18.1027 28.572 17.5744C28.572 17.4107 28.5645 17.5967 28.5794 17.7828C28.5868 17.8348 28.6761 17.9241 28.7133 17.9167C28.9514 17.872 29.4648 17.0908 29.4053 16.8229C29.3755 16.7039 29.197 16.5551 29.0705 16.5402C28.877 16.5104 28.5794 16.4286 28.5794 16.8081C28.5794 16.9494 28.5794 17.0908 28.5794 17.5744C27.0169 18.0357 25.499 17.4256 23.9365 17.6414C23.0288 17.1875 22.0318 17.5372 21.1166 17.3289C19.8443 17.0387 18.5422 17.2768 17.3145 17.0313C16.124 16.7932 14.9336 16.9941 13.7877 16.7634C12.6047 16.5328 11.4217 16.6518 10.2609 16.4732C9.50201 16.3616 8.71332 16.3839 7.99904 16.1905C7.23267 15.9896 6.45141 16.1012 5.72969 15.9226C4.78475 15.6845 3.8026 15.6771 2.87254 15.3869C2.67165 15.3274 2.44844 15.2084 2.31451 15.0521C1.91272 14.561 1.28028 14.2783 1.07195 13.6086C1.03475 13.497 0.677605 13.5045 0.48415 13.4301C-0.0441244 13.2217 -0.125969 12.8869 0.298138 12.4331C0.632961 12.0685 0.491593 12.0313 0.112126 12.0164C0.0600435 12.0164 -0.0515631 11.7262 -0.0143584 11.6816C0.275818 11.3467 0.476711 10.9301 1.03475 10.9078C3.19249 10.8408 5.34278 10.6771 7.50052 10.6473C10.6255 10.6027 13.758 10.6101 16.883 10.6473C19.6434 10.6771 22.3964 11.0789 25.1717 10.9226C26.2282 11.3095 27.3294 11.1831 28.4157 11.2128C28.6166 11.2203 28.7952 11.4137 29.0035 11.4658C29.1151 11.4956 29.3011 11.4435 29.3606 11.3616C29.4202 11.2872 29.4053 11.064 29.3383 11.0045C29.0779 10.7664 28.7654 10.5804 28.4901 10.3572C28.1106 10.0447 27.7312 9.78424 27.694 9.17412C27.6642 8.69049 27.4038 9.30805 27.2922 9.21133C27.1583 9.06252 27.0541 8.85418 26.9202 8.61609C26.9202 8.59377 26.9202 8.63841 26.9202 8.67561C26.9946 8.65329 27.0764 8.63841 27.1359 8.59377C27.1508 8.57889 27.1062 8.48216 27.0913 8.42264C27.0318 8.46728 26.9723 8.51192 26.9202 8.61609ZM13.1627 12.0387C11.2505 12.0387 9.33832 12.0387 7.42612 12.0387C7.2401 12.0387 7.05409 12.0387 6.86808 12.0461C6.83088 12.0461 6.77135 12.1206 6.77135 12.1354C6.80112 12.2024 6.8532 12.3066 6.89784 12.3066C7.22522 12.3214 7.5526 12.2991 7.87999 12.314C10.685 12.4628 13.4975 12.061 16.3026 12.5595C17.4782 12.7679 18.7208 12.6339 19.9336 12.5819C21.1687 12.5298 22.374 12.7679 23.5943 12.8572C25.6478 13.006 27.7163 13.0581 29.7699 13.1548C29.9038 13.1622 30.1047 13.125 30.1642 13.1994C30.499 13.6012 30.9455 13.378 31.3324 13.4226C31.4365 13.4375 31.5556 13.3334 31.6672 13.2813C31.5481 13.2366 31.4291 13.1845 31.3026 13.1548C30.938 13.0655 30.8562 12.2694 30.3279 12.7009C29.7401 13.1771 29.6583 12.5075 29.3458 12.3661C29.3011 12.3438 29.1821 12.4107 29.1597 12.4628C28.8993 13.0729 28.505 12.5893 28.185 12.5819C26.9127 12.5521 25.6478 12.4703 24.3755 12.3661C21.3026 12.0982 18.2074 12.1206 15.1196 12.0313C14.4648 12.0238 13.8175 12.0387 13.1627 12.0387ZM1.816 12.381C1.83832 12.3363 1.87552 12.2396 1.92016 12.1354C1.84576 12.1057 1.75647 12.0313 1.68951 12.0461C1.60022 12.0685 1.52582 12.1578 1.44397 12.2247C1.52582 12.2619 1.60022 12.2917 1.816 12.381ZM29.7624 11.3021C29.7922 11.3616 29.8294 11.4211 29.8592 11.4807C29.8889 11.4509 29.9484 11.4137 29.9484 11.3914C29.9336 11.3244 29.8889 11.2649 29.8592 11.2054C29.8294 11.2351 29.7996 11.2649 29.7624 11.3021Z" fill="#672F12"/></svg></button>';

	$('.slick_awords').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		arrows: true,
		prevArrow: leftArrowblack,
		nextArrow: rightArrowblack,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: false
				}
			},
		]
	});




});

var docIcon = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.7143 8.00002C21.0831 8.00002 20.5714 7.48834 20.5714 6.85714V0H6.85715C4.9636 0 3.42857 1.53502 3.42857 3.42857V28.5714C3.42857 30.465 4.9636 32 6.85715 32H25.1429C27.0364 32 28.5715 30.465 28.5715 28.5714V8.00002H21.7143Z" fill="#672F12"/><path d="M22.8571 0.669678V5.71423H27.9017L22.8571 0.669678Z" fill="#672F12"/></svg>';
var delLink = '<a href="#" class="clean">Видалити</a>';
(function (document, window, index){
	'use strict';
	var inputs = document.querySelectorAll('#fileInput');
	Array.prototype.forEach.call(inputs, function (input) {
		var label = input.nextElementSibling,
				labelVal = label.innerHTML;
		input.addEventListener('change', function (e) {
			var fileName = '';
			if (this.files && this.files.length > 1){
				fileName = ( this.getAttribute('data-multiple-caption') || '' ).replace('{count}', this.files.length);}
			else {
				fileName = e.target.value.split('\\').pop();
			}
			if (fileName){
				label.classList.add('active');
				label.querySelector('span').innerHTML = docIcon + '<div>' + fileName + delLink + '</div>';
				var cleanLinks = document.querySelectorAll('.clean');
				Array.prototype.forEach.call(cleanLinks, function (cleanLink) {
					cleanLink.addEventListener('click', function (e) {
						e.preventDefault();
						input.value = '';
						label.innerHTML = labelVal;
						label.classList.remove('active');
					})
				})
			}
			else {
				label.classList.remove('active');
				label.innerHTML = labelVal;
			}
		});


		// Firefox bug fix
		input.addEventListener('focus', function () {
			input.classList.add('has-focus');
		});
		input.addEventListener('blur', function () {
			input.classList.remove('has-focus');
		});
	});
}(document, window, 0));