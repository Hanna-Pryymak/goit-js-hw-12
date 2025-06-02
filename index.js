import{a as v,S,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const E="50531862-7f9579662c49d006b799942fa",B="https://pixabay.com/api/";async function M(o,t=1,n=15){const i={key:E,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:n};return(await v.get(B,{params:i})).data}const p=document.querySelector(".loader"),g=document.querySelector(".gallery"),c=document.querySelector(".loadMoreBtn");let u;function P(o){const t=o.map(({webformatURL:n,largeImageURL:i,tags:e,likes:r,views:s,comments:L,downloads:w})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img 
            class="gallery-image" 
            src="${n}" 
            alt="${e}" 
          />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r}</p>
          <p><b>Views:</b> ${s}</p>
          <p><b>Comments:</b> ${L}</p>
          <p><b>Downloads:</b> ${w}</p>
        </div>
      </li>`).join("");g.insertAdjacentHTML("beforeend",t),u?u.refresh():u=new S(".gallery a",{captionsData:"alt",captionDelay:250})}function q(){g.innerHTML=""}function $(){p.classList.add("is-active")}function O(){p.classList.remove("is-active")}function R(){c&&c.classList.remove("hidden")}function h(){c&&c.classList.add("hidden")}const y=document.querySelector(".form"),x=y.elements["search-text"],H=document.querySelector(".loadMoreBtn");let d="",l=1;const f=15;let m=0;y.addEventListener("submit",I);H.addEventListener("click",A);async function I(o){if(o.preventDefault(),q(),h(),l=1,d=x.value.trim(),!d){a.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}await b()}async function A(){l++,await b(!0)}async function b(o=!1){$();try{const t=await M(d,l,f);if(m=t.totalHits,t.hits.length===0&&!o){a.error({title:"Error",message:"No images found. Try another search term!",position:"topRight"});return}P(t.hits);const n=Math.ceil(m/f);l<n?R():(h(),a.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),o&&D()}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{O()}}function D(){const o=document.querySelector(".gallery-item");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
