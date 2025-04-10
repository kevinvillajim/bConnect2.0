import React, {useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";

const generateDrip = (distance) => keyframes`
  0% {
    transform: translateY(0) scale(0.8);
    opacity: 0.6;
  }
  30% {
    transform: translateY(${distance * 0.3}px) scale(1.1);
    opacity: 1;
  }
  70% {
    transform: translateY(${distance * 0.7}px) scale(0.9);
    opacity: 0.8;
  }
  100% {
    transform: translateY(${distance}px) scale(0.6);
    opacity: 0;
  }
`;

const elasticStretch = keyframes`
  0% { transform: scaleY(0.6) translateY(-2px); }
  50% { transform: scaleY(1.1) translateY(0); }
  100% { transform: scaleY(0.6) translateY(-2px); }
`;

const shineEffect = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 0.7; }
  100% { opacity: 0.3; }
`;

const pulseEffect = keyframes`
  0% { transform: scaleY(1); }
  50% { transform: scaleY(1.03); }
  100% { transform: scaleY(1); }
`;

const HoneyProgressContainer = styled.div`
	position: relative;
	width: 100%;
	height: 20px;
	margin: 40px 0 80px 0;
	overflow: visible;
`;

const BackgroundBar = styled.div`
	width: 100%;
	height: 100%;
	background-color: #e0e0e0;
	border-radius: 10px;
	position: relative;
	overflow: visible;
	box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HoneyLine = styled.div`
	width: ${(props) => props.progress}%;
	height: 100%;
	background: linear-gradient(
		to bottom,
		#ffb700 0%,
		#ffa000 30%,
		#ff8800 50%,
		#ffa000 70%,
		#ffb700 100%
	);
	border-radius: 10px 4px 4px 10px;
	box-shadow: 0 2px 8px rgba(255, 152, 0, 0.3),
		inset 0 -1px 4px rgba(100, 50, 0, 0.2);
	position: relative;
	transition: width 0.8s ease-in-out;
	animation: ${pulseEffect} 8s ease-in-out infinite;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 50%;
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0.3),
			rgba(255, 255, 255, 0)
		);
		border-radius: 10px 10px 0 0;
	}

	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: radial-gradient(
				circle at 10% 30%,
				rgba(255, 255, 255, 0.2) 5%,
				transparent 10%
			),
			radial-gradient(
				circle at 25% 60%,
				rgba(255, 255, 255, 0.15) 5%,
				transparent 10%
			),
			radial-gradient(
				circle at 40% 40%,
				rgba(255, 255, 255, 0.2) 5%,
				transparent 10%
			);
		background-size: 40px 40px;
		opacity: 0.6;
	}
`;

const ElasticDrip = styled.div`
	position: absolute;
	top: 100%;
	left: ${(props) => props.left}%;
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	background: linear-gradient(to bottom, #ffa000 10%, #ff9000 50%, #ff8500 90%);
	border-radius: 0 0 40% 40% / 0 0 60% 60%;
	transform-origin: top center;
	animation: ${elasticStretch} ${(props) => props.stretchDuration}s ease-in-out
		infinite;
	z-index: 5;

	&::before {
		content: "";
		position: absolute;
		top: 20%;
		left: 30%;
		width: 40%;
		height: 20%;
		background: rgba(255, 255, 255, 0.4);
		border-radius: 50%;
		animation: ${shineEffect} ${(props) => props.shineAnimationDuration}s
			ease-in-out infinite;
	}
`;

const FallingDrop = styled.div`
	position: absolute;
	top: 100%;
	left: ${(props) => props.left}%;
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	background: radial-gradient(
		ellipse at 40% 30%,
		#ffca28 10%,
		#ffa000 60%,
		#ff8f00 100%
	);
	border-radius: 50% 50% 40% 40%;
	transform: translate(-50%, 0);
	animation: ${(props) => generateDrip(props.dripDistance)}
		${(props) => props.duration}s ease-in infinite ${(props) => props.delay}s;
	z-index: 0;

	&::before {
		content: "";
		position: absolute;
		top: 25%;
		left: 25%;
		width: 30%;
		height: 20%;
		background: rgba(255, 255, 255, 0.5);
		border-radius: 50%;
	}
`;

const PercentageText = styled.div`
	position: absolute;
	right: -50px;
	top: 50%;
	transform: translateY(-50%);
	font-family: Arial, sans-serif;
	font-size: 14px;
	font-weight: bold;
	color: #ff8800;
`;

const generateElasticElements = (progress) => {
	const count = Math.min(5, Math.ceil(progress / 25));

	return Array.from({length: count}).map((_, index) => {
		const left = progress - Math.random() * 3;
		const width = 6 + Math.random() * 4;
		const height = 8 + Math.random() * 6;

		return {
			left: Math.max(0, left),
			width,
			height,
			stretchDuration: 1.5 + Math.random() * 1.5,
			shineAnimationDuration: 2 + Math.random(),
			dropParams:
				Math.random() > 0.3
					? {
							size: 8 + Math.random() * 8,
							dripDistance: 60 + Math.random() * 30,
							duration: 1.5 + Math.random(),
							delay: Math.random() * 0.5,
					  }
					: null,
		};
	});
};

const HoneyProgressBar = ({progress = 0}) => {
	const normalizedProgress = Math.min(100, Math.max(0, progress));
	const [elements, setElements] = useState([]);

	useEffect(() => {
		setElements(generateElasticElements(normalizedProgress));
	}, [normalizedProgress]);

	return (
		<HoneyProgressContainer>
			<BackgroundBar>
				<HoneyLine progress={normalizedProgress} />
				{elements.map((element, i) => (
					<React.Fragment key={i}>
						<ElasticDrip {...element} />
						{element.dropParams && (
							<FallingDrop left={element.left} {...element.dropParams} />
						)}
					</React.Fragment>
				))}
			</BackgroundBar>
			<PercentageText>{Math.round(normalizedProgress)}%</PercentageText>
		</HoneyProgressContainer>
	);
};

export default HoneyProgressBar;
