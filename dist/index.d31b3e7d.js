const e=localStorage.getItem("sites"),o=JSON.parse(e)||[{logo:"G",url:"https://google.com"},{logo:"O",url:"https://openai.com"}],l=e=>e.replace("https://","").replace("http://","").replace("www","").replace(/\/.*/,""),s=()=>{$(".siteList").find("li:not(.last)").remove(),o.forEach((e,t)=>{let i=$(`
          <li>
            <div class="site">
              <div class="logo">${e.logo}</div>
              <div class="link">${l(e.url)}</div>
              <div class="close"><svg class="iconpark-icon"><use href="#close-small"></use></svg></div>
            </div>
        </li>`);i.insertBefore($(".last")),i.on("click",()=>{window.open(e.url)}),i.on("click",".close",e=>{e.stopPropagation(),o.splice(t,1),s()})})};s(),$(".addButton").on("click",()=>{let e=window.prompt("Please enter the address: ");0!==e.indexOf("http")&&(e="https://"+e),$(".siteList"),o.push({logo:`${l(e)[0]}`,url:e}),s()}),window.onbeforeunload=()=>{let e=JSON.stringify(o);window.localStorage.setItem("sites",e)},$(document).on("keypress",e=>{let{key:l}=e;console.log(l);for(let e=0;e<o.length;e++)o[e].logo.toLowerCase()===l&&window.open(o[e].url)});
//# sourceMappingURL=index.d31b3e7d.js.map
