document.addEventListener('DOMContentLoaded', event => {
  const dots = document.querySelectorAll('.dot')
  const slideImageContainer = document.querySelector('.slide-image')

  let currentIndex = 0

  function updateActiveDot () {
    dots.forEach((dot, index) => {
      dot.className = dot.className.replace(' active', '')
      if (index === currentIndex) {
        dot.className += ' active'
      }
    })
  }

  function scrollToSlide (index) {
    const slideWidth = slideImageContainer.scrollWidth / dots.length
    slideImageContainer.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    })
    currentIndex = index
    updateActiveDot()
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      scrollToSlide(index)
    })
  })
  updateActiveDot()
})

function changeImage (element, imageId) {
  var images = document.querySelectorAll('.image-container img')
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = 'none'
  }
  document.getElementById(imageId).style.display = 'block'
  var texts = document.querySelectorAll('.text')
  for (var i = 0; i < texts.length; i++) {
    texts[i].classList.remove('active')
  }
  element.classList.add('active')
}

document.addEventListener('DOMContentLoaded', function () {
  const contactBtn = document.getElementById('contactBtn')
  const popupFormContainer = document.getElementById('popupFormContainer')
  function createPopupForm () {
    const formHTML = `
      <div class="popup-form">
      <h2>Talk to Us</h2>
      <form action="https://getform.io/f/pbnvgmvb" method="POST">
        <input type="email" id="work-email" name="email" required placeholder="Work email*">
        <div class="name-container">
          <div>
            <input type="text" id="first-name" name="first-name" required placeholder="First name*">
          </div>
          <div>
            <input type="text" id="last-name" name="last-name" required placeholder="Last name*">
          </div>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" id="subscribe" name="subscribe" value="yes">
          <label for="subscribe">I agree to Fyle's terms and conditions, and provide consent to send me communication.</label>
        </div>
        <button type="submit">Contact Us</button>
      </form>
    </div>
      `
    popupFormContainer.innerHTML = formHTML
    popupFormContainer.style.display = 'flex'
    popupFormContainer.addEventListener('click', function (event) {
      if (event.target === popupFormContainer) {
        closePopupForm()
      }
    })
  }
  function closePopupForm () {
    popupFormContainer.style.display = 'none'
  }
  contactBtn.addEventListener('click', createPopupForm)
})
