const storage = {
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    },
    get: (key) => {
        let value = localStorage.getItem(key)
        return value ? JSON.parse(value) : undefined
    },
    remove: (key) => {
        if (key) {
            localStorage.removeItem(key)
        } else {
            localStorage.clear()
        }
    }
}

export default storage