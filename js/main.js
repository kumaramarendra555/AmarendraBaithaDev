function toggleAbout(){
 const c=document.getElementById('aboutMore');
 const b=document.querySelector('.see-more-btn');
 c.classList.toggle('active');
 b.textContent=c.classList.contains('active')?'Show Less':'See More';
}
