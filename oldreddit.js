(function main() {
  const {pathname} = window.location;
  console.log(pathname);
  window.location.replace(`https://old.reddit.com${pathname}`);
})();
