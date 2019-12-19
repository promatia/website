import { ref, computed } from '@vue/composition-api'

export default function () {
    let loading = ref(false)

    return computed({
        get () {
            return loading.value
        },
        async set (value) {
            loading.value = true
            await value
            loading.value = false
        }
    })
}
