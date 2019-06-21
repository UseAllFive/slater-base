import { component } from 'picoapp'
import { addVariant } from '@/lib/cart.js'

export default component((node) => {
    const json = JSON.parse(node.querySelector('.js-product-json').innerHTML)
    const form = node.querySelector('form')

    const { selectedOrFirstAvailableVariant, product } = JSON.parse(
        document.querySelector('.js-product-json').innerHTML
    )
    let currentVariant = product.variants.filter((v) => v.id === selectedOrFirstAvailableVariant)[0]

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        currentVariant = product.variants.filter((v) => v.id === parseInt(form.elements.id.value))[0]

        addVariant(currentVariant, form.elements.quantity.value)
        console.log(json)
    })
})
