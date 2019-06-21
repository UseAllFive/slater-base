import { component } from 'picoapp'

export default component(() => {
    console.log('slater-welcome mounted')

    return () => {
        console.log('slater-welcome unmounted')
    }
})
