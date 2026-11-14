/* Public website contact settings. Add only details you approve for public display. */
const SITE_CONFIG={email:"",linkedin:""};
const menuButton=document.querySelector(".menu-toggle");
const navigation=document.querySelector(".nav-links");
function closeMenu(){menuButton?.setAttribute("aria-expanded","false");menuButton?.setAttribute("aria-label","Open navigation");navigation?.classList.remove("open")}
menuButton?.addEventListener("click",()=>{const open=menuButton.getAttribute("aria-expanded")==="true";menuButton.setAttribute("aria-expanded",String(!open));menuButton.setAttribute("aria-label",open?"Open navigation":"Close navigation");navigation?.classList.toggle("open",!open)});
navigation?.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMenu()});
const filters=document.querySelectorAll("[data-filter]");
const projects=document.querySelectorAll("[data-category]");
filters.forEach(button=>button.addEventListener("click",()=>{const filter=button.dataset.filter;filters.forEach(item=>{const selected=item===button;item.classList.toggle("active",selected);item.setAttribute("aria-pressed",String(selected))});projects.forEach(project=>{project.hidden=filter!=="all"&&!project.dataset.category.split(" ").includes(filter)})}));
const year=document.getElementById("year");if(year)year.textContent=String(new Date().getFullYear());
if(SITE_CONFIG.email.trim()){const label=document.getElementById("contact-email");if(label)label.textContent=SITE_CONFIG.email;const link=document.getElementById("email-button");if(link){link.href="mailto:"+SITE_CONFIG.email.trim();link.hidden=false}}
if(/^https:\/\/(www\.)?linkedin\.com\//i.test(SITE_CONFIG.linkedin.trim())){const label=document.getElementById("contact-linkedin");if(label)label.textContent="Connect on LinkedIn";const link=document.getElementById("linkedin-button");if(link){link.href=SITE_CONFIG.linkedin.trim();link.hidden=false}}