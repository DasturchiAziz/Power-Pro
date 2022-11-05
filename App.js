navigator.getBattery().then(battery => {
    let percetange = document.querySelector('.percetange')
    let percent = document.querySelector('.percent')
    let ischarching = document.querySelector('.ischarching')
    
    function updateALL(){
        update()
        updateCharch()
    }
    updateALL()
    
    function update(){
        percetange.style.width = battery.level * 100 + '%';
        percent.innerHTML = battery.level * 100 + '%'
    }
    function updateCharch(){
        ischarching.innerHTML = battery.charging ? 'Your device charging' : ''
    }
    battery.addEventListener('levelchange',()=>{
        update()
    })
    battery.addEventListener('chargingchange',()=>{
        updateCharch()
    })
})
