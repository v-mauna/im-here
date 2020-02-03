import React from 'react';
import './styles/portfolio.css';
import stypSC from './images/stypSC-macbook.png';
import wrSC from './images/wrSC-iPhone.png';
import mcSC from './images/MC-Login-SC.png'

const Portfolio = () => {
	return (
		<div>
			<div id="portfolio">
				<div className="portfolio" />
				<div className="projectTitles">
					<div className="projectsList">
					<br />
					<a href="https://github.com/v-mauna/Mindcraft">
						<img id="picture3" alt='Screenshot Three' src={mcSC} />
						</a>
						<div id='mc'>
                            <a href="https://github.com/v-mauna/Mindcraft"> Mindcraft</a>
							<p>
								Mindcraft is a mindfulness and skill-learning app focused on mental health for people in
								the tech industry. Users are able to take DBT quizzes that are centered around various
								skill sets and receive feedback on their responses. Users graduate to different levels
								based on their performance on these quizzes as well as through daily check-ins, and
								completing a certain amount of journal entries and meditations.
								<br/>
								<br/>
								TECH STACK
								<div>
									<ul>
										<li>React Native</li>
										<li>ReactNavigation</li>
										<li>Node.js</li>
										<li>Express</li>
										<li>Javascript</li>
                                        <li>PostgreSQL</li>
                                        <li>Redux</li>
                                        <li>Heroku</li>
									</ul>
									</div>
							</p>
						</div>
						<br />
						<a href="http://s-t-y-p.herokuapp.com">
						<img className="picture" alt='Shop Till You Pop Screenshot' src={stypSC} />
						</a>
						<div className="projectOne">
							<a href="http://s-t-y-p.herokuapp.com"> Shop Till You Pop</a>
							<p>
								An e-commerce site designed to give users access to a variety of cereals and introduce
								them to some new ones along the way. Shop Till You Pop utlizes the technologies listed
								below to allow users or guests to create carts, continue shopping, edit their carts, and
								checkout. Shop Till You Pop also takes care of inventory management, ensuring that any
								price changes are represented in a user's cart until the time of purchase, and that no
								out-of-stock products are listed as available.
								<p>TECH STACK</p>
								<p>
									<ul>
										<li>React</li>
										<li>Redux</li>
										<li>Node.js</li>
										<li>Express</li>
										<li>PostgreSQL</li>
										<li>OAuth</li>
									</ul>
								</p>
							</p>
						</div>
						<br />
						<a href="https://github.com/v-mauna/workoutsRemixed">
						<img className="picture2" alt='Workouts Remixed Screenshot' src={wrSC} />
						</a>
						<div className="projectTwo">
							<a href="https://github.com/v-mauna/workoutsRemixed"> Workouts Remixed</a>
							<p>
								Created and designed as part of a 3-day Hackathon Project, Workouts Remixed was made for
								those who desire to have more artistic liberties over their workouts. The app gives
								users access to pre-designed workout programs while also allowing them to design and
								store their own programs by accessing individual,targeted exercises as well as having
								the option to choose exercises or circuits from the pre-designed programs.
								<p>TECH STACK</p>
								<p>
									<ul>
										<li>React Native</li>
										<li>ReactNavigation</li>
										<li>Node.js</li>
										<li>Express</li>
										<li>Javascript</li>
									</ul>
								</p>
							</p>
						</div>
						
					</div>
				</div>
			</div>
			<div className="bottom">
				<ul>
					<div />
				</ul>
			</div>
		</div>
	);
};

export default Portfolio;
