import { useState } from "react"

export default function Library(){

    const {fullScreen, setFullScreen} = useState(false)

    function goFullscreen(id) {
        var element = document.getElementById(id);
        if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        }
    }

    return(
        <>
            <div className = "outlet">
                <object id="UnityObject" classid="clsid:444785F1-DE89-4295-863A-D46C3A781394" width="420" height="750" codebase="http://webplayer.unity3d.com/download_webplayer/UnityWebPlayer.cab#version=2,0,0,0">
                    <param name="unity3d" value="WebPlayer.unity3d" />
                    <embed id="UnityEmbed" src="mlpbeta/mlpbeta.unity3d" width="420" height="750" type="application/vnd.unity" pluginspage="http://www.unity3d.com/unity-web-player-2.x" />
                </object>
                <button onClick={() => goFullscreen("duke")}>Fullscreen</button>
            </div>
        </>
    )
}