import reactLogo from './assets/react.svg';

function Card() {
  return (
    <div class="block m-[30px] w-[400px] shadow-[5px_5px_10px_hsla(0,0%,0%,0.783)] rounded-sm overflow-hidden">
		<div class="bg-black p-5 flex justify-center items-center">
			<img src={reactLogo} class="w-full h-auto max-h-[100px] object-contain" alt="React Logo"/>
		</div>
		<div class="bg-[hsl(0,0%,12%)] text-left p-4">
			<h2 class="font-roboto font-normal text-[24px] text-white mb-[8.4px]">React Logo</h2>
			<p class="font-roboto text-[14px] text-[hsl(180,3%,65%)]">Lorem ipsum dolor sit amet, 
				consectetur adipisicing elit. 
				Repudiandae voluptates exercitationem 
				fugit provident hic non ea cum, 
				facilis tenetur voluptatem omnis 
				aliquid esse eligendi nostrum rerum 
				iste dolorum culpa cumque!
			</p>
		</div>
		<div class="bg-[hsl(0,0%,12%)] px-2 pt-2 pb-4 text-left">
			<a href="https://www.reactjs.org" target="_blank" rel="noreferrer" class="no-underline text-inherit hover:no-underline hover:text-inherit">
				<span class="font-roboto px-2 py-2 text-center text-[#90CAF9] text-[13px] cursor-pointer rounded transition-colors duration-400 ease-in-out hover:bg-[#90caf91a]">SHARE</span>
			</a>

			<a href="https://www.reactjs.org" target="_blank" rel="noreferrer" class="no-underline text-inherit hover:no-underline hover:text-inherit">
				<span class="font-roboto px-2 py-2 text-center text-[#90CAF9] text-[13px] cursor-pointer rounded transition-colors duration-400 ease-in-out hover:bg-[#90caf91a]">LEARN MORE</span>
			</a>
		</div>
    </div>
  );
}

export default Card;
