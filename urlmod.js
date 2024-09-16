import url from "url";
//we can watch any url in a format manner for better understanding
const myurl = new URL("https://www.google.com");
myurl.pathname = "/images";
myurl.search = "?id=games"
console.log(myurl);
console.log(myurl.pathname);


