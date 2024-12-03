const currentUrl = new URL(window.location.href)

const emailSpan = document.querySelector('.email')
const locationSpan = document.querySelector('.location')

const searchParams = {
  email: currentUrl.searchParams.get('email'),
  location: currentUrl.searchParams.get('location'),
}

emailSpan.textContent = searchParams.email
locationSpan.textContent = searchParams.location
