const Tiktok = () => {
  return (
    <div className="sndBody">
      <img src="./Tiktok-usage.jpeg" className="imageone" />
      <h1 className="headtag">Just How Harmful Could Tiktok Be? </h1>
      <p className="date">August 31 2023</p>
      <div className="last-area">
        <p className="text">The risks you need to be aware of are:</p>
        <p className="text">
          cyberbullying (bullying using digital technology)
        </p>
        <p className="text">invasion of privacy.</p>
        <p className="text">identity theft.</p>
        <p className="text">your child seeing offensive images and messages.</p>
        <p className="text">to genuenly elaborate here is a small video </p>
      </div>
      <iframe
        src="https://www.youtube.com/embed/JcB2RsHJZhw"
        title="The science behind &#39;TikTok brain&#39;"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="video"
      ></iframe>
    </div>
  );
};
export default Tiktok;
