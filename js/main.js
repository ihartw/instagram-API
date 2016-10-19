function instaSearch() {
	var search = document.getElementById("search").value
	document.getElementById("results").innerHTML = ""
	console.log(search)

	$.ajax({
		url:"https://api.instagram.com/v1/tags/" + search + "/media/recent?access_token=295664109.1677ed0.3d8721e2f8014a4788ba39fe1d0900eb",
		dataType:"jsonp",

		success: function(data) {
			console.log(data)
			var results = document.getElementById("results")
			for(i=0; i<data.data.length; i++){

				var newDiv = document.createElement('DIV')
				newDiv.className = "col-xs-4 con animated slideInDown"

				var newLikes = document.createElement('h3')
				var likes = document.createTextNode('Likes: ' + data.data[i].likes.count)
				newDiv.appendChild(newLikes)


				var newImg = document.createElement('IMG')
				newImg.className = "images animated slideInDown"
				newImg.setAttribute('src', data.data[i].images.thumbnail.url)
				newDiv.appendChild(newImg)

				document.getElementById('results').appendChild(newDiv)
			}
		},
		type: 'GET'
	});
}

document.getElementById('button').addEventListener('click', instaSearch, false)


