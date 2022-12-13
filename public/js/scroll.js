const setupScrooling = () => {
  const container = [ ...document.querySelectorAll(".movie-container")]
  const nextBtn = [ ...document.querySelectorAll(".next-btn")]
  const prevBtn = [ ...document.querySelectorAll(".pre-btn")]

  container.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect()
    let containerwidth = containerDimensions.width

    nextBtn[i].addEventListener('click', () =>{
      item.scrollLeft += containerwidth
    } )

    prevBtn[i].addEventListener('click', () =>{
      item.scrollLeft -= containerwidth
    } )

  })
}