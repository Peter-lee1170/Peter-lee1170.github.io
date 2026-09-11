const grid = document.getElementById('project-grid');
const make = (tag, cls, text) => { const el = document.createElement(tag); if(cls) el.className=cls; if(text) el.textContent=text; return el; };
for (const [i, project] of (window.portfolioProjects || []).entries()) {
 const card=make('article','project-card'); const visual=make('div','project-image');
 if(project.image){const img=make('img');img.src=project.image;img.alt=project.imageAlt || project.title || 'Project photograph';img.loading='lazy';visual.append(img);}else{visual.append(make('span','placeholder-label','IMAGE / DIAGRAM'));}
 const body=make('div','project-body');body.append(make('span','project-number',project.category || 'PROJECT '+String(i+1).padStart(2,'0')),make('h3','',project.title || 'Project coming soon'),make('p','',project.description || 'Images and project details to follow.'));
 if(project.role || project.methods || project.result){const details=make('div','project-details');for(const [label,value] of [['Role',project.role],['Methods',project.methods],['Outcome',project.result]]){if(value){const p=make('p');p.append(make('strong','',label+': '),document.createTextNode(value));details.append(p);}}body.append(details);}
 if(project.link && /^(https?:\/\/|assets\/)/i.test(project.link)){const link=make('a','project-link',project.linkLabel || 'View project ↗');link.href=project.link;link.target='_blank';link.rel='noopener';body.append(link);}
 card.append(visual,body);grid.append(card);
}
if ((window.portfolioProjects || []).some(p=>p.title)) document.querySelector('.section-note').hidden=true;
