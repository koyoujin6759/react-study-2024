function aaa(count, callback) {
  for (idx = 0; idx < count; idx++) {
    callback(idx);
  }
}
aaa(5, function (idx) {
  console.log(idx);
});
