import reactLogo from '../../assets/react.svg';

function Card() {
  return (
    <div className='card'>
		<div className='ReactLogoDiv'>
			<img src={reactLogo} alt="React logo" className='ReactLogo'/>
		</div>
		<div className='Content'>
			<h2>React Logo</h2>
			<p>Lorem ipsum dolor sit amet, 
				consectetur adipisicing elit. 
				Repudiandae voluptates exercitationem 
				fugit provident hic non ea cum, 
				facilis tenetur voluptatem omnis 
				aliquid esse eligendi nostrum rerum 
				iste dolorum culpa cumque!
			</p>
		</div>
		<div className='Footer'>
			<a href="https://www.reactjs.org" target="_blank" rel="noreferrer">
				<span>SHARE</span>
			</a>

			<a href="https://www.reactjs.org" target="_blank" rel="noreferrer">
				<span>LEARN MORE</span>
			</a>
		</div>
    </div>
  );
}

export default Card;
