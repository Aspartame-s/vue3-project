import {ref, Ref, onMounted, onUnmounted} from 'vue'
const useClickOutside =  (elementRef: Ref<null | HTMLElement>): Ref<boolean> => {
    const isClickOutside: Ref<boolean> = ref(false)
    const handler = (e: MouseEvent) => {
        // console.log(elementRef.value)
        if(elementRef.value) {
            if(elementRef.value.contains(e.target as HTMLElement)) {
                isClickOutside.value = false // 如果elementRef 包含当前点击的 dom 说明没有点击在外面
            }else {
                isClickOutside.value = true
            }
        }
    }
    onMounted(() => {
        document.addEventListener('click', handler)
    })
    onUnmounted(() => {
        document.removeEventListener('click', handler)
    })

    return isClickOutside
    
}
export default useClickOutside