import React from "react";
import styled, {keyframes} from "styled-components";

const generateDrip = (distance) => keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(${distance * 0.5}px);
    opacity: 1;
  }
  100% {
    transform: translateY(${distance}px);
    opacity: 0;
  }
`;

const generateSwing = (intensity) => keyframes`
  0% { transform: rotate(-${intensity}deg); }
  50% { transform: rotate(${intensity}deg); }
  100% { transform: rotate(-${intensity}deg); }
`;

const HoneySeparatorContainer = styled.div`
	position: relative;
	width: 100%;
	height: 10px;
	margin: 60px 0;
`;

const HoneyLine = styled.div`
	width: 100%;
	height: 100%;
	background: linear-gradient(
		to bottom,
		#ffb300 0%,
		#ff9800 30%,
		#ff6d00 50%,
		#ff9800 70%,
		#ffb300 100%
	);
	border-radius: 5px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	position: relative;
	z-index: 2;
`;

const Drop = styled.div`
	position: absolute;
	top: 100%;
	left: ${(props) => props.left}%;
	width: ${(props) => props.size}px;
	height: ${(props) => props.height}px;
	background: linear-gradient(to right, #ff9800 0%, #ffb300 50%, #ff9800 100%);
	border-radius: ${(props) =>
		`${props.radiusTop}% ${props.radiusTop}% ` +
		`${props.radiusBottom}% ${props.radiusBottom}% / ` +
		`${props.radiusSide}% ${props.radiusSide}% ` +
		`${props.radiusCenter}% ${props.radiusCenter}%`};
	animation: ${(props) => generateDrip(props.dripDistance)}
			${(props) => props.duration}s infinite ${(props) => props.delay}s,
		${(props) => generateSwing(props.swingIntensity)}
			${(props) => props.swingDuration}s ease-in-out infinite;
	filter: brightness(${(props) => props.brightness});

	&::before {
		content: "";
		position: absolute;
		top: ${(props) => props.shinePosition}%;
		left: 20%;
		width: 30%;
		height: 30%;
		background: rgba(255, 255, 255, 0.4);
		border-radius: 50%;
		transform: rotate(${(props) => props.shineRotation}deg);
	}
`;

const generateRandomDrops = (count) => {
	return Array.from({length: count}).map((_, index) => ({
		left: Math.random() * 80 + 10,
		size: Math.random() * 6 + 8,
		height: Math.random() * 14 + 12,
		radiusTop: Math.random() * 30 + 50,
		radiusBottom: Math.random() * 30 + 30,
		radiusSide: Math.random() * 20 + 40,
		radiusCenter: Math.random() * 20 + 40,
		dripDistance: Math.random() * 30 + 40,
		duration: Math.random() * 1.5 + 1.5,
		delay: Math.random() * 2,
		swingIntensity: Math.random() * 4 + 2,
		swingDuration: Math.random() * 2 + 3,
		brightness: Math.random() * 0.4 + 1.0,
		shinePosition: Math.random() * 10 + 15,
		shineRotation: Math.random() * 30 + 45,
	}));
};

const HoneySeparator = () => {
	const drops = generateRandomDrops(6);

	return (
		<HoneySeparatorContainer>
			<HoneyLine />
			{drops.map((drop, index) => (
				<Drop key={index} {...drop} />
			))}
		</HoneySeparatorContainer>
	);
};

export default HoneySeparator;
