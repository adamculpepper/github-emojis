// Github Emojis
// https://adamculpepper.github.io/github-emojis
// https://github.com/adamculpepper/github-emojis

// if (!window.Promise){
// 	alert('old browser, upgrade');
// }

var emojiData = [];
var contentHTML = '';

var getData = function() {
	$.ajax({
		type: 'GET',
		url: 'https://api.github.com/emojis',
		success: function(resp) {
			emojiData = resp;
			console.table(emojiData);

			var len = Object.keys(emojiData).length;
			console.warn('items: ' + len);

			contentHTML += '<div class="row">';

			$.each(emojiData, function(key, value) {
				console.log(key, value);
				contentHTML += '<div class="col-3">';
				contentHTML += '<img src="' + value + '" width="22">';
				contentHTML += ':' + key + ':';
				contentHTML += '</div>';
			});

			contentHTML += '</div>';

			$('#content .card-body').html(contentHTML);
		},
		error: function() {
			alert('error!');
		}
	});
}

getData();
