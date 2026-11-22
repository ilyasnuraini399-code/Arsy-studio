import { Composition, AbsoluteFill, Audio, staticFile } from "remotion";

type Props = {
	text: string;
};

export const MyComposition = () => {
	return (
		<Composition
			id="MyComp"
			component={MyComponent}
			durationInFrames={150}
			fps={30}
			width={1080}
			height={1920}
			defaultProps={{
				text: "Halo Arsy!",
			}}
		/>
	);
};

export const MyComponent: React.FC<Props> = ({ text }) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: "white",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Audio src={staticFile("tts.mp3")} />
			<div style={{ fontSize: 80, fontWeight: "bold", textAlign: "center" }}>
				{text}
			</div>
			<div
				style={{
					position: "absolute",
					bottom: 50,
					right: 50,
					fontSize: 40,
					color: "rgba(0,0,0,0.3)",
					fontWeight: "bold",
				}}
			>
				arsy
			</div>
		</AbsoluteFill>
	);
};
