let input = document.querySelector("input"),
    download = document.querySelector("button")

download.addEventListener("click", e => {
  e.preventDefault(); // Block Form From Submitting
  fetchFile(input.value)
  // download.innerText = "...جاري التحميل"
})

function fetchFile(url) {
  fetch(url).then(res => res.blob()).then(file => {
    let tempUrl = URL.createObjectURL(file)
    let a = document.createElement("a")
    a.href = tempUrl
    a.download = url.replace(/^.*[\\\/]/, "");
    document.body.appendChild(a)
    // console.log(tempUrl)
    a.click()
    a.remove()
    URL.revokeObjectURL(tempUrl)
    download.innerText = "جاري التحميل"
  }).catch(() => {
    download.innerText = "تحميل"
    alert("فشل تحميل الملف! ضع رابط صحيح")
  })
}