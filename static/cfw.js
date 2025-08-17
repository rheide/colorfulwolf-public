function navigate(event) {
	window.location.href = event.target.options[event.target.selectedIndex].value;;
};

function updateCategoryStats(categoryStats) {
	const catSelect = document.getElementById('category-dropdown');
	for (let i=0;i<catSelect.options.length;i++) {
		const valueBits = catSelect.options[i].value.split('/');
		if (valueBits) {
			const value = valueBits[valueBits.length-2];
			const count = categoryStats[value];
			if (count) {
				catSelect.options[i].innerHTML += " (" + count + ")";
			}
		}
	}
}

function updateMonthStats(monthStats) {
	const monthSelect = document.getElementById('archive-dropdown');
	for (let i=0;i<monthSelect.options.length;i++) {
		const valueBits = monthSelect.options[i].value.split('/');
		if (valueBits) {
			const value = valueBits[valueBits.length-3] + '/' + valueBits[valueBits.length-2];
			const count = monthStats[value];
			if (count) {
				monthSelect.options[i].innerHTML += " (" + count + ")";
			}
			else {
				monthSelect.options[i].style.display = 'none';
			}
		}
	}
}

function loadStats() {
	const url = baseUrl + '/stats.json';
	const req = new XMLHttpRequest();
	req.overrideMimeType("application/json");
	req.open('GET', url, true);
	req.onload  = function() {
		const jsonData = JSON.parse(req.responseText);
		updateCategoryStats(jsonData['categories']);
		updateMonthStats(jsonData['month']);
	};
	req.send(null);
}

function initSearch() {
	const sb = document.getElementById("searchForm");
	sb.onsubmit = function() {
		const q = document.getElementById("gsq");
		if (q.value.indexOf("site:colorfulwolf.com") < 0) {
			q.value = "site:colorfulwolf.com " + q.value;
		}
		sb.submit();
	};
}

function loadComments() {
	if (!window.ARTICLE_SLUG) {
		return;
	}
	const commentUrl =  window.location.pathname.replace(
		/(\d\d\d\d)\/(\d\d)\/(\d\d)\/(.*)\/$/,
		"comments/$1-$2-$3-$4.json"
	);
	const req = new XMLHttpRequest();
	req.overrideMimeType("application/json");
	req.open('GET', commentUrl, true);
	req.onreadystatechange = function() {
		if(req.readyState !== XMLHttpRequest.DONE) {
			return;
		}
		if (req.status !== 200) {
			return;
		}
		const jsonData = JSON.parse(req.responseText);
		if (jsonData && jsonData.comments) {
			renderComments(jsonData.comments);
		}
	};
	req.send(null);
}

function renderComments(comments) {
	const commentBlockEl = document.getElementById("entry-comments");
	commentBlockEl.appendChild(document.createElement("hr"));
	const titleEl = document.createElement("h4");
	titleEl.innerText = comments.length + " comment(s)";
	commentBlockEl.appendChild(titleEl);

	const link = document.createElement('a');
	link.href = '#comment-form';
	link.innerText = "Leave a new comment";
	commentBlockEl.appendChild(link);

	const commentListEl = document.createElement("ul");
	commentListEl.classList.add("comments-list");
	comments.forEach(c => {
		const commentEl = document.createElement("div");
		commentEl.classList.add("comment");

		const commentMetaEl = document.createElement("div");
		commentMetaEl.classList.add("comment-meta");
		commentMetaEl.innerText = c.author + " \u2014 " + c.date;
		commentEl.appendChild(commentMetaEl);

		const commentContentEl = document.createElement("div");
		commentContentEl.classList.add("comment-content");
		commentContentEl.innerHTML = c.content;
		commentEl.appendChild(commentContentEl);

		commentListEl.appendChild(commentEl);
	});
	commentBlockEl.appendChild(commentListEl);
}

function submitCommentForm(event) {
	event.preventDefault();
	const form = event.target;
	const formData = new FormData(form);
	const errorEl = document.getElementById('comment-form-error');
	if (!formData.get('h-captcha-response')) {
		errorEl.innerText = 'Please complete the captcha first!';
		errorEl.style.display = 'block';
		//return;
	}
	const request = new XMLHttpRequest();
	request.onload = function() {
		if (request.status == 200) {
			form.innerText = "Your comment has been submitted. Thanks!";
		} else {
			errorEl.innerText = 'Whoops, something went wrong submitting your comment. Try again later?';
			errorEl.style.display = 'block';
		}
	}
	request.open(form.method.toUpperCase(), form.action);
	request.send(formData);
}

function initCommentForm() {
	if (!window.ARTICLE_SLUG) {
		return;
	}
	document.getElementsByName('comment-form').forEach(form => {
		form.addEventListener("submit", submitCommentForm, false);
	});
	const formDiv = document.getElementById('comment-form-captcha');
	if (formDiv) {
		hcaptcha.render('comment-form-captcha', {
			sitekey: "ee79a1a2-cc54-4e40-959a-7986cf28ebd8",
		});
	}
}

window.onload = function() {
	initSearch();
	initCommentForm();
	loadStats();
	loadComments();
};
