import React from 'react'
const SoundEffects = () => {

    
    const SFX = (state) => {
// sep function
        if (state) {
            console.log('true')
      setTimeout(
                console.log('sfx')
                // SFX.play()
                ,1000)
        } else {
            console.log('false')
            clearTimeout(this.timeoutID);
        }
    }
    // const [backgroundColor, setBackgroundColor] = useState('#f44');

    // const triggerSFX = document.getElementsByClassName("TriggerSFX")
    // console.log(triggerSFX)
    // triggerSFX.addEventListener("mouseover", () => {
    //     // SFX.play();
    //     setBackgroundColor('#1111')
    // });
    // triggerSFX.addEventListener("mouseleave", () => {
    //     // SFX.pause();
    //     // SFX.currentTime = 0;
    //     setBackgroundColor('#f44')
    // });

    return (
        <>
            <div onMouseEnter={() => SFX(true)}
                onMouseLeave={() => SFX(false)} >AAAAAAAAAAAAA</div>
        </>
    )
}

export default SoundEffects;