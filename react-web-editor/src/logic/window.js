export const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
    } else {
        document.exitFullscreen()
    }

}

export const openWindowScreen = () => {
    window.open("http://localhost:5173/", "_blank",
        'width=screen.width,height=screen.height,top=0,left=0'
    )
}