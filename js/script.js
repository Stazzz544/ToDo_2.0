//ToDo list 2.0 === 01.12.2021 ===
document.querySelector('.pushToDo').onclick = addPost
document.querySelector('.out').onclick = postButtons

let posts = []

function addPost(){
	const postText = document.querySelector('.postText')
	if(!postText.value) return false

	posts.push({            // main object
		text: postText.value,
		checked: false,
		id: Date.now()
	})

	showPosts(posts)
	clearValue(postText)
}


function showPosts(posts){
	const out = document.querySelector('.out');
	out.innerHTML = '';

	posts.forEach(e => out.innerHTML += 
		`<div id=${e.id} class = "post-wrapper">
			<button class="del">DEL</button>
			<div class='post-text ${ (e.checked === true) ? 'line':'noLine'}'>${e.text}</div>
			<input ${ (e.checked === true) ? 'checked':''} id = '${e.id}+inp'		class='checkbox' type='checkbox'>
			<label for='${e.id}+inp' class='checkbox-label'></label>
		</div>
		`);
}


function postButtons(e){
	if(e.target.classList.contains('del')) {
		delPost(e);
	} else if (e.target.classList.contains('checkbox')) {
		checkPost(e);
	}
}


function delPost(e) {
	const wrapperId = e.target.closest('.post-wrapper').getAttribute('id')

	posts = posts.filter(e =>  {
		return !(e.checked === true && e.id == wrapperId)
	})

	showPosts(posts)
}

function checkPost(e) {
	const wrapperId = e.target.closest('.post-wrapper').getAttribute('id')
	
	posts.forEach(e => {
		if (e.id == wrapperId) {
			(e.checked === true) ? e.checked = false : e.checked = true
		}

		showPosts(posts)
	})
}


function clearValue(input) { input.value = '' }
