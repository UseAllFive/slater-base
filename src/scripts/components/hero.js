import { component } from 'picoapp'

export default component(() => {
    console.log('hero mounted')

    return () => {
        console.log('hero unmounted')
    }
})
