const VideoPage = () => {
    return(
        <>
      <div className="video-container">
        <p className="video-title">This is Kodnest demo Video</p>
        <iframe
          width="760"
          height="315"
          src="https://www.youtube.com/embed/YxXlneeJkO4"
          title="Kodnest Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};
export default VideoPage;