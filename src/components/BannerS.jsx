export default function BannerS({ img, position }) {
  return (
    <>
      <div
        className="w-screen h-[25rem] flex items-center justify-center items-center bg-fixed"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: `${position}`,
        }}
      ></div>
    </>
  );
}
