const sites = localStorage.getItem("sites");
const hashMap = JSON.parse(sites) || [
  { logo: "G", url: "https://google.com" },
  { logo: "O", url: "https://openai.com" },
];

const simplifyUrl = (url) => {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www", "")
    .replace(/\/.*/, ""); //delete any content that begin with '/'
};

const render = () => {
  $(".siteList").find("li:not(.last)").remove();
  hashMap.forEach((node, index) => {
    const $li = $(`
          <li>
            <div class="site">
              <div class="logo">${node.logo}</div>
              <div class="link">${simplifyUrl(node.url)}</div>
              <div class="close"><svg class="iconpark-icon"><use href="#close-small"></use></svg></div>
            </div>
        </li>`);
    $li.insertBefore($(".last"));
    $li.on("click", () => {
      window.open(node.url);
    });
    $li.on("click", ".close", (e) => {
      e.stopPropagation();
      hashMap.splice(index, 1);
      render();
    });
  });
};
render();

$(".addButton").on("click", () => {
  let url = window.prompt("Please enter the address: ");
  if (url.indexOf("http") !== 0) {
    url = "https://" + url;
  }
  const $siteList = $(".siteList");
  hashMap.push({ logo: `${simplifyUrl(url)[0]}`, url: url });
  render();
});

window.onbeforeunload = () => {
  const siteInfo = JSON.stringify(hashMap);
  window.localStorage.setItem("sites", siteInfo);
};

$(document).on("keypress", (e) => {
  // const key = e.key; this can be shortened by statement below
  const { key } = e;
  console.log(key);
  for (let i = 0; i < hashMap.length; i++) {
    if (hashMap[i].logo.toLowerCase() === key) {
      window.open(hashMap[i].url);
    }
  }
});
