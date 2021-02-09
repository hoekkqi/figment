export function number(L) {
  var s = "";
  var randomchar = function () {
    var n = Math.floor(Math.random() * 10);
    return n; //1-10
    //   if (n < 36) return String.fromCharCode(n + 55); //A-Z
    // return String.fromCharCode(n + 61); //a-z
  };
  while (s.length < L) s += randomchar();
  return s;
}

export function path(length: number = 10) {
  let chars: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str: string = "";
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
}
