const toggleUL = document.querySelector('._toggleUL')
const ulContainer = document.querySelector('._ulContainer')
const pageWidth = screen.width
toggleUL.addEventListener('click', () =>{
	ulContainer.classList.toggle('active');
})

if(pageWidth > 768){
	toggleUL.textContent = ''
}else if(pageWidth <= 768){
	toggleUL.textContent = '☰'
}
