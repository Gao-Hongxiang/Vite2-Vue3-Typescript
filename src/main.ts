console.log('vi111te')
export function render() {
  document.getElementById('app')!.innerHTML = 'main12'
}
render()
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    newModule!.render()
  })
}
