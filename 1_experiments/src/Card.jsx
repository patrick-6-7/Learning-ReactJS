function Card({ img, title, description, link1, link2 }) {
  return (
    <div className="block m-[30px] w-[400px] shadow-[5px_5px_10px_hsla(0,0%,0%,0.783)] rounded-sm overflow-hidden">
		<div className="bg-black p-5 flex justify-center items-center">
			<img src={img} className="w-full h-auto max-h-[100px] object-contain" alt={title}/>
		</div>
		<div className="bg-[hsl(0,0%,12%)] text-left p-4">
			<h2 className="font-roboto font-normal text-[24px] text-white mb-[8.4px]">{title}</h2>
			<p className="font-roboto text-[14px] text-[hsl(180,3%,65%)]">{description}</p>
		</div>
		<div className="bg-[hsl(0,0%,12%)] px-2 pt-2 pb-4 text-left">
			<a href={link1} target="_blank" rel="noreferrer" className="no-underline text-inherit hover:no-underline hover:text-inherit">
				<span className="font-roboto px-2 py-2 text-center text-[#90CAF9] text-[13px] cursor-pointer rounded transition-colors duration-400 ease-in-out hover:bg-[#90caf91a]">SHARE</span>
			</a>

			<a href={link2} target="_blank" rel="noreferrer" className="no-underline text-inherit hover:no-underline hover:text-inherit">
				<span className="font-roboto px-2 py-2 text-center text-[#90CAF9] text-[13px] cursor-pointer rounded transition-colors duration-400 ease-in-out hover:bg-[#90caf91a]">LEARN MORE</span>
			</a>
		</div>
    </div>
  );
}

export default Card;
