import products from './products.js'

const container = document.querySelector('.merchandising__container')

products.forEach(product => {
  const card = document.createElement('div')
  card.className = 'merchandising__card'
  card.innerHTML = `
    <img src="${product.image}" class="merchandising__imagecard" alt="${product.name}" />
    <span>${product.name}</span>
    <div class="merchandising__actions">
      <button class="merchandising__buy">Comprar</button>
      <button class="merchandising__cart">
        <img src="/src/assets/icons/cart.png" alt="Carrinho" />
        Carrinho
      </button>
    </div>
  `
  container.appendChild(card)
})
