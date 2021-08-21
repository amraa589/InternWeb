import React from "react"

const Video = ({url}) => {
    return (
        <div class="video-container">
            <div class="video">
                {url.includes('youtu')?
                <iframe width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                    src={url}>
                </iframe>
                :
                <video width="100%" height="100%" controls>
                    <source src={url} />
                    Your browser does not support the video tag.
                </video>}
            </div>
        </div>
    ) 
}

export default Video
