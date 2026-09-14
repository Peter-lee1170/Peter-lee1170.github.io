const grid = document.getElementById('project-grid');
const make = (tag, cls, text) => { const el=document.createElement(tag); if(cls) el.className=cls; if(text) el.textContent=text; return el; };
for (const [i, project] of (window.portfolioProjects || []).entries()) {
 const card=make('article','project-card'); card.id='project-'+(i+1);
 const body=make('div','project-body');
 body.append(make('span','project-number',project.category || 'PROJECT '+String(i+1).padStart(2,'0')),make('h3','',project.title || 'Project coming soon'),make('p','',project.description || 'Project details to follow.'));
 if(project.result) body.append(make('p','project-result',project.result));
 const gallery=make('div','project-gallery');
 for(const photo of (project.images || (project.image?[{src:project.image,alt:project.imageAlt}]:[]))) {
  const figure=make('figure'); const a=make('a','project-photo-link');a.href=photo.src;a.target='_blank';a.rel='noopener';a.setAttribute('aria-label','View full image: '+(photo.alt || project.title));
  const img=make('img');img.src=photo.src;img.alt=photo.alt || project.title;img.loading='lazy';a.append(img);figure.append(a);if(photo.caption)figure.append(make('figcaption','',photo.caption));gallery.append(figure);
 }
 const details=make('details','project-details');details.append(make('summary','','My role & technical details'));
 if(project.roles?.length){const list=make('ul');for(const role of project.roles)list.append(make('li','',role));details.append(list);}
 if(project.methods){details.append(make('h4','','Tools & methods'),make('p','',project.methods));}
 body.append(details);
 if(project.note)body.append(make('p','project-note',project.note));
 card.append(body,gallery);grid.append(card);
}

// Keep the section navigation in sync with scrolling.
const navLinks = Array.from(document.querySelectorAll("nav a"));
const navSections = [document.querySelector(".hero"), document.querySelector("#projects"), document.querySelector("#experience"), document.querySelector("#contact")];
let navTicking = false;
function updateNav(){let index=0;for(let i=0;i<navSections.length;i++){if(navSections[i].getBoundingClientRect().top <= window.innerHeight * .38) index=i;}if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-4)index=navSections.length-1;navLinks.forEach((link,i)=>{if(i===index)link.setAttribute("aria-current","location");else link.removeAttribute("aria-current");});navTicking=false;}
addEventListener("scroll",()=>{if(!navTicking){navTicking=true;requestAnimationFrame(updateNav);}},{passive:true});addEventListener("resize",updateNav);updateNav();
