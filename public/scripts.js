const ele = document.getElementById("rundol");
let runval = true;
let top = 0;
let bottom = 0;
let left = 0;
let right = 0;
console.log(ele);
ele.style.position = "absolute";
while (runval==true) {
  ele.style.top = `${top}px`;
  ele.style.left = `${left}px`;
  ele.style.bottom = `${bottom}px`;
  ele.style.right = `${right}px`;
  top += 1;
  left += 1;
  bottom += 1;
  right += 1;
}
