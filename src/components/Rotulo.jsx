export default function Rotulo({ text }) {
  return (
    <>
      <div className="bg-[rgba(12,18,63,1)] py-[2rem] flex justify-center">
        <span className="font-righteous text-4xl text-[#bf9000]">{text}</span>
      </div>
    </>
  );
}
