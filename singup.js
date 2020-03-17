window.onload = function () {
    const form = document.querySelector('form#form-signup')
    const citizen = new Citizen()
    const keyboardListener = createKeyboardListener()
    function createKeyboardListener() {
        document.addEventListener('keydown', handleKeydown)
        function handleKeydown(event) {
            if (event.keyCode != 8 && event.keyCode != 46) {
                try {
                    const input = event.target
                    let id = input.id.charAt(0).toUpperCase() + input.id.slice(1)
                    citizen[`set${id}`](input.value)
                    input.value = citizen[`auto${id}`]()
                } catch (e) {}
            }
        }
    }
}
