/**=======================================================
* Author: Leclercq Vincent
* Versions: 3.1
*  Date: 05/19/2022
========================================================*/


/**========================Global observer setting============================= */
if (NodeList.prototype.forEach === undefined){
	NodeList.prototype.forEach = Array.prototype.forEach
}

const options = {
	root: null,
	rootMargin : '0px',
	threshold : 0.2
}

/**========================Header fade in============================ */
const header = document.querySelector('#navbar');
let handleIntersectHome = function (entries) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio < 0.2 && window.matchMedia("(min-width: 990px)").matches) {
      header.classList.remove('header-transparent')
      header.classList.add('secondary')
    }else {
      header.classList.add('header-transparent')
      header.classList.remove('secondary')
    }
  })
}

let observer_home = new IntersectionObserver(handleIntersectHome, options)
document.querySelectorAll('.home').forEach(function(home){
	observer_home.observe(home)
})
//--------------------------skill effect---------
const handleIntersectSkills = function (entries,observer) {
	entries.forEach(function (entry){
		if (entry.intersectionRatio > 0.2){
			entry.target.classList.add('progress-bar')
		}else{
			entry.target.classList.remove('progress-bar')
		}
	})
}
const observerBar = new IntersectionObserver(handleIntersectSkills,options)
document.querySelectorAll('.skills').forEach(function(skill){
	observerBar.observe(skill)
})

//--------------------------fade effect-------------
const handleIntersectFade = function (entries,observer) {
	entries.forEach(function (entry){
		if (entry.intersectionRatio > 0.2){
			entry.target.classList.remove('reveal-NotVisible')
		}else{
			entry.target.classList.add('reveal-NotVisible')
		}
	})
}

const observerSkills = new IntersectionObserver(handleIntersectFade, options)
document.querySelectorAll('.reveal').forEach(function(fade){
	observerSkills.observe(fade)
})
//--------------------------active home effect-------------
const navhome = document.querySelector('#navhome');
const handleIntersectActiveHome = function (entries,observer) {
	entries.forEach(function (entry){
		if (entry.intersectionRatio > 0.2){
			navhome.classList.add('active')
		}else{
			navhome.classList.remove('active')
		}
	})
}
const observerActiveHome = new IntersectionObserver(handleIntersectActiveHome, options)
document.querySelectorAll('#home').forEach(function(section){
	observerActiveHome.observe(section)
})
//--------------------------active about effect-------------
const navabout = document.querySelector('#navabout');
const handleIntersectActiveAbout = function (entries,observer) {
	entries.forEach(function (entry){
		if (entry.intersectionRatio > 0.2){
			navabout.classList.add('active')
		}else{
			navabout.classList.remove('active')
		}
	})
}
const observerActiveAbout = new IntersectionObserver(handleIntersectActiveAbout, options)
document.querySelectorAll('#about').forEach(function(section){
	observerActiveAbout.observe(section)
})
//--------------------------active course effect-------------
const navcourse = document.querySelector('#navcourse');
const handleIntersectActiveCourse = function (entries,observer) {
	entries.forEach(function (entry){
		if (entry.intersectionRatio > 0.2){
			navcourse.classList.add('active')
		}else{
			navcourse.classList.remove('active')
		}
	})
}
const observerActiveCourse = new IntersectionObserver(handleIntersectActiveCourse, options)
document.querySelectorAll('#course').forEach(function(section){
	observerActiveCourse.observe(section)
})
//--------------------------active skills effect-------------
const navskills = document.querySelector('#navskills');
const handleIntersectActiveSkills = function (entries,observer) {
	entries.forEach(function (entry){
		if (entry.intersectionRatio > 0.2){
			navskills.classList.add('active')
		}else{
			navskills.classList.remove('active')
		}
	})
}
const observerActiveSkills = new IntersectionObserver(handleIntersectActiveSkills, options)
document.querySelectorAll('#skills').forEach(function(section){
	observerActiveSkills.observe(section)
})
//--------------------------active contact effect-------------
const navcontact = document.querySelector('#navcontact');
const handleIntersectActiveContact = function (entries,observer) {
	entries.forEach(function (entry){
		if (entry.intersectionRatio > 0.2){
			navcontact.classList.add('active')
		}else{
			navcontact.classList.remove('active')
		}
	})
}
const observerActiveContact = new IntersectionObserver(handleIntersectActiveContact, options)
document.querySelectorAll('#contact').forEach(function(section){
	observerActiveContact.observe(section)
})